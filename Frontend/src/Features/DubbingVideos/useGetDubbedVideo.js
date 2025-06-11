import { useMutation } from "@tanstack/react-query";

import {getDubbedVideo as getDubbedVideoApi} from "./../../Services/apiVideos"

export function useGetDubbedVideo() {
    const {mutate : getDubbedVideo , data : dubbedVideo , isPending : isUploadingDubbedVideo} = useMutation({
        mutationFn : getDubbedVideoApi
    })
    return {getDubbedVideo , dubbedVideo , isUploadingDubbedVideo}
}