import { Outlet } from "react-router-dom"
import { FaPhone } from "react-icons/fa";

const Layout = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <header className="absolute w-full px-10">
        <nav>
          <ul className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#portfolio'> portfolio</a> </li>
              <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#about_me'> about me</a> </li>
              <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#prices'> prices</a> </li>
              <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#blog'> blog</a> </li>
            </div>
            <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#contact'>contact</a> </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <div className="bg-black py-5">
        <footer className="bg-black h-32 flex-col md:flex items-center justify-between">
          <div>
            <ul className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#portfolio'> portfolio</a> </li>
                <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#about_me'> about me</a> </li>
                <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#prices'> prices</a> </li>
                <li className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors cursor-pointer"><a href='#blog'> blog</a> </li>
              </div>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <FaPhone className="text-white w-6 h-6" />
            <p className="text-white uppercase text-xl md:text-2xl px-5 hover:text-gray-400 transition-colors">+5491197974545</p>
          </div>
        </footer>
        <div className="py-10 lg:py-0">
          <p className="mt-5 self-start px-5 text-gray-400">Mariano Rolet | Exe-Dev {date} ©</p>
        </div>
      </div>
    </>
  )
}

export default Layout