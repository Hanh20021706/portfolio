import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAbouts, removeAbout } from '../../../api/about';
import { ABOUT_TYPE } from '../../../types/about'

const AboutList = () => {

    const [abouts, setAbouts] = useState<ABOUT_TYPE[]>([]);

    const handleGetAbouts = async () => {
        const response = await getAbouts();
        setAbouts(response.data);
    }

    const ondelete = async (id: number) => {
        const response = await removeAbout(id);
        if(response.status === 200){
            handleGetAbouts();
        }
    }

    useEffect(() => {
        handleGetAbouts();
    }, [])

    return (
        <div>
            <div style={{ marginTop: '20px', width: '1000px', marginLeft: '250px', marginRight: 'auto' }}>
                <h2 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '50px' }}>
                    QUẢN LÝ THÔNG TIN CÁ NHÂN
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
                            <th scope="col">OBJECTIVE</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">EDIT</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            abouts.map(about => (
                                <tr key={about.id}>
                                    <td>{about.id}</td>
                                    <td>{about.name}</td>
                                    <td>{about.date}</td>
                                    <td>{about.phone}</td>
                                    <td>{about.email}</td>
                                    <td>{about.desc}</td>
                                    <td>{about.objective}</td>
                                    <td>{about.status ? 'kích hoạt' : 'không kích hoạt'}</td>
                                    <td>
                                        <Link to={`/admin/abouts/edit/${about.id}`} className="btn btn-warning">
                                      <i className="fa-solid fa-pen-to-square" />

                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => ondelete(about.id as number)} className='btn btn-danger'>
                                       <i className="fa-solid fa-delete-left" />

                                        </button>
                                    </td>
                                </tr>
                            )) 
                        }


                    </tbody>
                </table>
                <div className="" style={{ float: 'left' }}>
                <Link style={{ margin: '10px 0px' }} className='btn btn-success' to={'/admin/abouts/create'}>
                    Thêm Danh Mục
                </Link>
            </div>
            </div>
            
        </div>
    )
}

export default AboutList
