import { useMutation } from "@tanstack/react-query";

import { login as loginApi } from "../../Services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
    const {mutate : login , isPending : isLogging} = useMutation({
        mutationFn : loginApi,
        onSuccess : () => toast.success("you have logged in successfully."),
        onError : () => toast.error("an error occurred while logging in, please try again later or check for your email and password.")
    }) 
    
    return {login , isLogging}
}