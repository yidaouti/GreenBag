import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRecycle,
    faLeaf,
    faShoppingBag,
    faTree,
    faHandHoldingWater,
    faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import heroImg1 from '../assets/img/hero1.webp';
import heroImg2 from '../assets/img/hero2.webp';
import heroImg3 from '../assets/img/hero3.webp';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { Hero } from '../components/Hero';

const features = [
    {
        icon: faRecycle,
        title: "100% Recyclable",
        description: "Our bags are made from completely recyclable materials, helping to reduce waste and save resources."
    },
    {
        icon: faLeaf,
        title: "Sustainable Materials",
        description: "Crafted from durable, sustainable materials, our bags are designed for long-term use."
    },
    {
        icon: faShoppingBag,
        title: "Stylish Designs",
        description: "GreenBag offers stylish designs for everyday use, combining function with fashion."
    },
    {
        icon: faTree,
        title: "Eco-Friendly Production",
        description: "Produced with minimal environmental impact, GreenBag helps you shop with a clear conscience."
    },
    {
        icon: faHandHoldingWater,
        title: "Water-Resistant",
        description: "Our bags are water-resistant, ensuring your belongings stay safe and dry."
    },
    {
        icon: faSeedling,
        title: "Promotes Sustainability",
        description: "Every GreenBag purchased supports sustainable practices and reduces plastic usage."
    }
];

const Home = () => {
    return (
        <main className="bg-gray-50 font-[sans-serif]">
            {/* Hero Section with Swiper */}
    <Hero/>

            {/* Features Section */}
            <section className="py-16 min-h-screen flex items-center bg-gray-50">
                <div className="container mx-auto px-5">
                    {/* Introductory Text */}
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Why Choose <span className="text-green-600">GreenBag?</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            GreenBag is your partner in sustainable living. Designed with eco-conscious individuals in mind,
                            our bags provide a stylish, functional, and environmentally-friendly alternative to plastic waste.
                            Discover the benefits of switching to GreenBag today!
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105 relative group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-green-600 group-hover:h-full transition-all duration-300"></div>
                                <div className="relative">
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                                        <FontAwesomeIcon icon={feature.icon} className="text-green-600 text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mt-6">{feature.title}</h3>
                                    <p className="text-gray-600 mt-4">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials/>
        </main>
    );
};

export default Home;
