import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logOutRequest } from '../actions';
import '../assets/styles/components/_header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user } = props;

  const hasUser = Object.keys(user).length;

  const handleLogOut = () => {
    props.logOutRequest({});
    props.history.push('/login');
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='User' />}
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser ? (
            <li>
              <Link to='/'>
                {user.name}
              </Link>
            </li>
          ) : null}
          { hasUser ? (
            <li onClick={handleLogOut}>
              Cerrar Sesión
            </li>
          ) : (
            <li>
              <Link to='/login'>
                Cerrar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logOutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
