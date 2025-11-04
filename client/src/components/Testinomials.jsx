import { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3); // Responsive cards count

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO, Company A",
            content: "This service completely transformed our business. The results exceeded our expectations and the team was professional throughout.",
            rating: 5,
            image: "/images/john-doe.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Marketing Director, Company B",
            content: "Outstanding quality and attention to detail. We've seen a 40% increase in engagement since implementing their solutions.",
            rating: 5,
            image: "/images/jane-smith.jpg"
        },
        {
            id: 3,
            name: "Mike Johnson",
            position: "Founder, Startup C",
            content: "The team understood our vision perfectly and delivered beyond what we imagined. Highly recommended!",
            rating: 4,
            image: "/images/mike-johnson.jpg"
        },
        {
            id: 4,
            name: "Sarah Wilson",
            position: "Product Manager, Tech D",
            content: "Professional, timely, and exceptional quality. We'll definitely be working with them again.",
            rating: 5,
            image: "/images/sarah-wilson.jpg"
        },
        {
            id: 5,
            name: "David Brown",
            position: "CTO, Enterprise E",
            content: "Exceptional service and support. Their expertise helped us overcome critical challenges.",
            rating: 5,
            image: "/images/david-brown.jpg"
        },
        {
            id: 6,
            name: "Emily Davis",
            position: "Operations Manager, Startup F",
            content: "The implementation was seamless and the results were immediate. Great partnership!",
            rating: 4,
            image: "/images/emily-davis.jpg"
        }
    ];

    // Handle responsive cards count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex >= testimonials.length - cardsToShow ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - cardsToShow : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Calculate total slides for indicators
    const totalSlides = Math.max(0, testimonials.length - cardsToShow + 1);

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, cardsToShow]);

    return (
        <section className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about their experience.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons - Hidden on mobile */}
                    <button 
                        onClick={prevTestimonial}
                        className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-100"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button 
                        onClick={nextTestimonial}
                        className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-100"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex sm:hidden justify-center space-x-4 mb-6">
                        <button 
                            onClick={prevTestimonial}
                            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={nextTestimonial}
                            className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Testimonials Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                                width: `${(testimonials.length * 100) / cardsToShow}%` 
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={testimonial.id} 
                                    className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                                    style={{ width: `${100 / cardsToShow}%` }}
                                >
                                    <div className="bg-white  rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col p-4 sm:p-6">
                                        {/* Rating */}
                                        <div className="flex justify-center mb-3 sm:mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 italic flex-grow line-clamp-4 sm:line-clamp-5">
                                            "{testimonial.content}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg flex-shrink-0 mr-3 sm:mr-4">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-500 text-xs sm:text-sm truncate">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Indicators */}
                {totalSlides > 1 && (
                    <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                    ? 'bg-blue-500 w-6 sm:w-8' 
                                    : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 sm:w-3 sm:h-3'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;