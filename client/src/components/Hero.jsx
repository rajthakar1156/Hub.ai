
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const brands = [
  { alt: "slack", src: assets.slack },
  { alt: "framer", src: assets.framer },
  { alt: "google", src: assets.google },
  { alt: "linkedin", src: assets.linkedin },
  { alt: "instagram", src: assets.instagram },
  { alt: "facebook", src: assets.facebook },
  { alt: "netflix", src: assets.netflix },
];

const Hero = () => {
    const navigate = useNavigate();
    
    return (
    <div className=" px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center bg-[url(/mybg.png)] bg-cover bg-no-repeat min-h-screen pt-20 pb-10">
        

      {/* Headline */}
      <div className="text-center mb-6">
        <h1 className="text-3xl text-white sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Unleash your creativity  <br /> with <span className="text-[#4285F4]">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto text-sm sm:text-base text-white">
          The all-in-one AI toolkit to write, design, and publish faster. From articles to images, everything you need to create is right here.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm max-sm:text-xs mt-6">
        <button
          onClick={() => navigate('/ai')}
          className="bg-[#4285F4] text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button  className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer">
          Watch demo
        </button>
      </div>

      {/* Trusted Line */}
      <div className="flex items-center gap-4 mt-8 mx-auto text-white text-sm">
        <img src={assets.user_group} alt="" className="h-8" />
        Trusted by 10k+ people
      </div>

      
    </div>
  );
};

export default Hero;