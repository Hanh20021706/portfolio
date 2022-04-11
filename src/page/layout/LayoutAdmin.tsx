import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import NavAdmin from '../../components/NavAdmin'

const LayoutAdmin = () => {
    return (
        <div>
         <header style={{position: 'fixed' , width: '100%', top: '0' , left: '0', right: '0'}}>
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
