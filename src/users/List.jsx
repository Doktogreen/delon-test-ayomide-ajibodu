import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { usersAtom } from '../_state';
import { useUserActions } from '../_actions';
import './index.css'

export { List };

function List({ match }) {
    const { path } = match;
    const users = useRecoilValue(usersAtom);
    const userActions = useUserActions();

    useEffect(() => {
        userActions.getAll();
        
        return userActions.resetUsers;
        
    }, []);

    return (
        <div>
            <div className="d-flex">
                <div className="">
                    <select className="form-select b-0">
                        <option selected="">All</option>
                        <option value="1">All Verifiers</option>
                        <option value="2">Pending Verifiers</option>
                        <option value="3">Deactivated Verifiers</option>
                    </select>
                </div>
                <div className='ms-auto d-flex'>
                <div className="position-relative">
                    <span className="position-absolute search"><i className="fa fa-search"></i></span>
                    <input className="form-control w-100" placeholder="Search by order#, name..." />
                </div>
                    <Link to={`${path}/add`} className="btn btn-bg btn-primary mb-2">Add New Verifier</Link>
                </div>
            </div>
            <div className='card'>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Phone number</th>
                            <th>Patner</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                <tbody>
                    {users?.map(user =>
                        <tr className='alert' key={user.id}>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.partner}</td>
                            <th>{user.location}</th>
                            <td className="status">
                                <span className={user.status === 'active' ? 'active' : user.status === 'waiting' 
                                    ? 'Awaiting' : user.status === 'deactivated' ? 'eactivated' : 'active' }>
                                    {user.status === 'active' ? 'Active' : user.status === 'waiting' 
                                    ? 'Waiting' : user.status === 'deactivated' ? 'Deactivated' : 'Active' }
                                </span>
                            </td>
                            
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => userActions.delete(user.id)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center bg-transparent">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                    <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='active'>
                                    Active
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='waiting'>
                                    Awaiting approval
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='active'>
                                    Active
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='bg-danger text-white'>
                                    Deactivated
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='active'>
                                    Active
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='bg-danger text-white'>
                                    Deactivated
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                            <span className='waiting'>
                                    Awaiting approval
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='active'>
                                    Active
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='bg-danger text-white'>
                                    Deactivated
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                            <span className='waiting'>
                                    Awaiting approval
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>

                        <tr className='alert'>
                            <td>
                                <label className="checkbox-wrap checkbox-primary">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>Temitope</td>
                            <td>Adejumoke</td>
                            <th>+2348100000000</th>
                            <td>The place</td>
                            <td>Festac</td>
                            <td className="status">
                                <span className='active'>
                                    Active
                                </span>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to="#"className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button  className="btn btn-sm btn-danger" style={{ width: '60px' }}>
                                    <span>Delete</span>
                            
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
            <div className="d-flex mb-3 m-2">
                <div className="d-flext align-center">
                <small className="position-relative">
                    Row per page
                </small>
                 <select className="form-select b-0">
                        <option selected="">10</option>
                        <option value="1">25</option>
                        <option value="2">50</option>
                        <option value="3">100</option>
                    </select>   
                </div>
                <div className='ms-auto d-flex'>
                <small className="position-relative">
                    Previous
                </small>
                <small className='ml-2'>
                    <a href='#'>1</a>
                    <a className='ml-2'href='#'>2</a>
                </small>
                <small className='ml-2'>
                    <a href='#'>Next</a>
                </small>
                </div>
            </div>
            </div>
            {/* <td className="status"><span className="waiting">Waiting for Resassignment</span></td> */}
            
        </div>
    );
}
