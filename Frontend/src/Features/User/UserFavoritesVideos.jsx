import Loading from "../../UI/Loading";
import EachUserFavoritesVideos from "./EachUserFavoritesVideos";
import { useUserAccount } from "./useUserAccount";

function UserFavoritesVideos() {
    const {user , isLoadingUser} = useUserAccount();

    if(isLoadingUser) return <Loading />

    const allUserFavoriteVideos = user.data.data?.favoriteVideos;
    // console.log(allUserFavoriteVideos)
    return  <section className="flex gap-10">
        {allUserFavoriteVideos.length === 0 && <div className="w-fit mx-auto h-full flex items-center justify-center bg-red-800 text-secondaryGray px-7 py-4 text-xl rounded-full uppercase font-bold">no videos added to your favorite list yet.</div>}
        {allUserFavoriteVideos.map((eachVideo , index) => <EachUserFavoritesVideos key={index} eachVideo = {eachVideo} />)}
    </section>
}
export default UserFavoritesVideos;