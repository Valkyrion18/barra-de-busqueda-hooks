import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

            </nav>
        </div>
    )
}
