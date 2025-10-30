import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [displayChest, setDisplayChest] = useState(false);

  useEffect(() => {
    const savedDisplay = localStorage.getItem('displayOn');
    if (savedDisplay === 'true') {
      setDisplayChest(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  useEffect(() => {
    const charContainer = document.getElementById('character-container');
    if (!charContainer) return;

    if (menuOpen) {
      charContainer.classList.add('hide-characters');
    } else {
      charContainer.classList.remove('hide-characters');
    }

    return () => {
      if (charContainer) {
        charContainer.classList.remove('hide-characters');
        charContainer.removeAttribute('aria-hidden');
      }
    };
  }, [menuOpen]);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    setIsClosing(false);
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => setMenuOpen(false), 200);
  };

  const location = useLocation();
  const isSecretPage = location.pathname === '/Secret';

  return (
    <header id="header">
      <a href="/" className='font-primary text-size-46'>Ana Sander</a>

      <div>
        {!isSecretPage && (
        <nav>
          <a href="#about" className='text-size-20'>Sobre</a>
          <a href="#ed-background" className='text-size-20'>Formação</a>
          <a href="#projects" className='text-size-20'>Projetos</a>
          <a href="#contact" className='text-size-20'>Contato</a>
          <Link to="/Secret" className={`chest ${displayChest ? 'display-flex' : 'display-none'}`}
          ></Link>
        </nav>
      )}

      {!isSecretPage && (
        <button className='btn-menu-header text-size-20' onClick={handleOpenMenu}>
          Menu
        </button>
      )}
      </div>

      {menuOpen && (
        <div
          className={`dark-bg ${isClosing ? 'closing' : ''}`}
          onClick={handleCloseMenu}
        >
          <div
            className={`menu-mobile ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className='close-btn text-size-32' onClick={handleCloseMenu}>
              x
            </button>

            <nav>
              <a href="#about" onClick={handleCloseMenu}>Sobre</a>
              <a href="#ed-background" onClick={handleCloseMenu}>Formação</a>
              <a href="#projects" onClick={handleCloseMenu}>Projetos</a>
              <a href="#contact" onClick={handleCloseMenu}>Contato</a>
              <Link to="/Secret" className={`chest ${displayChest ? 'display-flex' : 'display-none'}`}></Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;