import { useQuery } from "@tanstack/react-query";
import { getSearchedYouTubeVideos } from "../../Services/apiYouTube";

export function useGetSearchedVideo(searchValue) {
    const {data : searchedVideosResults , isPending : isLoadingSearchedVideosResults} = useQuery({
        queryKey : ["searchedVideos" , searchValue],
        queryFn : () => getSearchedYouTubeVideos(searchValue),
        enabled: !!searchValue
    })
    return {searchedVideosResults , isLoadingSearchedVideosResults}
}