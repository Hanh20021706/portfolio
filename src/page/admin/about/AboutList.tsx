import React from 'react'
import { Link } from 'react-router-dom'

const AboutList = () => {
    return (
        <div>
            <div style={{ marginTop: '20px', width: '1000px', marginLeft: '250px', marginRight: 'auto' }}>
                <h2 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '50px' }}>
                    QUẢN LÝ DANH MỤC SẢN PHẨM
                </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">DATE</th>
                            <th scope="col">PHONE</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">DESC</th>
                            <th scope="col">PHONE</th>
                            <th scope="col">PHONE</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </table>
                <div className="" style={{ float: 'left' }}>
                <Link style={{ margin: '10px 0px' }} className='btn btn-success' to={'/admin/about/create'}>
                    Thêm Danh Mục
                </Link>
            </div>
            </div>
            
        </div>
    )
}

export default AboutList
