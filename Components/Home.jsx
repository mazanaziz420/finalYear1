import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Footer1 from './Footer';

const cardData = [
  {
    role: "Event Organizer",
    description: "Manage events seamlessly with our platform.",
    image: "/../images/homecardvendor.jpg",
  },
  {
    role: "Venue Provider",
    description: "Find and provide the perfect venues for events.",
    image: "/../images/homecardvenue.jpeg",
  },
  {
    role: "Staff",
    description: "Join the team to help make events successful.",
    image: "/../images/homecardstaff.jpg",
  },
];

function Home() {
  const [showDetails, setShowDetails] = useState(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [finalCount1, setFinalCount1] = useState(false);
  const [finalCount2, setFinalCount2] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1(prevCount => {
        if (prevCount < 5) return prevCount + 1;
        setFinalCount1(true);
        clearInterval(interval1); // Clear interval once the final count is reached
        return prevCount;
      });
    }, 500); // Increased interval time for slower counting
  
    const interval2 = setInterval(() => {
      setCount2(prevCount => {
        if (prevCount < 300) return prevCount + 10;
        setFinalCount2(true);
        clearInterval(interval2); // Clear interval once the final count is reached
        return prevCount;
      });
    }, 100); // Increased interval time for slower counting
  
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const handleBoxMouseEnter = (index) => {
    setShowDetails(index);
  };

  const handleBoxMouseLeave = () => {
    setShowDetails(null);
  };

  return (
    <div className='bg-white'>
      <div className="w-full mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          transitionTime={600}
          stopOnHover={true}
        >
          <div className='h-[75vh]'>
            <img src="/../images/image1.jpeg" alt="Image 1" className='w-full h-full object-contain'/>
          </div>
          
          <div className='h-[75vh]'>
            <img src="/../images/19.jpeg" alt="Image 1" className='w-auto h-auto object-contain'/>
          </div>
          <div className='h-[75vh]'>
            <img src="/../images/image4.jpeg" alt="Image 1" className='w-full h-full object-cover'/>
          </div>
          
        </Carousel>

        <section className="bg-gray-900 text-white p-8 sm:p-16 m:p-24 w-[80vh] relative -mt-12 ms-96 border rounded-lg border-cyan-700 transition-transform transform hover:scale-105 duration-300">
          <div className="flex justify-around">
            <div className="text-center">
              <h2 className="text-4xl font-bold">{finalCount1 ? '5 Millions+' : count1}</h2>
              <p>(Active Users)</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">{finalCount2 ? '300 +' : count2}</h2>
              <p>(Projects Done)</p>
            </div>
          </div>
        </section>

        <p className='justify-text text-center font-serif font-bold text-3xl mt-8 text-gray-900'>Join Us!</p>
        <p className='justify-text text-center font-serif font-bold text-l mt-6 text-black'> Who Are You?</p>
      
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-20 mx-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-md overflow-hidden h-[65vh] transition-transform transform hover:scale-105"
              onMouseEnter={() => handleBoxMouseEnter(index)}
              onMouseLeave={handleBoxMouseLeave}
            >
              <img
                src={card.image}
                alt={card.role}
                className="w-full h-2/3 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{card.role}</h2>
                <p className="mt-2 text-black">{card.description}</p>
                <Link to="/Dashboard">
                  <button className="bg-gray-800 text-white w-full mt-4 py-2 hover:bg-black border-b-gray-700 focus:outline-none focus:ring focus:border-cyan-700">
                    Click Here
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 justify-center items-center ms-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-black ms-15 text-lg font-semibold font-serif">Welcome to EvePlan.pk, your one-stop destination for planning the perfect event.</h3>
            <h1 className="text-black ms-9 font-semibold font-serif text-2xl mt-4">
              Explore our wide range of services including very possible part of event management.
            </h1>
            <div className="grid grid-cols-2 gap-10 ms-10 mt-5">
              <ul className="list-disc list-inside">
                <h1>
                  Finding the right venue is the first step towards a successful event. At EvePlan.pk, we offer a
                  diverse selection of venues across various cities in Pakistan. Browse through our curated listings
                  to find the perfect location that fits your needs and budget.
                </h1><br></br>
                <h1>Why Choose Us?</h1>
                
              </ul>
              <ul className="list-disc list-inside">
                <li>Extensive Selection</li>
                <li>Trusted Providers</li>
                <li>User-Friendly Platform</li>
                <li>Customer Support</li>
                <li>Personalized Assistance</li>
              </ul>
            </div>
            <Link to="/about">
              <button className="bg-gray-800 ms-10 text-white w-24 h-10 flex items-center justify-center mt-4 hover:bg-cyan-700">
                Read More
              </button>
            </Link>
          </div>

          <div className="hidden md:block ms-32">
            <img src="/../images/200.png" alt="Right Column Image" className="w-full h-full md:w-[80%] md:h-[90%]" />
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <img src="/../images/ss.png" alt="Mobile Image" className="w-full h-[50vh]" />
        </div>

        <div className="mt-10 grid grid-cols-1 ms-14 justify-center items-center md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <div className='border-b-2 border-green-400 w-20 ms-10 px-1 py-2'>
              <h1 className='font-bold text-black font-serif text-lg'>Services</h1>
            </div>
            <p className="text-gray-800 text-2xl font-bold font-serif mt-6 ms-12">
              Our Services Your Satisfaction
            </p><br></br>
            <p className="text-black font-serif text-m ms-12">
              EvePlan.pk offers a comprehensive range of services to meet all your event planning needs.
            </p>

            <p className='text-black font-serif mt-6 text-l ms-12'>
              We have first-hand Experience and knowledge of the business environment
              of the region and its demands, so, we clearly understand the exact requirements
              of our clients and hence are in a better position to effectively cater their needs.
            </p>
            <div className='border-b-2 border-green-400 w-96 mt-8 ms-12 px-1 py-2'></div>

            <div className="flex mt-6 ms-12">
              <div className="bg-green-200 p-4 flex-1 mr-4">
                <img
                  src="/../images/12.jpg"
                  alt="Box 1 Image"
                  className="w-[85px] h-[85px] object-cover ms-16 mb-4"
                />
                <h1 className='text-black font-bold font-serif ms-9'>Vision and Mission</h1>
                <p className='mt-5 text-sm font-normal font-serif text-black'>
                  To satisfy our customers with the highest standards of
                  quality, reliability and trust in our services for our
                  mutual benefit.
                </p>
              </div>

              <div className="bg-green-200 p-4 flex-1 mr-4">
                <img
                  src="/../images/20.jpg"
                  alt="Box 2 Image"
                  className="w-[85px] h-[85px] object-cover ms-16 mb-4"
                />
                <h1 className='text-black font-bold font-serif ms-14'>Quality Policy</h1>
                <p className='mt-5 text-sm font-normal font-serif text-black'>
                  Quality is a soul of our business so we are committed
                  to satisfy our clients by providing excellent services.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 ml-12">
            <img src="/../images/ss.png" alt="Image 1" className="w-[80vh] h-[70vh]" />
          </div>
        </div>

        <Link to="/about">
          <button className="bg-gray-800 ms-80 text-white w-24 h-10 flex items-center justify-center mt-4 mb-16 hover:bg-cyan-700">
            Read More
          </button>
        </Link>
      </div>
      <Footer1 />
    </div>
  );
}

export default Home;
