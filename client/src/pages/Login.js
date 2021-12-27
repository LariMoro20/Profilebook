import Box from "../components/Box";
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login({ title = "ProfileBook", handleGitUser }) {
    const [githubUser, setgithubUser] = React.useState('');
    const [messageError, setError] = React.useState('');
    const history = useHistory();
    useEffect(() => {
        localStorage.removeItem('user-login')
    }, []);

    const asyncLocalStorage = {
        setItem: function (key, value) {
            return Promise.resolve().then(function () {
                localStorage.setItem(key, value);
            });
        },
        getItem: function (key) {
            return Promise.resolve().then(function () {
                return localStorage.getItem(key);
            });
        }
    };

    const doLogin = async () => {
        fetch(`https://api.github.com/users/${githubUser}`)
            .then((profile) => {
                if (profile.ok) {
                    axios
                        .post("/api/user/login/", {
                            login: { user: githubUser }
                        })
                        .then((response) => {
                            if (response.data.status !== 'ERROR') {
                                asyncLocalStorage.setItem('user-login', JSON.stringify(response.data[0])).then((e) => {
                                    console.log('entrou no asyncLocalStorage')
                                    history.push(`/`)

                                })
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
    return (
        <div className='container'>
            <Box className="login text-center row">
                <div className="col-12">
                    <h2>Login</h2>
                    <p>{messageError}</p>
                </div>

                <form className="row col-12 text-center" onSubmit={async (info) => {
                    info.preventDefault();
                    doLogin()
                }}>
                    <div className="col-12">
                        <input type='text' placeholder='Seu usuario Github'
                            onChange={(e) => {
                                setgithubUser(e.target.value)
                            }}
                        />
                    </div>
                    <div className="col-12">
                        <small>{githubUser.length === 0
                            ? 'Preencha o campo de usuario'
                            : ''
                        }</small>
                    </div>
                    <div className="col-12 mt-4 ">
                        <button className="full-w" type='submit'>Login</button><br />
                        <NavLink exact to="/SignIn" className="full-w" activeClassName="selected">Não tem conta? Cadastrar</NavLink >
                    </div>

                </form>

            </Box>
        </div>
    );
}
