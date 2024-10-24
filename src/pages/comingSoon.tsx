/** @format */

import Button from "../components/uiComponents/Button";
import homebg from "../images/homebg.webp";
import omnitalk from "../images/omnitalk.webp";

const ComingSoon = () => {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 w-full h-full">
        <img src={homebg} className="h-full w-full z-0" />
      </div>

      <div className="bg-red-950 relative p-4 z-10">
        <Button
          name="Go back to Projects"
          className="bg-gradient-to-r from-black to-slate-700"
          url="/projects"
          bgColor="black"
          target="_self"
        />
        <p className="text-white text-center text-lg sm:text-2xl mt-4 font-semibold">
          OMNITalk is currently under development and will soon be available for
          online testing. While it is primarily a mobile app, stay tuned for
          updates on the web-based testing phase!
        </p>
      </div>

      <div className="w-full h-svh flex justify-center ">
        <div className="w-[70%] h-[98%] mx-auto">
          <div className="relative overflow-hidden flex justify-center py-4 rounded-md items-center h-[95%] shadow-md mt-5 sm:mt-10 bg-black/70">
            <p className="absolute text-[105px] font-bold font-montserrat -rotate-45 text-white/15 z-0">
              COMING SOON
            </p>
            <div className="absolute h-[95%] w-[95%] bg-white/20 rounded-2xl z-10 flex flex-col justify-center items-center">
              <p className="mb-4 text-lg py-2 w-full border border-white/15 bg-gradient-to-r from-black to-slate-700 rounded-lg text-white font-semibold text-center">
                Watch me develop the OMNITalk chat feature!
              </p>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7238940235114414080?compact=1"
                height="900"
                width="410"
                className="w-[98%] rounded-lg border-2 border-white/25"
                allowFullScreen={true}
                title="Embedded post"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
