import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: 'public/images/project-1.jpg',
    title: 'VMS - Inventory MS',
    tags: ['MySQL', 'Node', 'React'],
    projectLink: 'https://github.com/mahaabi01/VMS---Frontend'
  },
  {
    imgSrc: 'public/images/project-2.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/mahaabi01/eCommerce-mern2'
  },
  {
    imgSrc: 'public/images/project-3.jpg',
    title: 'Blog Site',
    tags: ['API', 'React', 'Frontend'],
    projectLink: 'https://github.com/mahaabi01/reactBlogSite'
  },
  {
    imgSrc: 'public/images/project-4.jpg',
    title: 'Book Store',
    tags: ['Development', 'CRUD', 'Backend'],
    projectLink: 'https://github.com/mahaabi01/bookStore'
  },
  {
    imgSrc: 'public/images/project-5.jpg',
    title: 'Expense Tracker',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/mahaabi01/ExpenseTrackerMERN'
  },
  
  {
    imgSrc: 'public/images/project-6.jpg',
    title: 'Chest X-ray - ARRG',
    tags: ['AI/ML', 'LLM', 'NLP', 'Major Project-BCT'],
    projectLink: 'https://github.com/mahaabi01/radiology-report-generation'
  },
];

const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
      <div className="container">
        <h2 className="headline-1 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc, title, tags, projectLink }, key)=>
            (
              <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"

              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Work
