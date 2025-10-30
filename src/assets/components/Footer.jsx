import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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
      <Link to="/Secret" className='chest' onClick={handleShowChest}></Link>
    </footer>
  )
}

export default Footer
