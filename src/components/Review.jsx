import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);


import ReviewCard from "./ReviewCard";


// const reviews = [
//   {
//     content:
//       "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
//     name: "Sophia Ramirez",
//     imgSrc: "public/images/people-1.jpg",
//     company: "PixelForge",
//   },
//   {
//     content:
//       "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
//     name: "Ethan Caldwell",
//     imgSrc: "public/images/people-2.jpg",
//     company: "NexaWave",
//   },
//   {
//     content:
//       "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
//     name: "Liam Bennett",
//     imgSrc: "public/images/people-3.jpg",
//     company: "CodeCraft",
//   },
//   {
//     content:
//       "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
//     name: "Noah Williams",
//     imgSrc: "public/images/people-4.jpg",
//     company: "BrightWeb",
//   },
//   {
//     content:
//       "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
//     name: "Ava Thompson",
//     imgSrc: "public/images/people-5.jpg",
//     company: "TechMosaic",
//   },
//   {
//     content:
//       "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
//     name: "Jonathan",
//     imgSrc: "public/images/people-6.jpg",
//     company: "Skyline Digital",
//   },
// ];

const reviews = [
  {
    content:
      "Outstanding full-stack development! Built a highly scalable web app with seamless frontend-backend integration. Impressive API design and database optimization.",
    name: "Sophia Ramirez",
    imgSrc: "public/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Exceptional data science expertise! Developed a predictive model with high accuracy, clean data pipelines, and insightful visualizations. Transformed raw data into valuable business insights.",
    name: "Ethan Caldwell",
    imgSrc: "public/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Top-tier full-stack skills! Delivered a responsive web application with React, Node.js, and a well-structured database. Smooth authentication and real-time features.",
    name: "Liam Bennett",
    imgSrc: "public/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Brilliant data-driven solution! Built a machine learning pipeline that improved efficiency by 40%. Great understanding of model tuning and deployment.",
    name: "Noah Williams",
    imgSrc: "public/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Reliable and skilled! Developed a scalable full-stack e-commerce platform with secure payment integration and an intuitive UI. Highly recommend!",
    name: "Ava Thompson",
    imgSrc: "public/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Impressive AI and data science project! Designed a recommendation system that significantly boosted user engagement. Strong grasp of data engineering and deep learning.",
    name: "Jonathan",
    imgSrc: "public/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {

useGSAP(() => {
  gsap.to('.scrub-slide', {
    scrollTrigger: {
      trigger: '.scrub-slide',
      start: '-200% 80%',
      end: '400% 80%',
      scrub: true
    },
    x:'-1000'
  })
});

  return (
    <section 
    id="reviews" 
    className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-1 mb-8 reveal-up">
          Reviews about my works
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key)=>(
            <ReviewCard 
            key={key}
            name={name}
            imgSrc={imgSrc}
            company={company}
            content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
