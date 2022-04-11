import api from './instance';

export const getProjects = () => {
    return api.get('/project')
}

export const getProject = (id : string | undefined) => {
    return api.get(`/project/${id }`)
}
export const createProject = (data: any) => {
    return api.post('/project', data)
}
export const removeProject = (id: string| number) => {
    return api.delete(`/project/${id}`)
}
export const updateProject = (id: string | undefined , data: any) => {
    return api.put(`/project/${id}`, data)
}