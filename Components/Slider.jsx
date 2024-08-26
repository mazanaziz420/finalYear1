import 'tailwindcss/tailwind.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react'; 
import ReactSlider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';

function MySlider() { 
  // Define your slider settings
  const sliderSettings = {
    dots: false, // Hide slide counting
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    autoplay: true,
    arrows: false, // Hide next and previous buttons
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-full mx-auto">
        {/* Your existing content */}
      </div>

      {/* Image Slider */}
      <div className="w-full mt-10 mb-12">
        <ReactSlider {...sliderSettings}>
          <div>
            <img src="/../images/32.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/33.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/34.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/35.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/36.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/37.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/38.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/40.jpg" alt="/" />
          </div>
          <div>
            <img src="/../images/41.jpg" alt="/" />
          </div>
        </ReactSlider> 
      </div>
    </div>
  );
}

export default MySlider;
