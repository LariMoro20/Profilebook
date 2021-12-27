import Box from "../components/Box";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Signin({ title = "Entrar" }) {
    const [githubUserName, setgithubUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [passwd, setPasswd] = React.useState('');


    const [messageError, setError] = React.useState('');
    const history = useHistory();


    useEffect(() => {
        localStorage.removeItem('user-login')
    }, []);

    const doSignIn = async () => {
        if (githubUserName !== '') {
            fetch(`https://api.github.com/users/${githubUserName}`)
                .then((profile) => profile.json()).then((res) => {
                    if (res) {
                        axios
                            .post("/api/user/add/", {
                                login: {
                                    user: githubUserName,
                                    email: email,
                                    passwd: passwd,
                                    image: `https://github.com/${githubUserName}.png`,
                                    bio: res.bio,
                                    location: res.location,
                                    company: res.company,
                                    name: res.name !== null ? res.name : githubUserName
                                }
                            })
                            .then((response) => {
                                if (response.data.status !== 'ERROR') {
                                    localStorage.setItem('user-login', JSON.stringify(response.data[0]))
                                    history.push(`/login`)
                                } else {
                                    setError('Login invalido')
                                }
                            })
                            .catch((err) => {
                                setError('Login invalido')
                            });
                    } else {
                        setError('Login invalido')
                    }
                }).catch(() => {
                    setError('User do github não existe')
                })
        }
    }
    return (
        <div className='container'>
            <Box className="SignIn text-center row">
                <div className="col-12">
                    <h2>Cadastrar</h2>
                    <p>{messageError}</p>
                </div>
                <form className="row col-12 text-center" onSubmit={async (info) => {
                    info.preventDefault();
                    doSignIn()

                }}>
                    <div className="col-12 mb-2">
                        <input type='text' className="mb-0" placeholder='Seu usuario do Github'
                            onChange={(e) => {
                                setgithubUserName(e.target.value)
                            }}
                        />
                        <small> {githubUserName.length === 0
                            ? 'Preencha o campo de usuario'
                            : ''
                        }</small>
                    </div>
                    <div className="col-12 mb-2">
                        <input type='text' className="mb-0" placeholder='Email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <small> {email.length === 0
                            ? 'Preencha o campo de email'
                            : ''
                        }</small>
                    </div>
                    <div className="col-12 mb-2">
                        <input type='text' className="mb-0" placeholder='Senha'
                            onChange={(e) => {
                                setPasswd(e.target.value)
                            }}
                        />
                        <small>{passwd.length === 0
                            ? 'Preencha o campo de senha'
                            : ''
                        }</small>
                    </div>
                    <div className="col-12 mt-4">
                        <button className="full-w" type='submit'>Cadastrar</button><br />
                        <NavLink className="full-w" exact to="/login" activeClassName="selected">Ja tem conta? Entre</NavLink >
                    </div>
                </form>
            </Box>
        </div>
    );
}