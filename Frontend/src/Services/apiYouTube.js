import axios from "axios";

const API_KEY = "AIzaSyAA9ZyDmhFmI7e6ORUAYxxBYw-PDc2kuBo";

export async function getYouTubeVideos() {
    try {
        console.log("fetched")
        const data = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: "snippet",
                    q: "programming",
                    type: "video",
                    maxResults: 6,
                    key: API_KEY
                }
            })
        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

export async function getSearchedYouTubeVideos(searchValue) {
    try{
        const {data} = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: "snippet",
                    q: searchValue,
                    type: "video",
                    maxResults: 6,
                    key: API_KEY
                }
            });
        return data;
    }
    catch(error) {
        throw new Error(error)
    }
}

// export async function getYouTubeVideos() {
//     try {
//         const data = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=programming&type=video&partsnippet&key=AIzaSyCMssRxyUN-B7cJQmEYCobrlA-wrmcZ0JQ")
//         console.log(data)
//         return data;
//     }
//     catch(error) {
//         throw new Error(error)
//     }
// }

// 681658451228-c0c29vufisqksnld1u7nsrghblf135mb.apps.googleusercontent.com

// KEY => AIzaSyAM1qVNymDo5l-_wxggWdL0JyJp3LwS9Gc