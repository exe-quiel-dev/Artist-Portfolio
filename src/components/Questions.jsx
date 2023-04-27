import { FaPinterestP, FaBehance, FaDribbble } from "react-icons/fa";

const Questions = () => {
  return (
    <section className="bg-questions p-10 h-screen bg-white" id='contact'>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <form className="md:container mx-auto grid grid-cols-2">
            <input
              type='text'
              id='name'
              name='name'
              placeholder="Your name"
              className="p-2 sm:p-5 bg-white/75"
            />
            <input
              type='email'
              id='email'
              name='email'
              placeholder="Your email"
              className="p-2 sm:p-5 ms-3 bg-white/75"
            />
            <textarea
              rows={5}
              name='message'
              placeholder="Message"
              className="col-start-1 col-end-3 my-5 p-2 sm:p-5 bg-white/75"
            ></textarea>
            <input
              type="submit"
              id='submit'
              value="send"
              className="text-xl uppercase text-white bg-black w-full md:w-1/2 justify-self-start md:justify-self-end col-start-2 hover:rounded-lg cursor-pointer transition-all p-2 border border-white hover:bg-white hover:border-black hover:text-black hover:shadow-md"
            />
          </form>
        </div>
        <div className="ms-10 p-10">
          <div className="my-2">
            <h4 className="font-bold text-xl my-3">Get In Touch</h4>
            <p>email@email.com</p>
            <p>+5491197974545</p>
          </div>
          <div className="my-2">
            <h4 className="font-bold text-xl my-3">Office</h4>
            <p>Adress, Your city, Country</p>
          </div>
          <div className="my-2">
            <div className="text-white flex items-center justify-start">
            <h4 className="font-bold text-xl text-black my-3">Social</h4>
            <div className="w-8 h-8 mx-5">
              <FaPinterestP className="w-full h-full hover:text-red-600 transition-colors cursor-pointer drop-shadow-sm" />
            </div>
            <div className="w-8 h-8 mx-5">
              <FaDribbble className="w-full h-full hover:text-pink-600 transition-colors cursor-pointer drop-shadow-sm" />
            </div>
            <div className="w-8 h-8 mx-5">
              <FaBehance className="w-full h-full hover:text-blue-500 transition-colors cursor-pointer drop-shadow-sm" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Questions