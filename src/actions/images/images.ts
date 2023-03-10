import axios from "axios";
import { Dispatch } from "react";
import { GET_IMAGES, imagesDispatchTypes } from "./types";

export const getImages = () => (dispatch: Dispatch<imagesDispatchTypes>) => {
    const params = {
        
    }

    axios.get('https://api.vtargete.pro/api/gallery/getImagesForPaul', params).then(res => {
        console.log(res.data)
        dispatch({
            type: GET_IMAGES,
            payload: res.data
        })
    })
}