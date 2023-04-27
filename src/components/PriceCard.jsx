
const PriceCard = ({ title, price, duration, photos, processing, retouching }) => {
  return (
    <div className="container mx-auto w-full h-full flex items-center justify-center hover:border-2 hover:p-0 p-0 cursor-pointer">
      <div className="flex flex-col justify-center items-center text-white w-full p-5 hover:p-4">
        <div className="mb-10 p-5">
          <h3 className="text-4xl md:text-6xl text-center font-bold mb-5">{title}</h3>
          <p className="text-4xl md:text-6xl text-center">{price}$</p>
        </div>
        <div className="p-5 h-full w-full text-center">
          <p className="text-xl w-full py-1 font-bold uppercase flex justify-between">Duration: <span className="font-normal normal-case"> {duration}</span></p>
          <p className="text-xl w-full py-1 font-bold uppercase flex justify-between">Number of photos: <span className="font-normal normal-case"> {photos}</span></p>
          <p className="text-xl w-full py-1 font-bold uppercase flex justify-between">Processing Time:  <span className="font-normal normal-case"> {processing}</span></p>
          <p className="text-xl w-full py-1 font-bold uppercase flex justify-between">Detailed retouching:  <span className="font-normal normal-case"> {retouching}</span></p>
        </div>
        <button className="uppercase text-2xl w-3/4 px-5 hover:bg-white hover:text-black transition-all my-10 border border-white hover:rounded-lg py-3">Buy now</button>
      </div>
    </div>
  )
}

export default PriceCard