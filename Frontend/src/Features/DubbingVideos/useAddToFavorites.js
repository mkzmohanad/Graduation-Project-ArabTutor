import { useMutation } from "@tanstack/react-query";
import { updateUserDate } from "../../Services/apiUser";

// import {addToFavorites as addToFavoritesApi} from "../../Services/apiUser"

export function useAddToFavorites() {
    const {mutate : addToFavorites , isPending : isAddToFavorites} = useMutation({
        mutationFn : updateUserDate,
    })

    return {addToFavorites , isAddToFavorites}
}