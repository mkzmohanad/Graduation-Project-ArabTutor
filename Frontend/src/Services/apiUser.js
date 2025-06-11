import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// console.log("BACKEND_URL IS:", BACKEND_URL);


export async function getMe() {
    try {
        const {data} = await axios.get(`${BACKEND_URL}/api/v1/users/getMe` , {
            withCredentials: true ,
            headers : {'Content-Type': 'application/json',}
        });
        // console.log(data)
        return {data , isAuthenticated : true};
    }
    catch(error) {
        return {data : null , error , isAuthenticated : false};
    }
}

export async function updateUserDate(newData) {
    try {
        const {data} =await axios.patch(`${BACKEND_URL}/api/v1/users/updateMe` , newData  , {
            withCredentials: true
        })
        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function resetMe() {
    try {
        const {data} =await axios.patch(`${BACKEND_URL}/api/v1/users/resetMe`, {} , {
            withCredentials: true
        })
        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function deleteMe(password) {
    try {
        const {data} = await axios.patch(`${BACKEND_URL}/api/v1/users/deleteMe`, password , {
            withCredentials: true,
        })
        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

// export async function addToFavorites() {

// }