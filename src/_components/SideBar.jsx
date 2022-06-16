import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../_state';
import { useUserActions } from '../_actions';

export { SideBar };

function SideBar() {
    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();

    // only show nav when logged in
    if (!auth) return null;
    
    return (
        <>
            <aside className="left-sidebar pl-3">
                {/* <!-- Sidebar scroll--> */}
                <div className="scroll-sidebar">
                    {/* <!-- Sidebar navigation--> */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li> <a className="waves-effect waves-dark" href="/verifiers" aria-expanded="false"><i
                                        className="fa fa-tachometer"></i><span className="hide-menu">Verifyers</span></a>
                            </li>
                            <li> 
                                <a className="waves-effect waves-dark" href="#" aria-expanded="false">
                                <i className="fa fa-table"></i>
                                    <span className="hide-menu">
                                        Deals
                                    </span>
                                </a>
                            </li>
                            <li> <a className="waves-effect waves-dark" href="#" aria-expanded="false"><i
                                        className="fa fa-smile-o"></i><span className="hide-menu">Transactions</span></a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <a href='#' onClick={userActions.logout}
                                className="btn waves-effect waves-light btn-info hidden-md-down text-white">Logout</a>
                        </div>
                    </nav>
                    {/* <!-- End Sidebar navigation --> */}
                </div>
                {/* <!-- End Sidebar scroll--> */}
            </aside>
        </>
    );
}
