import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { createSkill, getSkill, updateSkill } from '../../../api/skills';
import { SKILL_TYPE } from '../../../types/skills';

const SkillForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();


    const {register, handleSubmit, formState: {errors} , reset} = useForm({
        defaultValues: {
            name: '',
            point: '',
            status: 0
        }
    })

    const onSubmit : SubmitHandler<SKILL_TYPE>= (data) => {
        const submitData = {
            ...data,
            status: +data.status,
        }
        if(id){
            return handleUpdateSkill(submitData);
        }
        return handleSubmitSkill(submitData);
    }


    // add
    const handleSubmitSkill = async (data: SKILL_TYPE) => {
        const response = await createSkill(data);
        if(response.status === 201){
            navigate('/admin/skills');
        }
    }
    //edit
    const handleUpdateSkill = async(data: SKILL_TYPE) => {
        const response = await updateSkill(id, data);
        if(response.status === 200){
            navigate('/admin/skills');
        }

    }
    // get

    const handleGetSkill = async (id : string)=> {
        const response = await getSkill(id);
        reset({
            ...response.data,
            status: `${response.data.status}`
        })
    }

    useEffect(() => {
        if(id){
            handleGetSkill(id)
        }
    },[id])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '70px' }}>
                <div className="mb-3">
                    <label className="form-label float-edit">Name</label>
                    <input type="text" className="form-control"
                        {
                            ...register('name')
                        }
                    
                    />
                </div>
              
                <div className="mb-3">
                    <label className="form-label float-edit">point</label>
                    <input type="number" className="form-control"
                    {
                        ...register('point')
                    }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label float-edit">Status</label>

                    <input className="form-check-input" type="radio"   {...register('status')} value={1}  /> kich hoat
                    <input className="form-check-input" type="radio"   {...register('status')} value={0}  /> khong kich hoat
                </div>
              

                <button  className="btn btn-primary float-edit">Submit</button>
            </form>
        </div>
    )
}

export default SkillForm
