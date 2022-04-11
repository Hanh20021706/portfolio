import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSchools, removeSchool } from '../../../api/school';
import { SCHOOL_TYPE } from '../../../types/school'

const SchoolList = () => {
    const [schools, setSchools] = useState<SCHOOL_TYPE[]>([]);

    const handleGetSchools = async () => {
        const response = await getSchools();
        setSchools(response.data);
    }

    const ondelete = async (id : number) => {
        const response = await removeSchool(id);
        if(response.status === 200){
            handleGetSchools();
        }
    }

    useEffect(() => {
        handleGetSchools();
    }, [])
    return (
        <div>
            <div style={{ marginTop: '20px', width: '1000px', marginLeft: '250px', marginRight: 'auto' }}>
                <h2 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '50px' }}>
                    QUẢN LÝ DANH SÁCH TRƯỜNG HỌC
                </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">START TIME</th>
                            <th scope="col">END TIME</th>
                            <th scope="col">DESC</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">EDIT</th>
                            <th scope="col">DELETE</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                            {
                                schools.map(school => (
                                    <tr key={school.id}>
                                        <td>{school.id}</td>
                                        <td>{school.name}</td>
                                        <td>{school.start}</td>
                                        <td>{school.end}</td>
                                        <td>{school.desc}</td>
                                        <td>{school.start}</td>
                                        <td>
                                            <Link to={`/admin/schools/edit/${school.id}`} className="btn btn-warning">
                                            <i className="fa-solid fa-pen-to-square" />

                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => ondelete(school.id as number)} className='btn btn-danger'>
                                            <i className="fa-solid fa-delete-left" />

                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }


                    </tbody>
                </table>
                <div className="" style={{ float: 'left' }}>
                    <Link style={{ margin: '10px 0px' }} className='btn btn-success' to={'/admin/schools/create'}>
                        Thêm Danh Mục
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SchoolList
