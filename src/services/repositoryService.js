import api from './api';

export function listRepositories(){
    return api.get('/repositories');
}
export function addNewRepository(payload){
    const {body} = payload;

    return api.post('/repositories', body);
}
export function deleteRepository(payload){
    const {id} = payload;

    return api.delete(`/repositories/${id}`);
}