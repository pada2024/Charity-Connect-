import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (<div className="d-flex justify-content-between align-items-center">
    <h1>Charity Connect</h1>
    <ul className="nav nav-tabs">
        <li className="nav-item">
        <Link
          to="/Home"
          className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Signup"
          className={currentPage === '/Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Login"
          className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Food"
          className={currentPage === '/Food' ? 'nav-link active' : 'nav-link'}
        >
          Food
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Donations"
          className={currentPage === '/Donations' ? 'nav-link active' : 'nav-link'}
        >
          Donations
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul> </div>
  );
}

export default NavTabs;

  
