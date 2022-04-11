import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjects, removeProject } from '../../../api/project';
import { PROJECT_TYPE } from '../../../types/project'

const ProjectList = () => {
    const [projects, setProjects] = useState<PROJECT_TYPE[]>([]);

    const handleGetSchools = async () => {
        const response = await getProjects();
        setProjects(response.data);
    }

    const ondelete = async (id: number) => {
        const response = await removeProject(id);
        if (response.status === 200) {
            handleGetSchools();
        }
    }

    useEffect(() => {
        handleGetSchools();
    }, [])

    return (
        <div className="">
            <div style={{ marginTop: '20px', width: '1000px', marginLeft: '250px', marginRight: 'auto' }}>
                <h2 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '50px' }}>
                    QUẢN LÝ THÔNG TIN DỰ ÁN
                </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">START TIME</th>
                            <th scope="col">END TIME</th>
                            <th scope="col">DESC</th>
                            <th scope="col">IMG</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">EDIT</th>
                            <th scope="col">DELETE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.id}</td>
                                    <td>{project.name}</td>
                                    <td>{project.start}</td>
                                    <td>{project.end}</td>
                                    <td>{project.desc}</td>
                                    <td><img src={project.img} alt="" width={200} /></td>
                                    <td>{project.status ? 'kích hoạt' : 'không kích hoạt'}</td>
                                    <td>
                                        <Link to={`/admin/project/edit/${project.id}`} className="btn btn-warning">
                                            <i className="fa-solid fa-pen-to-square" />

                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => ondelete(project.id as number)} className='btn btn-danger'>
                                            <i className="fa-solid fa-delete-left" />

                                        </button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
                <div className="" style={{ float: 'left' }}>
                    <Link style={{ margin: '10px 0px' }} className='btn btn-success' to={'/admin/project/create'}>
                        Thêm Danh Mục
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ProjectList
