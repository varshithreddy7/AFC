import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  content: string;
  avatar: string;
  bgColor: string;
}

const TestimonialsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Riana Madiva",
      role: "CEO Founder",
      rating: 5,
      content: "The increase in product sales is exponential and takes place gradually. It's really a very good job",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      bgColor: "bg-black"
    },
    {
      id: 2,
      name: "Celine Dion",
      role: "Cafe Owner",
      rating: 5,
      content: "Increase product sales and increase the amount of cash that comes in for further development",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      bgColor: "bg-black"
    },
    {
      id: 3,
      name: "John Melon",
      role: "Marketing Director",
      rating: 5,
      content: "Outstanding service quality and professional approach. The results exceeded our expectations completely",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      bgColor: "bg-black"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Startup Founder",
      rating: 5,
      content: "Gradual, it's really a very good job. The team understood our vision perfectly and delivered amazing results",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
      bgColor: "bg-black"
    },
    {
      id: 5,
      name: "Mike Rodriguez",
      role: "E-commerce Owner",
      rating: 5,
      content: "The transformation of our business has been remarkable. Sales have increased by 300% in just 6 months",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      bgColor: "bg-black"
    },
    {
      id: 6,
      name: "Emily Chen",
      role: "Tech Consultant",
      rating: 5,
      content: "Professional team with innovative solutions. They delivered exactly what we needed and more",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      bgColor: "bg-black"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className={`${testimonial.bgColor} rounded-2xl p-6 mb-6 w-80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 backdrop-blur-sm border border-gray-800`}>
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-yellow-400 transition-all duration-300 hover:ring-4"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4  rounded-full border-2 border-black animate-pulse"></div>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-white animate-fadeInRight">
            {testimonial.name}
          </h4>
          <p className="text-sm text-yellow-300 animate-fadeInRight delay-100">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="flex mb-4 animate-fadeInUp delay-200">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span 
            key={i} 
            className="text-xl text-orange-400 hover:text-yellow-300 transition-colors duration-300 hover:scale-125 transform"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-white leading-relaxed animate-fadeInUp delay-300 hover:text-gray-200 transition-colors duration-300">
        {testimonial.content}
      </p>
    </div>
  );

  return (
    <div 
      ref={sectionRef}
      className="bg-gradient-to-br from-[#ebbd28] via-[#f0c841] to-[#ebbd28] py-16 px-4 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-black rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-black rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-black rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-black rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="ml-4 mb-4">
            <h2 className="text-lg  font-medium animate-slideInLeft">Testimonials</h2>
          </div>
          <h2 className="text-5xl font-bold text-black mb-4 animate-slideInRight bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            What Our Customers Say?
          </h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full animate-expandWidth"></div>
        </div>

        <div className={`flex gap-8 justify-center transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* First Column - Scrolling Down */}
          <div className="relative h-96 overflow-hidden transform transition-all duration-700 delay-100 hover:scale-105">
            <div className="animate-scroll-down">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={`left-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Second Column (Middle) - Scrolling Up */}
          <div className="relative h-96 overflow-hidden transform transition-all duration-700 delay-300 hover:scale-105">
            <div className="animate-scroll-up">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={`middle-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Third Column - Scrolling Down */}
          <div className="relative h-96 overflow-hidden transform transition-all duration-700 delay-500 hover:scale-105">
            <div className="animate-scroll-down">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={`right-${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 8rem;
          }
        }

        .animate-scroll-up {
          animation: scroll-up 15s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 15s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 1.5s ease-out forwards 0.5s;
          width: 0;
        }

        /* Pause scroll animation on hover */
        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }

        /* Delay classes */
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;