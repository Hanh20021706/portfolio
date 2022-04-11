import api from './instance';

export const getAbouts = () => {
    return api.get('/abouts')
}

export const getAbout = (id : string | undefined)=> {
    return api.get(`/abouts/${id}`)
}
export const createAbout = (data : any)=> {
    return api.post('/abouts', data)
}
export const updateAbout = (id : string | undefined , data: any)=> {
    return api.put(`/abouts/${id}`, data)
}
export const removeAbout = (id : number | string )=> {
    return api.delete(`/abouts/${id}`)
}