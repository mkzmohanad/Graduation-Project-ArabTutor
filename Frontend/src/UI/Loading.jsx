import "../index.css"

function Loading() {
    return  <div className=" absolute top-0 h-dvh w-dvw flex items-center justify-center flex-col gap-3 bg-black opacity-70">
        <div className = "loader"></div>
        <p className="text-darkBlue text-3xl font-bold">Loading...</p>
    </div>
}
export default Loading;