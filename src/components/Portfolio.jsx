
// IMAGES
import img1 from '../imgs/photo1.jpg'
import img2 from '../imgs/photo2.jpg'
import img3 from '../imgs/photo3.webp'
import img4 from '../imgs/photo4.jpg'
import img5 from '../imgs/photo5.jpg'
import img6 from '../imgs/photo6.webp'
import img7 from '../imgs/photo7.jpg'
import img9 from '../imgs/photo9.webp'
import img10 from '../imgs/photo10.jpg'


const Portfolio = () => {

  return (
    <section className="bg-black" id='portfolio'>
      <div className="container mx-auto py-40">
        <h2 className="text-4xl md:text-6xl text-white text-center font-bold">Portfolio</h2>
        <div>
          <ul className="flex justify-center items-center text-white flex-col lg:flex-row">
            <li className="text-lg md:text-2xl p-3 cursor-pointer hover:text-gray-400 transition-all hover:underline underline-offset-4">All</li>
            <li className="text-lg md:text-2xl p-3 cursor-pointer hover:text-gray-400 transition-all hover:underline underline-offset-4">Architecture</li>
            <li className="text-lg md:text-2xl p-3 cursor-pointer hover:text-gray-400 transition-all hover:underline underline-offset-4">Nature</li>
            <li className="text-lg md:text-2xl p-3 cursor-pointer hover:text-gray-400 transition-all hover:underline underline-offset-4">Aerial survey</li>
            <li className="text-lg md:text-2xl p-3 cursor-pointer hover:text-gray-400 transition-all hover:underline underline-offset-4">Portrait</li>
            <li className="text-lg md:text-2xl p-3 cursor-pointer hover:text-gray-400 transition-all hover:underline underline-offset-4">Food</li>
          </ul>
          <div className='hidden sm:grid grid-cols-12 grid-rows-auto my-20 gap-2 md:gap-4 lg:gap-6 h-max relative'>
            <div className='col-start-1 col-end-7 row-start-1 row-end-3 w-full h-full cursor-pointer container_img transition-all relative'>
              <img src={img1} alt='photo' className='hover:blur-sm w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-7 col-end-10 row-start-1 row-end-3 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img2} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-10 col-end-13 row-start-1 row-end-2 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img3} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-10 col-end-13 row-start-2 row-end-4 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img4} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-1 col-end-3 row-start-3 row-end-6 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img5} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-3 col-end-10 row-start-3 row-end-3 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img6} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-3 col-end-5 row-start-4 row-end-6 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img7} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-5 col-end-10 row-start-4 row-end-6 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img9} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            <div className='col-start-10 col-end-13 row-start-4 row-end-6 w-full h-full cursor-pointer transition-all container_img relative' >
              <img src={img10} alt='photo' className='w-full h-full' />
              <div className='overlay'>
                <div className='content'>
                  <p className='text-gray-400'>Category</p>
                  <h3 className='text-4xl'>Name Here</h3>
                  <button
                    className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-full mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'
                  >Watch</button>
                </div>
              </div>
            </div>
            {/* <img src={img2} alt='photo' className='col-start-7 col-end-10 row-start-1 row-end-3 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img3} alt='photo' className='col-start-10 col-end-13 row-start-1 row-end-2 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img4} alt='photo' className='col-start-10 col-end-13 row-start-2 row-end-4 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img5} alt='photo' className='col-start-1 col-end-3 row-start-3 row-end-6 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img6} alt='photo' className='col-start-3 col-end-10 row-start-3 row-end-3 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img7} alt='photo' className='col-start-3 col-end-5 row-start-4 row-end-6 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img9} alt='photo' className='col-start-5 col-end-10 row-start-4 row-end-6 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
            {/* <img src={img10} alt='photo' className='col-start-10 col-end-13 row-start-4 row-end-6 w-full h-full cursor-pointer hover:blur-sm transition-all' /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio