import React from 'react'
import { Link } from 'react-router-dom'

const NavAdmin = () => {
    return (
        <div>

            <div className='sidebar-admin' >
                {/* <h3 className='sidebar-name-admin'>
                My App
            </h3> */}
                <ul className='sidebar-nav-admin'>
                    <li>
                        <Link to={'/admin'}>
                            Dashboard
                        </Link>

                        {/* <a href="">
                        Dashboard
                    </a> */}
                    </li>
                    <li>
                        <Link to={'/admin/abouts'}>
                            About Me
                        </Link>

                    </li>
                    <li>
                        <Link to={'/admin/skills'}>
                            Skills
                        </Link>

                    </li>
                    <li>
                        <Link to={'/admin/project'}>

                      
                                project
                        
                        </Link>

                    </li>
                    <li>
                        <Link to={'/admin/schools'}>
                      
                                school
                        
                        </Link>

                    </li>

                </ul>


            </div >
        </div>
    )
}

export default NavAdmin
