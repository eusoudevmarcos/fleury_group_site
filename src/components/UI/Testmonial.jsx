import '../styles/Testmonial.css'

import Slider from "react-slick"

import ava01 from '../imagens/ava-1.jpg'
import ava02 from '../imagens/ava-2.jpg'
import ava03 from '../imagens/ava-3.jpg'



const Testmonial = () => {
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      };

  return (
    <section>
        <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more than {''}<span className="highlight">800 Clients</span></h2>
            </div>

            <div className="slider__wrapper">
                <Slider {...settings}>
                    <div className="slider__item">
                        <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas voluptatem odio necessitatibus deserunt dolore ullam, asperiores, dicta quibusdam repellendus fugit maxime libero doloribus assumenda voluptas eligendi quaerat architecto aliquam fuga vero itaque quasi! Quod earum voluptas accusamus mollitia reprehenderit?</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt="" />
                            </div>

                            <div>
                                <h5 className="customer__name">Jhon Doe</h5>
                                <p className="description">CEO, Administrative Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nam quisquam esse dolorem ut et, perspiciatis iste earum dolores natus reiciendis adipisci expedita, rem reprehenderit nemo qui quas maxime. Et consequatur quibusdam suscipit illum, fugiat eum nisi consectetur necessitatibus sunt.</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava02} alt="" />
                            </div>

                            <div>
                                <h5 className="customer__name">Deborah Scott</h5>
                                <p className="description">HR Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nam quisquam esse dolorem ut et, perspiciatis iste earum dolores natus reiciendis adipisci expedita, rem reprehenderit nemo qui quas maxime. Et consequatur quibusdam suscipit illum, fugiat eum nisi consectetur necessitatibus sunt.</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava03} alt="" />
                            </div>

                            <div>
                                <h5 className="customer__name">Aloisio Tivolly</h5>
                                <p className="description">CEO, Administrative Manager</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Testmonial