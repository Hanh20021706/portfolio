import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createProject, getProject, updateProject } from '../../../api/project';
import {PROJECT_TYPE}  from '../../../types/project'

const ProjectForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [imageBase64, setImgBase64] = useState<any>('');


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            start: '',
            end: '',
            desc: '',
            img: '',
            status: 0
        }
    })

    const onSubmit:SubmitHandler<PROJECT_TYPE> = (data) => {
        const submitData = {
            ...data,
            img : imageBase64
        }
        return handleSubmitProject(submitData);
    }
// add
    const handleSubmitProject = async(data: PROJECT_TYPE) => {
        const response = await createProject(data);
        if(response.status === 201){
            navigate('/admin/project')
        }

    }
    //edit
    const handleUpdateProject = async (data: PROJECT_TYPE) => {
        const response = await updateProject(id, data);
        if(response.status === 200){
            navigate('/admin/project')
        }
    }

    // get
    const handleGetProject = async(id: string) => {
        const response = await getProject(id);
        reset({
            ...response.data,
            start: `${response.data.status}`
        })
    }


    // img
    const getEventResult = (event: any)=> {
        if(event && event.target && typeof event.target.result == 'string') {
            return event.target.result;
        }
        return '';
    }

    const handleChangeFile = (event: any) => {
        // const accsepImgType = ['img/jpg', 'img/png'];
        const file = event.target.files[0];
        if(!file){
            console.log("khong co file");
            return;
        }else if(file.size > 5000000000){
            console.log("file qua lon");
            return;
        }
        // else if(!accsepImgType.includes(file.type)){
        //     console.log("file khong dung dinh dang");
        //     return;
        // }

        const render = new FileReader();
        

        render.onload = (e) => {
            const image = new Image();
            if(e && e.target){
                image.src = getEventResult(e);
                console.log(image.width, image.height, file.size, file.type)
                setImgBase64(e.target.result);
            }

        }
        render.readAsDataURL(file);

    }

    useEffect(() => {
        if(id){
            handleGetProject(id);
        }
    } , [id])

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
                    <label className="form-label float-edit">img</label>
                    <input type="file" className="form-control" 
                    onChange={(event) => handleChangeFile(event)}
                    />
                    <img src={imageBase64}  width={200} alt=""  style={{marginTop: '20px'}}/>
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

export default ProjectForm
