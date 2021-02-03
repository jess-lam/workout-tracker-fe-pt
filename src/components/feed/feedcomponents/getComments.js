import axios from 'axios'
import {axiosWithAuth} from '../../authentication/axiosWithAuth';
export async function getComments(entity_id){
    let data;
    await axiosWithAuth()
    .get(`/api/comments/get/${entity_id}`)
    .then(response =>{
        data = response;
    })
    .catch(err =>{
        console.log(err);
    })
    
    return data;
}

export async function addComment(entity_id){
    let data;
    await axiosWithAuth()
    .post(`/api/comments/${entity_id}`)
    .then(res =>{
        data = res;
    })
    .catch(err =>{
        console.log(err);
    })

    return data;
}


