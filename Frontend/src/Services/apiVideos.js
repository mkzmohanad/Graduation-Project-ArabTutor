import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function uploadVideos(video) {
    try {
        const {data} = await axios.post(`${BACKEND_URL}/api/v1/videos/uploadVideo` , video , {
            withCredentials : true
        })

        return data
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function getDubbedVideo(dubbedVideoUrl) {
    try {
        const {data} = await axios.post(`${BACKEND_URL}/api/v1/videos/getDubbedVideo` , {"dubbedVideoUrl" : dubbedVideoUrl} , {
            withCredentials : true
        });
        return data
    }
    catch(error) {
        throw new Error(error)
    }
}