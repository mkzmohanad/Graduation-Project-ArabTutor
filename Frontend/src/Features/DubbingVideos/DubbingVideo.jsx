import { useLocation } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

import { useAddToFavorites } from "./useAddToFavorites";
import { useUserAccount } from "../User/useUserAccount";

import MiniSpinner from "../../UI/MiniSpinner"
import Button from "../../UI/Button";
import BackButton from "../../UI/BackButton";
import Error from "../../UI/Error";
import toast from "react-hot-toast";

function DubbingVideo() {
    const location = useLocation();
    const videoData = location.state?.videoData;
    
    const {addToFavorites , isAddToFavorites} = useAddToFavorites();
    const {user , isLoadingUser} = useUserAccount()
    
    const checkingProcessForVideoLink = typeof videoData === "object" ? `https://www.youtube.com/embed/${videoData.id.videoId}` : videoData;

    const [isAlreadyFavorite , setIsAlreadyFavorite] = useState(user.data.data.favoriteVideos.includes(checkingProcessForVideoLink))
    
    function handleAddToFavorites() {
        const favoriteVideos = checkingProcessForVideoLink;
        setIsAlreadyFavorite((favoriteVideo) => !favoriteVideo)
        addToFavorites({favoriteVideos} , {
            onSuccess : () => toast.success(!isAlreadyFavorite ? "Video is added to your favorite videos successfully." : "Video has been removed from your favorite videos successfully."),
            onError : () => toast.error(!isAlreadyFavorite ? "An error occurred while adding video to your favorites!" : "An error occurred while removing video from your favorites!")
        })
    }

    if(!videoData || isLoadingUser) return <Error />

    return  <div className="h-dvh w-dvh flex">
        <div className="w-full h-full flex items-center justify-center flex-col gap-5 pt-10 relative">
            <BackButton to = "stepBack"/>
            <div className="w-2/3 h-2/3 flex justify-center gap-3 relative">
                <iframe className="w-full h-full rounded-xl" src={checkingProcessForVideoLink}>
                    {typeof videoData === "object" ? videoData.snippet.title : ""}
                </iframe>
                <div className="bg-buttons absolute top-0 right-[-80px] rounded-full p-3 cursor-pointer" onClick={handleAddToFavorites}>
                    {isAddToFavorites ? <MiniSpinner /> : isAlreadyFavorite ? <FaHeart className="text-3xl text-white" /> : <FaRegHeart className="text-3xl text-white"/>}
                </div>
            </div>
            <div className="flex justify-evenly items-center w-1/2">
                <Button type="videoOperations">Dubbing Video</Button>
                <Button type="videoOperations">Summarize Video</Button>
            </div>
        </div>
    </div>
}
export default DubbingVideo;