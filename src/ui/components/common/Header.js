import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { Button as CustomBtn} from './CustomBtn/CustomBtn.styled';
import { toast } from 'react-toastify';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const Header = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken') && !!localStorage.getItem('accountId')); 

  const handleLoginClick = () => setShowLoginModal(true);
  const handleCloseModal = () => {
    setShowLoginModal(false);
    setIsLoggedIn(!!localStorage.getItem('authToken') && !!localStorage.getItem('accountId')); // Actualiza el estado de login
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    toast.success('Cierre de sesión exitoso');  // Notificación de éxito

  };


  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        
        <Link to="/" className="navbar-brand">
          Movie Platform
        </Link>
        <div className='collapse navbar-collapse'>

          <ul className="navbar-nav ml-auto d-flex justify-content-between">
            <li className="nav-item">
                <Link to="/peliculas" className="nav-link">
                Películas
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/tv-shows" className="nav-link">
                TV Shows
                </Link>
            </li>
            <li className="nav-item">
                {isLoggedIn ? (
                  <Link to="/favoritos" className="nav-link">Favoritos</Link>
                ) : (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Debes iniciar sesión para acceder a Favoritos</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <Link disabled  className="nav-link" style={{ pointerEvents: 'none', color: 'grey' }}>
                        Favoritos
                      </Link>
                    </span>
                  </OverlayTrigger>
                )}
            </li>
            <li>
                {isLoggedIn ? (
                    <CustomBtn className="mr-2 mb-2 btn" onClick={handleLogout}>
                      Cerrar Sesión
                    </CustomBtn>
                  ) : (
                    <CustomBtn className="mr-2 mb-2 btn" onClick={handleLoginClick}>
                      Iniciar Sesión
                    </CustomBtn>
                  )}
            </li>
          </ul>

        </div>

      </nav>
      <LoginModal show={showLoginModal} handleClose={handleCloseModal} />
    </header>
  );
};

export default Header;