import { useEffect, useState } from 'react';
import '../css/Footer.css'

function Footer() {
  const [_, setDisplayChest] = useState(false);

  useEffect(() => {
    const savedDisplay = localStorage.getItem('displayOn');
    if (savedDisplay === 'true') {
      setDisplayChest(true);
    }
  }, []);

  const handleShowChest = () => {
    setDisplayChest(true);
    localStorage.setItem('displayOn', 'true');
  };

  return (
    <footer id="footer">
      <a href="/" className='chest' onClick={handleShowChest}></a>
    </footer>
  )
}

export default Footer
