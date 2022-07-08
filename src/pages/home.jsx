import { useState } from 'react'
import logo from '/images/logos/logo-white.png'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/App.css'

function Home() {
    const [count, setCount] = useState(0)



    return (
        <div className="App">
            <img src='images/logos/logo-dark.png' height={"200px"} />
            <Navbar />
            <div id='iframe-container'>
                <iframe frameborder='0' src='https://shotsbycamille.pic-time.com/client?headless=true'></iframe>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

// var frame = document.getElementById("pictimeIntegration");
// frame.onload = function () {
//     frame.style.height = frame.contentWindow.document.body.scrollHeight + 'px';
//     frame.style.width = frame.contentWindow.document.body.scrollWidth + 'px';
// }

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

export default Home
