import { useEffect, useState } from 'react';
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

  return (
    <header id="header">
      <a href="/" className='font-primary text-size-46'>Ana Sander</a>
      <div>
        <nav>
          <a href="/" className='text-size-20'>Sobre</a>
          <a href="/" className='text-size-20'>Formação</a>
          <a href="/" className='text-size-20'>Projetos</a>
          <a href="/" className='text-size-20'>Contato</a>
          <a href="/" className={`chest ${displayChest ? 'display-flex' : 'display-none'}`}
        ></a>
        </nav>


        <button className='btn-menu-header text-size-20' onClick={handleOpenMenu}>
          Menu
        </button>
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
              <a href="/" onClick={handleCloseMenu}>Sobre</a>
              <a href="/" onClick={handleCloseMenu}>Formação</a>
              <a href="/" onClick={handleCloseMenu}>Projetos</a>
              <a href="/" onClick={handleCloseMenu}>Contato</a>
              <a href="/" className={`chest ${displayChest ? 'display-flex' : 'display-none'}`}></a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;