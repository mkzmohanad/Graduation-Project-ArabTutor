import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";

function LandingPageLayout() {
    const navigate = useNavigate();

    return  <main className="bg-mainBlue">
        <div className="flex flex-col align-center h-dvh">
            <div className="w-full mb-28 flex justify-between items-center bg-[url(../../public/landingPage-background.jpg)] bg-cover px-14 bg-mainBlue">
                <div className="w-1/2 text-white flex flex-col justify-center gap-5">
                    <h1 className="font-extrabold text-5xl text-buttons">ArabTutor</h1>
                    <p className="text-2xl italic tracking-wide">ArabTutor AI aims to enhance accessibility and inclusivity in education by providing educational resources in Arabic, while also optimizing time efficiency through its content summarization feature.</p>
                    <div className="w-1/2">
                        <Button type="landingPageButtons"
                        onClick={() => navigate("/login")}>Start Now</Button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="../../public/robot.png" className="w-4/5 mx-auto"/>
                </div>
            </div>
            <div className="w-full pb-28 flex justify-between items-center px-14 gap-10 bg-mainBlue">
                <div className="w-1/2">
                    <img src="./../../public/robot-translate.png" alt="" className="rounded-3xl" />
                </div>
                <div className = "w-1/2 flex flex-col justify-center text-center gap-5">
                    <h1 className="font-extrabold text-5xl text-buttons">Bridging the Language Gap with Tech Power</h1>
                    <p className="text-xl italic tracking-wide">ArabTutor AI bridges the educational gap for Arabic speakers by automating the translation and dubbing of educational videos. Using AI technologies like machine learning and natural language processing, it improves translation speed and accuracy, making quality education accessible to millions.</p>
                </div>
            </div>
            <div className="w-full pb-28 flex justify-between items-center px-14 gap-10 bg-mainBlue">
                <div className = "w-1/2 flex flex-col justify-center text-center gap-5">
                    <h1 className="font-extrabold text-5xl text-buttons">{`Summarization "Aggregation"`}</h1>
                    <p className="text-xl italic tracking-wide">To enhance comprehension, ArabTutor AI offers concise summaries of educational video content. This feature allows learners to grasp key concepts quickly and effectively, making learning more efficient and focused on essential information.</p>
                </div>
                <div className="w-1/2">
                    <img src="/summarized.png" alt="" className="rounded-3xl" />
                </div>
            </div>
            <Footer>
    
            </Footer>
        </div>
    </main>
}
export default LandingPageLayout;