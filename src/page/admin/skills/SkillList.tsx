import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSkills, removeSkill } from '../../../api/skills';
import { SKILL_TYPE } from '../../../types/skills'

const SkillList = () => {
    const [skills, setSkills] = useState<SKILL_TYPE[]>([]);

    const handleGetSkills = async  () => {
        const response =  await getSkills();
        setSkills(response.data);
    }

    const ondelete = async (id: number) => {
        const response = await removeSkill(id);
        if(response.status === 200){
            handleGetSkills();
        }
    }

    useEffect(() => {
        handleGetSkills();
    }, [])

  return (
    <div>
     <div>
              <div style={{ marginTop: '20px', width: '1000px', marginLeft: '250px', marginRight: 'auto' }}>
                  <h2 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '50px' }}>
                      QUẢN LÝ KỸ NĂNG
                  </h2>
                  <table className="table">
                      <thead>
                          <tr>
                              <th scope="col">ID</th>
                              <th scope="col">NAME</th>
                              <th scope="col">POINT</th>
                              <th scope="col">STATUS</th>
                              <th scope="col">EDIT</th>
                              <th scope="col">DELETE</th>

                          </tr>
                      </thead>
                      <tbody>

                            {
                                skills.map(skill =>  (
                                    <tr key={skill.id}>
                                        <td>{skill.id}</td>
                                        <td>{skill.name}</td>
                                        <td>{skill.point}</td>
                                        <td>{skill.status ? 'kích hoạt' : 'không kích hoạt'}</td>
                                        <td>
                                            <Link to={`/admin/skills/edit/${skill.id}`} className="btn btn-warning">
                                            <i className="fa-solid fa-pen-to-square" />

                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => ondelete(skill.id as number)} className='btn btn-danger'>
                                                <i className="fa-solid fa-delete-left" />

                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                      </tbody>
                  </table>
                  <div className="" style={{ float: 'left' }}>
                      <Link style={{ margin: '10px 0px' }} className='btn btn-success' to={'/admin/skills/create'}>
                          Thêm Danh Mục
                      </Link>
                  </div>
              </div>
            
        </div>
    </div>
  )
}

export default SkillList
