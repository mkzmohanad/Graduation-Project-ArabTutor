import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../Services/apiUser";

export function useUserAccount() {
    const {data : user , isPending : isLoadingUser} = useQuery({
        queryKey : ["user"],
        queryFn : getMe,
    })

    return {user , isLoadingUser , isAuthenticated : user?.isAuthenticated , error : user?.error}
}