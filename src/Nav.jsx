import { NavLink } from "react-router-dom";


const Nav = () => {


    const navZ = <>
      
      <li className='/ font-serif ' ><NavLink to='/'>useEffect</NavLink></li>
      <li className='/ font-serif ' ><NavLink to='/useReducer'>useReducer</NavLink></li>
      <li className='/ font-serif ' ><NavLink to='/useMemo'>useMemo</NavLink></li>
    
    </>

    return (
        <div>

        <div className="navbar bg-base-100 p-5 shadow ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navZ}
              </ul>
            </div>
            <div className=' flex items-center gap-1'>
            <img className=" h-[40px] " src="https://michaelwashburnjr.com/hubfs/Imported_Blog_Media/react-icon_svg_.png" alt="" />
            <a className="text-xl font-serif">Rook Hooks</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {navZ}
            </ul>
          </div>
        </div>
            
        </div>
    );
};

export default Nav;