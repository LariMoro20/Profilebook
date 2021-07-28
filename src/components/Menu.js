import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = styled.header`
  width: 100%;
  background-color: #7fff00;
  .alurakutMenuProfileSidebar {
    background: white;
    position: fixed;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: .3s;
    pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
    @media(min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: #2E7BB4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ECF2FA;
    }
  }
  .container {
    background-color: #7fff00;
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    position: relative;
    z-index: 101;
      justify-content: flex-start;
    
    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
       display: none;
     
    }
    nav {
      
        display: flex;
      
      a {
        font-size: 0.8em;
        color: #000;
        font-weight: 700;
        padding: 10px 16px;
        position: relative;
        text-decoration: none;
        display:flex;
      }
    }
    input {
      border-radius: 1000px;
      font-size: 12px;
      color: #ffffff;
      background: #808488;
      padding: 10px;
      border: 0;
      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    } 
  }
`;

MainMenu.Logo = styled.img`
  background-color: #ffffff;
  padding: 2px;
  border-radius: 1000px;
  height: 40px;
`;
MainMenu.Links = styled.div`
  display:flex;
`;

export default function Menu() {
  return (
    <MainMenu>
      <div className="container">
        <MainMenu.Logo src='https://i.pinimg.com/originals/4e/40/dd/4e40ddd11beb9ba671a0b59948861afb.png' />
        <MainMenu.Links>
          <nav>
            <Link to="/">Perfil</Link>
            <Link to="/followers">Seguidores</Link>
            <Link to="/following">Seguindo</Link>
            <Link to="/messages">Mensagens</Link>
            <Link to="/#">Sair</Link>
          </nav>
          {/*<nav>
            <input type="text" placeholder="Pesquisar" />
          </nav>*/}
        </MainMenu.Links>
      </div>
    </MainMenu>
  )
}