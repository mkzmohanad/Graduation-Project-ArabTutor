import { useState } from "react";
import YoutubeVideosExplorer from "../Features/ExploringVideos/YoutubeVideosExplorer";
import Search from "../UI/Search";
import { useGetSearchedVideo } from "../Features/ExploringVideos/useGetSearchedVideo";

function VideosExplorer() {
    const [searchValue, setSearchValue] = useState("");
      const { isLoadingSearchedVideosResults } = useGetSearchedVideo(searchValue);
      console.log(isLoadingSearchedVideosResults)

    return  <main className="py-28 flex flex-col gap-10">
        <Search setSearchValue = {setSearchValue} isDisabled = {isLoadingSearchedVideosResults} />
        <YoutubeVideosExplorer searchValue = {searchValue} />
    </main>
}
export default VideosExplorer;