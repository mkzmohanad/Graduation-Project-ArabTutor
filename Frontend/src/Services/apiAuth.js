import axios from "axios";

const BACKEND_API = import.meta.env.VITE_BACKEND_URL;

export async function signup(userSignUpData) {
    try{
        const {data} = await axios.post(`${BACKEND_API}/api/v1/users/signup` , userSignUpData , {
            withCredentials : true
        })

        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function login(userLoginData) {
    try {
        const {data} = await axios.post(`${BACKEND_API}/api/v1/users/login` , userLoginData , {
            withCredentials: true ,
        })

        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function logout() {
    try {
        await axios.get(`${BACKEND_API}/api/v1/users/logout` , {
            withCredentials: true ,
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function updatePassword(newPassword) {
    try{
        const {data} = await axios.patch(`${BACKEND_API}/api/v1/users/updatePassword` , newPassword , {
            withCredentials: true
        })

        return data
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function restrictedForAdmin() {
    try {
        await axios.patch("http://")
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function forgetPassword(userEmail) {
    try {
        const data = await axios.post(`${BACKEND_API}/api/v1/users/forgetPassword` , userEmail , {
            withCredentials: true
        })

        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function resetPassword(userResetPassword , resetToken) {
    try {
        const data = await axios.patch(`${BACKEND_API}/api/v1/users/resetPassword/${resetToken}` , userResetPassword , {
            withCredentials: true
        })

        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}