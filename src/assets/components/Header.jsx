import { useState } from 'react';
import '../css/Header.css'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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
        </nav>
        <a href="/" className='chest'></a>
        <button className='btn-menu-header text-size-20' onClick={handleOpenMenu}>Menu</button>
      </div>

      {menuOpen && (
        <div className={`dark-bg ${isClosing ? 'closing' : ''}`} onClick={handleCloseMenu}>
          <div
            className={`menu-mobile ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className='close-btn text-size-32' onClick={handleCloseMenu}>x</button>
            <nav>
              <a href="/" onClick={handleCloseMenu}>Sobre</a>
              <a href="/" onClick={handleCloseMenu}>Formação</a>
              <a href="/" onClick={handleCloseMenu}>Projetos</a>
              <a href="/" onClick={handleCloseMenu}>Contato</a>
            </nav>
            <a href="/" className='chest'></a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
