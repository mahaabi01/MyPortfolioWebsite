import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);


// import ReviewCard from "./ReviewCard";
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    content:
      "Completed a 3-month full-stack web development internship, gaining hands-on experience with modern technologies like React, Node.js, MongoDB, and Express.js.",
    name: "Full-Stack Web Development Internship",
    imgSrc: "images/lunar-it.jpg", // replace with actual image
    company: "Lunar IT Solutions",
  },
  {
    content:
      "Acquired strong data science fundamentals, including data manipulation, visualization, and analysis using Python and associated libraries.",
    name: "Data Scientist with Python",
    imgSrc: "images/datacamp.jpg", // replace with actual image
    company: "DataCamp",
  },
  {
    content:
      "Learned deep learning concepts including neural networks, backpropagation, and model optimization techniques using Python and TensorFlow.",
    name: "Deep Learning in Python",
    imgSrc: "images/datacamp.jpg", // reuse or change image
    company: "DataCamp",
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
          Certificates 
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {certificates.map(({ content, name, imgSrc, company }, key)=>(
            <CertificateCard 
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
