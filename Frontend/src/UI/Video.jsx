function Video({videoLink}) {
    return (
        <video width="320" height="240" controls>
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;
