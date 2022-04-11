import api from './instance';

export const getSkills = () => {
    return api.get('/skills');
}

export const getSkill = (id: string | undefined) => {
    return api.get(`/skills/${id}` )
}

export const createSkill = (data : any) => {
    return api.post('/skills', data);
}

export const updateSkill = (id: string |undefined , data: any) => {
    return api.put(`/skills/${id}`, data)
}

export const removeSkill = (id : number | undefined) => {
    return api.delete(`/skills/${id}`)
}