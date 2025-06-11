import Loading from "../../UI/Loading";
import EachYoutubeVideo from "./EachYoutubeVideo";
import { useGetSearchedVideo } from "./useGetSearchedVideo";
import { useGetYouTubeVideos } from "./useGetYouTubeVideos";

function YoutubeVideosExplorer({searchValue}) {
    const {searchedVideosResults , isLoadingSearchedVideosResults} = useGetSearchedVideo(searchValue)
    const {youtubeVideos , isLoadingYoutubeVideos} = useGetYouTubeVideos();
    
    // console.log(isLoadingSearchedVideosResults)
    // console.log(isLoadingYoutubeVideos)
      const items = searchedVideosResults?.items || youtubeVideos?.data?.items;

    if(isLoadingYoutubeVideos || (searchedVideosResults && isLoadingSearchedVideosResults)) return <Loading />
    console.log(searchedVideosResults)
    console.log(youtubeVideos)
    console.log("=> " , items)

    return  <section className={`${youtubeVideos.data.items.length > 3 ? "h-fit" : "h-dvh"} flex flex-col gap-10`}>
        <h1 className="ml-12 text-headings text-3xl capitalize font-semibold tracking-wider underline">{"What's New:"}</h1>
        <div className="flex gap-10 items-center flex-wrap justify-center">
            {/* {searchedVideosResults ? searchedVideosResults.data.items.map((eachVideo) => <EachYoutubeVideo eachVideo = {eachVideo} key = {eachVideo.id.videoId} />)
            : youtubeVideos.data.items.map((eachVideo) => <EachYoutubeVideo eachVideo = {eachVideo} key = {eachVideo.id.videoId}/>) } */}
                  {items?.map((eachVideo) => (
          <EachYoutubeVideo key={eachVideo.id.videoId} eachVideo={eachVideo} />
        ))}
        </div>
    </section>
}
export default YoutubeVideosExplorer; 