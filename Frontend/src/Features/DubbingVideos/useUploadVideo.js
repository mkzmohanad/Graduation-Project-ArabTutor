import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {uploadVideos as uploadVideosApi} from "../../Services/apiVideos"

export function useUploadVideo() {
    const {mutate : uploadVideo , data : dubbedVideoData , isPending : isUploading} = useMutation({
        mutationFn : uploadVideosApi,
        onSuccess : () => toast.success("Video uploaded successfully for dubbing, please wait until AI finish dubbing your video.... "),
        onError : () => toast.error("An error occurred while uploading the video!")
    })

    return {uploadVideo , dubbedVideoData , isUploading};
}
