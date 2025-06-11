import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../Services/apiAuth";

export function useSignUp() {
    const {mutate : signup , isPending : isSigningUp} = useMutation({
        mutationFn : signupApi,
        onSuccess : () => toast.success("signing up done successfully"),
        onError : () => toast.error("error occurred during signing up, username or email already used before")
    })

    return {signup , isSigningUp}
}