  import { Link, NavLink } from "react-router-dom";
  // import logo from '../assets/images/logo.png';

  const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-purple-600 hover:bg-gray-100 rounded-lg px-4 py-2 font-medium"
      : "text-white hover:bg-purple-500 rounded-lg px-4 py-2 font-medium";
  
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 border-b border-purple-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="text-white text-2xl font-bold ml-2">
                JobPortal
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
  export default Navbar;
