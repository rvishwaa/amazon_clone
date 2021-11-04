import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    alt=""
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                <div className="home_row">
                    <Product
                        id="12353212"
                        title='2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey'
                        price={109900}
                        image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg"
                        rating={5}   
                    />
                    <Product
                        id="12353213"
                        title='New Apple iPhone 12 Pro (128GB) - Graphite - 6.1-inch - 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording'
                        price={95900}
                        image="https://media.croma.com/image/upload/v1605263218/Croma%20Assets/Communication/Mobiles/Images/8999513784350.png"
                        rating={4}
                    />
                    <Product
                        id="12353214"
                        title='Kenwood kMix Stand Mixture for Baking, Stylish Kitchen
                         Mixer with K-beater, Dough hook and Whisk, 5 Lire Glass Bowl'
                        price={45000}
                        image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home_row">
                <Product
                        id="12353215"
                        title='AmazonBasics 564 L Side-by-Side Door Refrigerator (Black Glass Door) - Energy Star'
                        price={51999}
                        image="https://m.media-amazon.com/images/I/71fa4e1KQsL._SL1500_.jpg"
                        rating={4}   
                    />
                    <Product
                        id="12353216"
                        title='2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) Space Grey (3rd Generation)'
                        price={69490}
                        image="https://cdn1.smartprix.com/rx-iJfkfZ3Vg-w1200-h1200/apple-ipad-pro-11-20.jpg"
                        rating={5}   
                    />
                    <Product
                        id="12353217"
                        title='DualSense Charging Station For PlayStation 5'
                        price={3749}
                        image="https://m.media-amazon.com/images/I/71ywUrrVHFL._SL1500_.jpg"
                        rating={2}   
                    />
                    <Product
                        id="12353218"
                        title='Bosch Serie | 4 60 cm, 25 L Stainless Steel Built In Microwave BFL553MS0I (Steel/Black)'
                        price={52590}
                        image="https://5.imimg.com/data5/AH/LE/MY-73171128/bosch-hmt82g654i-microwave-500x500.jpg"
                        rating={4}   
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12353219"
                        title='Dell U3421WE UltraSharp Curved Monitor, 34.14 Inch Ultrawide Monitor WQHD (3440 x 1440p at 60Hz), in-Plane Switching Technology, 100mmx100mm VESA Mounting Support, Platinum Silver (Latest Model)'
                        price={119339}
                        image="https://m.media-amazon.com/images/I/61AcctKTSZL._AC_SL1500_.jpg"
                        rating={5}   
                    />
                    <Product
                        id="12353220"
                        title='OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black) (2021 Model)'
                        price={49999}
                        image="https://m.media-amazon.com/images/I/71GYLokH21L._SL1500_.jpg"
                        rating={4}   
                    />
                </div>
            </div>
        </div>
    );
}

export default Home
