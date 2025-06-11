import { useQuery } from "@tanstack/react-query";

import { getYouTubeVideos } from "../../Services/apiYouTube";

export function useGetYouTubeVideos() {
    const {data : youtubeVideos , isPending : isLoadingYoutubeVideos} = useQuery({
        queryKey : ["youtubeVideos"],
        queryFn : getYouTubeVideos
    })

    return {youtubeVideos , isLoadingYoutubeVideos  }
}