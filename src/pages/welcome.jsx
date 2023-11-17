import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/main.scss';
import { Carousel } from 'antd';
import Button from '../components/Button';




function Welcome() {
    return (
        <div className='welcome-container'>
            <Header />
            <Carousel autoplay={true} autoplaySpeed={3000}>
                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?' alt='' />
                    <p>kwiga ni byiza</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>

                </div>

                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?' alt='' />
                    <p>Gusoma ni byiza</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>

                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?' alt='' />
                    <p>Gusenga ni byiza</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>
            </Carousel>
            <Footer />
        </div>
    )
}
export default Welcome;