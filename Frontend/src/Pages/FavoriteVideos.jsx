import UserFavoritesVideos from "../Features/User/UserFavoritesVideos";

function FavoriteVideos() {
    return  <main className="w-full h-dvh">
        <div className="pt-32 px-10">
            <h1 className="capitalize font-bold text-2xl mb-12">your favorite videos:</h1>
            <UserFavoritesVideos />
        </div>
    </main>
}
export default FavoriteVideos;