/**
 * Footer with links including join us, contact and to be a seller. 
 */
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <footer className="bg-light fixed-bottom">
                <div className="container">

                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" href="/notCreate">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/notCreate">Join Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/notCreate">To be a Seller</a>
                        </li>
                    </ul>

                    <p className="m-0 text-center text-black">
                        Copyright &copy; STAY COOL 2020
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
