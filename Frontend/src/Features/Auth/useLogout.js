import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { logout as logoutApi} from "../../Services/apiAuth"

export function useLogout() {
    const navigate = useNavigate();

    const {mutate : logout , isPending : isLoggingOut} = useMutation({
        mutationFn : logoutApi,
        onSuccess : () => {
            toast.success("logged out successfully"),
            navigate("/")
        },
        onError : () => toast.error("error while logging out")
    })

    return {logout , isLoggingOut}
}