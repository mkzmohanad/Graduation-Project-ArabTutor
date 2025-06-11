import { Typography } from "@material-tailwind/react";
function Footer() {
 
    const SITEMAP = [
      {
        title: "Team Specializations",
        links: ["AI Engineer", "Full-Stack developer", "Mobile developer"],
      },
      {
        title: "Application Purpose",
        links: ["Dubbing-To-Arabic", "Summarizing",],
      },
      {
        title: "AI Models",
        links: ["Speech Recognition", "Machine Translation", "Text-To-Speech", "Content Summarization"],
      },
      {
        title: "Team Members",
        links: ["Ezzeldin Khalid", "Mohamed Ashraf", "Mohamed Magdy", "Mohanad Shohdy" , "Omar Fathy"],
      },
    ];
     
    const currentYear = new Date().getFullYear();
      return (
        <footer className="relative w-full">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-bold uppercase opacity-50"
                  >
                    {title}
                  </Typography>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                      <Typography key={key} as="li" color="blue-gray" className="font-normal">
                        <p
                          className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                        >
                          {link}
                        </p>
                      </Typography>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 w-full text-6xl italic opacity-50 underline"
              >
                &copy; ArabTutorAI ({currentYear})
              </Typography>
            </div>
          </div>
        </footer>
      );
    }
export default Footer;