import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { createSchool, getSchool, updateSchool } from '../../../api/school';
import { SCHOOL_TYPE } from '../../../types/school';

const SchoolForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            start: '',
            end: '',
            desc: '',
            status: 0
        }
    })

    const onSubmit:SubmitHandler<SCHOOL_TYPE> = (data) =>{
            const submitData = {
                ...data
            }
            return handleSubmitSchool(submitData);
    }

    // add
    const handleSubmitSchool = async (data : SCHOOL_TYPE) => {
        const response = await createSchool(data);
        if(response.status === 201){
            navigate('/admin/schools')
        }
    }

    // edit
    const handleUpdateSchool = async (data : SCHOOL_TYPE) => {
        const response = await updateSchool(id , data);
        if(response.status === 200){
            navigate('/admin/schools')
        }
    }

    // get
    const handleGetSchool = async (id : string)  =>{
        const response = await getSchool(id);
        reset({
            ...response.data,
            start: `${response.data.status}`
        })
    }

    useEffect(() => {
        if(id){
            handleGetSchool(id);
        }
    }, [id])

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
                    <label className="form-label float-edit">start time</label>
                    <input type="date" className="form-control"
                    {
                        ...register('start')
                    }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label float-edit">end time</label>
                    <input type="date" className="form-control" 
                    
                    {
                        ...register('end')
                    }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label float-edit">desc</label>
                    <textarea className="form-control"
                    {
                        ...register('desc')
                    }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label float-edit">Status</label>

                    <input className="form-check-input" type="radio"   {...register('status')} value={1}  /> kich hoat
                    <input className="form-check-input" type="radio"   {...register('status')} value={0}  /> khong kich hoat
                </div>


                <button className="btn btn-primary float-edit">Submit</button>
            </form>
        </div>
    )
}

export default SchoolForm
