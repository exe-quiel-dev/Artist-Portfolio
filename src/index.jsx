import AboutMe from "./components/AboutMe"
import Blog from "./components/Blog"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Prices from "./components/Prices"
import Questions from "./components/Questions"


const index = () => {
  return (
    <>
        <Hero />
        <Portfolio />
        <AboutMe />
        <Prices />
        <Blog />
        <Questions />
    </>
  )
}

export default index