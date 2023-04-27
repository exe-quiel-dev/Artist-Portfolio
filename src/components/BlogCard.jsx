

const BlogCard = ({imageSrc}) => {
  return (
    <div className='p-5 text-white hover:border-8 hover:p-3 cursor-pointer flex flex-col items-center justify-center'>
      <img src={imageSrc} alt='City Photo' className="h-full w-full"/>
      <h3 className='font-bold text-3xl my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      <p className='my-5'>Curabitur dignissim tincidunt urna sit amet auctor. Fusce placerat laoreet urna, non elementum purus vehicula id. Curabitur a egestas nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p className='text-gray-400 self-start'>Month 15, 2023</p>
      <button className='text-white uppercase text-md lg:text-xl text-center p-0 lg:p-2 border-2 border-white w-2/3 lg:w-1/2 mt-5 hover:bg-white hover:text-black hover:rounded-lg transition-all'>Watch</button>
    </div>
  )
}

export default BlogCard