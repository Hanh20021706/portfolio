import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderClient from '../../components/HeaderClient'

const LayoutClient = () => {
    return (
        <div>
            <HeaderClient/>
            <main>
                <Outlet />
            </main>
           
        </div>
    )
}

export default LayoutClient
