/** @format */

import homebg from "../images/homebg.webp";
import omnitalk from "../images/omnitalk.webp";

const ComingSoon = () => {
  return (
    <div className="h-svh">
      <div className="absolute top-0 w-full h-full">
        <img src={homebg} className="h-full w-full z-0" />
      </div>

      <div className="w-full h-full flex justify-center ">
        <div className="w-[70%] h-[40%] mx-auto">
          <div className="relative overflow-hidden flex justify-center py-4 rounded-md items-center h-[450px] sm:h-[550px] shadow-md mt-5 sm:mt-10 bg-white/10">
            <p className="absolute text-[105px] font-bold font-montserrat -rotate-45 text-white/15 z-0">
              COMING SOON
            </p>
            <div className="absolute h-[60%] w-[85%] bg-white/20 rounded-2xl z-10 flex flex-col justify-center items-center">
              <iframe
                className="h-full w-full rounded-2xl"
                src="https://vm.tiktok.com/ZMhmnGYDQ/"
                title="Building OMNITalk Chat Feature"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-0 text-lg py-2 w-full bg-white/90 rounded-b-xl text-black font-semibold text-center">
                Watch me build the OMNITalk chat feature!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
