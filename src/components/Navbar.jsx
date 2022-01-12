/**
 * Make Navabr, including:    
 * 1. discount bar
 * 2. logo link
 * 3. collapse button
 * 4. navbar buttons with dropdown menu and search bar
 * 
 * TODO: 
 * 1. collapse cannot un-dropdown itself when clicking mutilple ones
 * 2. forbidden bootstrap click when hovering for dropdown menu
 */

import { NavLink } from "react-router-dom";
import logo from '../imgs/logo.jpg';
import { VscSearch } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";


/* defined text and location of tags in nav-bar*/
const navTags = {
  1: {tagtext: "New", tagLocation: "/newNotCreats", subset: false,},

  2: {tagtext: "Cloths", tagLocation: "/clothsNotCreate",
      subset: true,
      dropdown: {dropdowntext: "Brand1",
                  dropdownLocation: "Brand2" 
                },
    },

  3: {tagtext: "Shoes", tagLocation: "/shoesNotCreate", 
      subset: true,
      dropdown: {dropdowntext: "Brand1",
                  dropdownLocation: "Brand2" 
                },
    },

  4: {tagtext: "Watches", tagLocation: "/watchNotCreate",
      subset: true,
      dropdown: {dropdowntext: "Brand1",
                  dropdownLocation: "Brand2" 
                },
    },
};

const userTags = {
  1: {tagtext: "My Account", tagLocation: "/userPageNotCreate" },
  2: {tagtext: "Favorite", tagLocation: "/favoriteNotCreate" },
  3: {tagtext: "Basket", tagLocation: "/basketNotCreate" },
  3: {tagtext: "Message", tagLocation: "/messageNotCreate" },
};

const logTags = {
  1: {tagtext: "Log", tagLocation: "/logNotCreate"},
  2: {tagtext: "Register", tagLocation: "/Registration"},
};


/**
 * navbar components
 * @returns 
 */
const Navbar = () => {

    return (
      <div className="navigation h5" id="nav">
              {/** discount bar */}
              <div  id="discount-bar">
                  <span className="" id="discount-text">Get 10% DISCOUNT for new arrivals!</span>
              </div>

              <nav className="navbar navbar-expand-lg navbar-light">
                    {/** logo link */}
                    <NavLink key="logo" className="navbar-brand active" to="/" id="nav-brand">
                        <img src={logo} alt="STAYCOOL" width="100px"/>
                    </NavLink>

                    {/** collapse button */}
                    <div className="ms-auto mx-5">
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                                <span ><VscMenu /></span>
                          </button>

                          <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navsearch">
                                <span ><VscSearch /></span>
                          </button>

                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navuser">
                                <span><VscAccount /></span>
                          </button>
                    </div>

                    <div className="container" >
                        {/** navbar buttons with dropdown menu */}
                        <div className="collapse navbar-collapse" id="navmenu">
                          <ul className="navbar-nav">

                            {/** button "New" */}
                            <NavLink className="nav-link ms-auto" to="/newNotCreate"  role="button"  aria-expanded="false">
                                  New
                            </NavLink>

                            {/** button "Cloths" */}
                            <li className="nav-item dropdown ms-auto">
                              <a className="nav-link dropdown-toggle text-end" href="/notCreate" id="navbarDarkDropdownMenuLink" role="button" 
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                    Cloths
                              </a>

                              {/** dropdown "Cloths" */}
                              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/notCreate">All</a></li>
                                <li><a className="dropdown-item" href="/notCreate">Brand1</a></li>
                                <li><a className="dropdown-item" href="/notCreate">Brand2</a></li>
                              </ul>                          
                            </li>

                            {/** button "shoes" */}
                            <li className="nav-item dropdown ms-auto">
                              <a className="nav-link dropdown-toggle text-end" href="/notCreate" id="navbarDarkDropdownMenuLink" role="button" 
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                    Shoes
                              </a>

                              {/** dropdown "Shoes" */}
                              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/notCreate">All</a></li>
                                <li><a className="dropdown-item" href="/notCreate">Brand1</a></li>
                                <li><a className="dropdown-item" href="/notCreate">Brand2</a></li>
                              </ul>
                            </li>

                            {/** button "Watches" */}
                            <li className="nav-item dropdown ms-auto">
                              <a className="nav-link dropdown-toggle text-end" href="/notCreate" id="navbarDarkDropdownMenuLink" role="button" 
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                    Watches
                              </a>

                              {/** dropdown "Watches" */}
                              <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/notCreate">All</a></li>
                                <li><a className="dropdown-item" href="/notCreate">Brand1</a></li>
                                <li><a className="dropdown-item" href="/notCreate">Brand2</a></li>
                              </ul>
                            </li>

                          </ul>
                        </div>

                        {/** search bar */}
                        <div className=" collapse navbar-collapse mx-5" id="navsearch">
                          <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                          </form>
                        </div>

                        {/** user buttons*/}
                        <div className="collapse navbar-collapse" id="navuser">
                          <ul className="navbar-nav" >
                                {Object.values(logTags).map((e) => (
                                  <li className="nav-item  ms-auto mx-5" key = {e.tagtext}>
                                      <NavLink className="nav-link" role="button" to={e.tagLocation}>{e.tagtext}</NavLink>
                                  </li>
                                ))}
                            </ul>
                        </div>

                    </div>

              </nav>   
      </div>
    )
}


export default Navbar
