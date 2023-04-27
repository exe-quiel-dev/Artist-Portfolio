import { FaPinterestP, FaBehance, FaDribbble } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="bg-black h-full py-20 lg:py-32 pt-0 lg:pt-16" id='about_me'>
      <div className="bg-about flex items-center justify-start h-screen py-0 lg:py-36">
        <div className="text-white w-full md:w-1/2 lg:w-1/3 p-2 lg:p-10 container sm:ms-10 lg:ms-20">
          <h2 className="text-4xl md:text-6xl text-white text-start font-bold mb-20">About Me</h2>
          <p className="my-5 text-lg">I am a central London based freelance photographer, specialising in travel and people photography.</p>
          <p className="my-5 text-lg">Working on commissions in the UK and abroad shooting images for magazines, travel guides and business publications.</p>
          <p className="my-5 text-lg">Clients include Berlitz, Sunday Times Travel, Penguin Random House, Twilio, Korean Air, UCL, Imagination Technologies and National Geographic Traveller.</p>
          <div className="text-gray-400 flex items-center justify-start p-5">
            <div className="w-10 h-10 mx-5">
              <FaPinterestP className="w-full h-full hover:text-red-600 transition-colors cursor-pointer" />
            </div>
            <div className="w-10 h-10 mx-5">
              <FaDribbble className="w-full h-full hover:text-pink-600 transition-colors cursor-pointer " />
            </div>
            <div className="w-10 h-10 mx-5">
              <FaBehance className="w-full h-full hover:text-blue-500 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe