import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default function Menu(props) {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="menu-logo offset-lg-2 col-1">
            <img alt='logo' className="menu-logo-img" src='https://i.pinimg.com/originals/4e/40/dd/4e40ddd11beb9ba671a0b59948861afb.png' />
          </div>

          <div className="col-8 menu-links">
            <NavLink className="menu-link" exact to="/profile" activeClassName="selected">Perfil</NavLink >
            <NavLink className="menu-link" to="/followers" activeClassName="selected">Seguidores</NavLink >
            <NavLink className="menu-link" to="/following" activeClassName="selected">Seguindo</NavLink >
            <NavLink className="menu-link" to="/messages" activeClassName="selected">Mensagens</NavLink >
            {props.user !== '' ? (
              <NavLink exact to="/login" activeClassName="selected">Sair</NavLink >
            ) : (
              <NavLink exact to="/login" activeClassName="selected">Login</NavLink >
            )}
          </div>
        </div>
      </div>
    </div>
  )
}