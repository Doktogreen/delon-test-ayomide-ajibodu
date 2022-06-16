import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../_state';
import { useUserActions } from '../_actions';

export { Nav };

function Nav() {
    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();

    // only show nav when logged in
    if (!auth) return null;
    
    return (
        <>
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    <div className="navbar-header">
                        <a style={{width: '20px'}}  href="index.html">
                            {/* <!-- Logo icon --> */}
                            
                            {/* <!--End Logo icon -->
                            <!-- Logo text --> */}
                            <span style={{width: '20px', height: '20px'}}>
                                {/* <!-- dark Logo text --> */}
                                {/* <!-- Light Logo text --> */}
                                <img src="https://res.cloudinary.com/skiltime/image/upload/v1655397808/LOGO_1_plzgzy.png" className="light-logo" alt="homepage" />
                            </span>
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                                    href="javascript:void(0)"><i className="fa fa-bars"></i></a> </li>
                            
                        <li className='nav-item'>
                            <h4 className='pl-4'><b>Verifyers</b></h4>
                        </li>
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item dropdown u-pro">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="#"
                                    id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="../assets/images/users/1.jpg" alt="user" className="" /> 
                                        <span></span> </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
