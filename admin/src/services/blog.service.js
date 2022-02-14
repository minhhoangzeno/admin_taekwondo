import { publicGetApi } from "../apis/API";

export const getBlog = async () => {
    
    let response = await publicGetApi('/blog')
    console.log("response",response)
    return response
};