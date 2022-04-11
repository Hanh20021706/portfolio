import api from './instance';

export const getSchools = () => {
    return api.get('/schools');
}

export const getSchool = (id: string | undefined) => {
    return api.get(`/schools/${id}`)
}

export const createSchool = (data: any) => {
    return api.post('/schools', data)
}
export const removeSchool = (id: number | string) => {
    return api.delete(`/schools/${id}`)
}

export const updateSchool =(id: string | undefined , data: any) => {
    return api.put(`/schools/${id}`, data)
}