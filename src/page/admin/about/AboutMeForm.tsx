import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { createAbout, getAbout, updateAbout } from '../../../api/about';
import { ABOUT_TYPE } from '../../../types/about';

const AboutMeForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            date: '',
            phone: '',
            email: '',
            desc: '',
            objective: '',
            status: 0
        }
    })

   
    const onSubmit: SubmitHandler<ABOUT_TYPE> = (data) => {
        const submitData = {
            ...data,
            status: +data.status,
        };
        if(id){
            return handleUpdateAbout(submitData);
        }
        return handleSubmitAbout(submitData);
    }
     // crate about
     const handleSubmitAbout = async (data: ABOUT_TYPE) => {
        const response = await createAbout(data);
        if (response.status === 201) {
            navigate('/admin/abouts')
        }
    }

    // edit
    const handleUpdateAbout = async (data : ABOUT_TYPE) => {
        const response = await updateAbout(id, data);
        if(response.status === 200) {
            navigate('/admin/abouts')
        }
    }
    // get 
    const handleGetAbout = async ( id : string)=>  {
        const response = await  getAbout(id);
        if(response.status === 200) {
            reset({
                ...response.data,
                status: `${response.data.status}`
            })
        }
    }

    useEffect(() => {
        if(id){
            handleGetAbout(id);
        }
    }, [id]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '75px' }}>
                <div className="mb-3">
                    <label className="form-label float-edit">Name</label>
                    <input type="text" className="form-control"
                        {
                        ...register('name')
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label float-edit">Date</label>
                    <input type="date" className="form-control"
                        {
                        ...register('date')
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label float-edit">Phone</label>
                    <input type="number" className="form-control"
                        {
                        ...register('phone')
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label float-edit">Email</label>
                    <input type="email" className="form-control"

                        {
                        ...register('email')
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label float-edit">Desc</label>
                    <textarea className="form-control"
                        {
                        ...register('desc')
                        }
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label float-edit">Objective</label>
                    <textarea className="form-control"
                        {
                        ...register('objective')
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

export default AboutMeForm
