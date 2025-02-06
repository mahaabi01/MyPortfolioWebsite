import SkillCard from "./SkillCard";



const skillItem = [
  {
    imgSrc: './src/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: './src/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: './src/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: './src/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: './src/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: './src/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: './src/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: './src/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: './src/images/python-3.svg',
    label: 'Python',
    desc: 'Python'
  },
  {
    imgSrc: './src/images/pandas.svg',
    label: 'Pandas',
    desc: 'Pandas'
  },
  {
    imgSrc: './src/images/tensorflow-2.svg',
    label: 'TensorFlow',
    desc: 'TensorFlow'
  },
  {
    imgSrc: './src/images/pyTorch-2.svg',
    label: 'PyTorch',
    desc: 'PyTorch'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-1 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key)=> 
            (
              <SkillCard 
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
