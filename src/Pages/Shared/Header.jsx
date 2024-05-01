import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
const Header = () => {
    
  return (
    <div className='flex justify-center items-center h-28 mx-5 md:mx-12 lg:mx-14'>
      <div className="navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/services'><li>Services</li></Link>
              <Link to='/blogs'><li>Blogs</li></Link>
              <Link to='/contact'><li>Contact</li></Link>       
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#494949] font-semibold">
              <Link className='mr-3' to='/'><li>Home</li></Link>
              <Link className='mr-3' to='/about'><li>About</li></Link>
              <Link className='mr-3'  to='/services'><li>Services</li></Link>
              <Link className='mr-3'  to='/blogs'><li>Blogs</li></Link>
              <Link to='/contact'><li>Contact</li></Link>      
          </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
            </button>
            <button className='bg-white text-[rgb(255,56,17)] border border-[rgb(255,56,17)] px-7 py-4 text-lg font-semibold'>Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
