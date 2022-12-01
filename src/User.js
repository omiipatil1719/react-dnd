import axios from "axios"

export const sendApiData=(payload)=>{
    return axios({
        method:"GET",
        payload:payload,
        url:'https://jsonplaceholder.typicode.com/posts'
    })
}