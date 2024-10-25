import React from 'react'
import { Link } from 'react-router-dom';
import { Section, FooterBottom, FooterContainer, SocialIcons } from './CustomFooter.styled'

 const Footer = () => {
    return (
        <div className='footer-wrapper d-flex w-100 flex-column'>
            <FooterContainer>
                <Section>
                    <h4>Explorar</h4>
                    <ul>
                    <li>
                        <Link to="/peliculas" className="nav-link">
                        Películas
                        </Link>
                    </li>
                    <li>
                        <Link to="/tv-shows" className="nav-link">
                        TV Shows
                        </Link>
                    </li>
                    <li>
                        <Link to="/favoritas" className="nav-link">
                        Favoritas
                        </Link>
                    </li>
                    </ul>
                </Section>
            
                <Section>
                    <h4>Direcciones</h4>
                    <ul>
                    <li><a href="#!">Oficinas</a></li>
                    <li><a href="#!">Soporte</a></li>
                    <li><a href="#!">Preguntas frecuentes</a></li>
                    </ul>
                </Section>
            
                <Section>
                    <h4>Términos y Condiciones</h4>
                    <ul>
                    <li><a href="#!">Privacidad</a></li>
                    <li><a href="#!">Términos de servicio</a></li>
                    <li><a href="#!">Política de cookies</a></li>
                    </ul>
                </Section>
            
                <Section>
                    <h4>Redes Sociales</h4>
                    <SocialIcons>
                    <a href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a href="#!"><i className="fab fa-twitter"></i></a>
                    <a href="#!"><i className="fab fa-instagram"></i></a>
                    <a href="#!"><i className="fab fa-youtube"></i></a>
                    </SocialIcons>
                </Section>
        

            </FooterContainer>
            <FooterBottom>
                © 2024 Movie Platform. Todos los derechos reservados.
            </FooterBottom>
        </div>
        

  )
}

export default Footer