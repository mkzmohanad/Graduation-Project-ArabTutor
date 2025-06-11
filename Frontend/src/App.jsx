import {BrowserRouter, Route, Routes } from "react-router-dom"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import DubbingVideo from "./Features/DubbingVideos/DubbingVideo";
import LoginForm from "./Features/Auth/LoginForm";
import SignupForm from "./Features/Auth/SignupForm";
import AppLayout from "./UI/AppLayout";
import LandingPage from "./Pages/LandingPage";
import UserProfile from "./Pages/UserProfile";
import FavoriteVideos from "./Pages/FavoriteVideos";
import ProtectedRoutes from "./UI/ProtectedRoutes";
import { Toaster } from "react-hot-toast";
import UploadVideo from "./Pages/UploadVideo";
import ResetPasswordForm from "./Features/Auth/ResetPasswordForm";
import ForgetPasswordEmailConfirmationForm from "./Features/Auth/ForgetPasswordEmailConfirmationForm";
import VideosExplorer from "./Pages/VideosExplorer";

const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 0,
    }
  }
})

function App() {
  
  return <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path = "login" element = {<LoginForm />} />
          <Route path = "signup" element = {<SignupForm />} />
          <Route path = "forgetPassword" element = {<ForgetPasswordEmailConfirmationForm />} />
          <Route path = "resetPassword/:resetToken" element = {<ResetPasswordForm />} />

          <Route element = {<ProtectedRoutes> <AppLayout /> </ProtectedRoutes>}>
            <Route path = "exploreVideos" element = {<VideosExplorer />} />
            <Route path= "dubbingVideo" element = {<DubbingVideo />} />
            {/* <Route path= "showDubbedVideo/:dubbedVideoKey" element = {<ShowDubbedVideo />} /> */}
            <Route path= "uploadVideo" element = {<UploadVideo />} />
            <Route path = "profile" element = {<UserProfile />} />
            <Route path = "favoriteVideos" element = {<FavoriteVideos />} />
          </Route>
          
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" gutter={12} containerStyle={{ margin: "8px" }} toastOptions={
            {
                success : {duration : 3000},
                error : {duration : 5000},
                style : {
                    fontSize: "16px",
                    maxWidth: "500px",
                    padding: "16px 24px",
                    backgroundColor: "#ced4da",
                    color: "#181B22",
                }
            }} />
    </QueryClientProvider>
  </>

}

export default App;