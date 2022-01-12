/**
 * Make home page
 * TODO: 
 * 1. scrolling advertise area
 * 2. Item showcase 
 */
import React from 'react'
import logo from '../imgs/logo.jpg';
import blueDress from '../imgs/blueDress.jpg';
import purpleDress from '../imgs/purpleDress.jpg';
import purpleDress2 from '../imgs/purpleDress2.jpg';
import { NavLink } from "react-router-dom";




const Home = () => {
    return (
    <div className="home">
        <section id="advertise-box" className="bg-light text-dark text-center" >
            <div className="container">
                <div className="d-sm-flex">
                    <div className="my-2">
                        <h1 className="p-3" id="advertise-text">The BEST vintage website</h1>
                        <p> This is a paragraph, next to imgs. </p>
                        <NavLink className="btn btn-dark btn-lg my-3" to="/Registration"  role="button"  aria-expanded="false">
                            Register
                        </NavLink>
                    </div>
                    <img className="img-fluid my-5 d-none d-sm-block mx-5" src={logo} alt="STAYCOOL" style={{width: "200px", height: "200px"}}/>
                    <img className="img-fluid my-5 d-none d-md-block mx-5" src={logo} alt="STAYCOOL" style={{width: "200px", height: "200px"}}/>
                    <img className="img-fluid my-5 d-none d-lg-block mx-5" src={logo} alt="STAYCOOL" style={{width: "200px", height: "200px"}}/>

                </div>
            </div>
        </section>

        <section id="item-box" className="bg-white text-dark p-5" >
            <div className="container">
                <div className="row text-center">
                    <div className="col-md">A</div>
                    <div className="col-md">B</div>
                    <div className="col-md">C</div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Home
