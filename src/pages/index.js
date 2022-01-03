import React,{useState} from 'react'
import AboutUsSection from '../components/AboutUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import Slideshow from '../components/HomePage/SlidingImageView'
import Navbar from '../components/navbar'
import ObjectiveSection from '../components/ObjectiveSection'
import Register from '../components/Register'
import Sidebar from '../components/sidebar'
import Tracks from '../components/Tracks'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomePage /> 
            <ObjectiveSection/>
            <Slideshow />
            <AboutUsSection/>
            <Tracks/>
            <Contact/>
            <Register/>
            <Footer/>
        </>
    )
}

export default Home
