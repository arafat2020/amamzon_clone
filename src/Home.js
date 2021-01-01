import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home" >
            <div className="home__container" >
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
                    alt="banner"
                />
                <div className="home_row">
                    <Product
                        id={1231}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        priching={19.9}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
                    />
                    <Product
                        id={1232}
                        title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater "
                        priching={ 149 }
                        rating={ 5 }
                        image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={1233}
                        title="Youther Bands for Samsung Galaxy Watch Active 2 40mm 44mm /Active/Galaxy Watch 3 41mm/ Galaxy Watch 42mm, 20mm Soft Silicone Sport Bands Replacement for Gizmo Watch/Galaxy Watch Active 2/Active "
                        priching={ 7.9 }
                        rating={ 4 }
                        image="https://images-na.ssl-images-amazon.com/images/I/71Yoz9Mp-bL._AC_SL1500_.jpg"
                    />
                    <Product
                        id={1234}
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal "
                        priching={ 20.8 }
                        rating={ 5 }
                        image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
                    />
                    <Product
                        id={1235}
                        title="Samsung Galaxy Tab A7 10.4 Wi-Fi 64GB Silver (SM-T500NZSEXAR) "
                        priching={ 199.9 }
                        rating={ 4 }
                        image="https://images-na.ssl-images-amazon.com/images/I/71MvL2kCFCL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={1237}
                        title="Samsung LC24F390FHNXZA 24-inch Curved LED Gaming Monitor (Super Slim Design), 60Hz Refresh Rate w/AMD FreeSync Game Mode "
                        priching={ 100 }
                        rating={ 5 }
                        image="https://images-na.ssl-images-amazon.com/images/I/81vT0S30GML._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;