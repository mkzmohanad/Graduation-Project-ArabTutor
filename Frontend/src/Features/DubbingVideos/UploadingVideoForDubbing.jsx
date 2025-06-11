import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

import { useUploadVideo } from "./useUploadVideo";

import Loading from "../../UI/Loading"
import BackButton from "../../UI/BackButton";
import Button from "../../UI/Button";
import { useGetDubbedVideo } from "./useGetDubbedVideo";
import Video from "../../UI/Video";

function UploadingVideoForDubbing() {
    const {register , handleSubmit , reset , watch} = useForm();
    const {uploadVideo , dubbedVideoData , isUploading} = useUploadVideo();
    const {getDubbedVideo , dubbedVideo , isUploadingDubbedVideo} = useGetDubbedVideo()

    
    const uploadedVideo = watch("video");
    
    if(isUploading || isUploadingDubbedVideo) return <Loading />
    
    const {videoSummarization , dubbedVideoURL} = dubbedVideoData?.data ?? {};
    
    function handleSubmittingForm(data) {
        const formData = new FormData();
        if (data.video && data.video.length > 0) formData.append('video', data.video[0]); 

        uploadVideo(formData , {
            onSettled : () => reset(),
            onSuccess: (data) => {
                const videoUrl = data?.data?.dubbedVideoURL;
                if (videoUrl) getDubbedVideo(videoUrl);
            }
        })
    }

    return  <section className="w-1/2 mx-auto h-dvh flex flex-col gap-7 mt-24 items-center justify-center">
        <BackButton to = "stepBack"/>
        {dubbedVideo ? <Video videoLink = {dubbedVideo.data} /> 
        : <form onSubmit={handleSubmit(handleSubmittingForm)} className="w-full flex flex-col gap-5 items-center justify-center">
            <input type="file" id = "file" className={`uploadInput`} disabled = {isUploading} accept="video/*" {...register("video" , {})} />
            <label htmlFor="file" className={`uploadLabel`}><h1 className="">Upload Video For Dubbing And Summarizing</h1></label>
            <div className="flex justify-evenly items-center w-full">
                <Button disabled = {isUploading} type="videoOperations">Dubbing Video</Button>
                <Button disabled = {isUploading} type="videoOperations">Summarize Video</Button>
            </div>
        </form>}
        {videoSummarization? <div className="flex flex-col gap-3">
            <h1 className=" font-bold text-xl">Video Summery:</h1>
            <p className="text-lg tracking-wider">{videoSummarization}</p>
        </div> : ""}
    </section>
}
export default UploadingVideoForDubbing;