import PriceCard from "./PriceCard"


const Prices = () => {
  return (
    <section className=" h-auto bg-black flex flex-col items-center justify-center" id='prices'>
      <div className="container h-full">
        <h2 className="text-4xl md:text-6xl text-white text-center font-bold mb-20">Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-none md:grid-rows-2 h-full gap-10">
          <PriceCard title='Minimum' price='100' duration='1 hour' photos='20 - 30' processing='10 days' retouching='5 items'/>
          <PriceCard title='Standart' price='200' duration='3 hours' photos='30 - 50' processing='15 days' retouching='15 items'/>
          <PriceCard title='Silver' price='300' duration='5 hours' photos='50 - 70' processing='20 days' retouching='25 items'/>
          <PriceCard title='Maximum' price='400' duration='7 hours' photos='all' processing='25 days' retouching='half of all'/>
        </div>
      </div>
    </section>
  )
}

export default Prices