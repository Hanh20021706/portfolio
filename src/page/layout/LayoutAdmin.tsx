import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import NavAdmin from '../../components/NavAdmin'

const LayoutAdmin = () => {
    return (
        <div>
         <header>
             <HeaderAdmin/>
             <NavAdmin/>
         </header>
         <main>
             <Outlet/>
         </main>
        </div>
    )
}

export default LayoutAdmin
