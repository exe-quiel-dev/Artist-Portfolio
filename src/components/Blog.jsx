import BlogCard from "./BlogCard"
import img1 from '../imgs/city1.jpg'
import img2 from '../imgs/city2.jpg'
import img3 from '../imgs/city3.jpg'


const Blog = () => {
  return (
    <section className="bg-black flex flex-col items-center justify-center py-20 lg:py-32 pt-0 lg:pt-32" id='blog'>
        <h2 className="text-4xl md:text-6xl text-white text-center font-bold mb-20">Blog</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard imageSrc={img1}/>
        <BlogCard imageSrc={img2}/>
        <BlogCard imageSrc={img3}/>
      </div>
    </section>
  )
}

export default Blog