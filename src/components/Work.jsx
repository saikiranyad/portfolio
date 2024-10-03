import React from 'react'
import Portfoliocard from './Portfoliocard';


const works = [
   
   
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: 'https://receipeapp-tan.vercel.app/'
    },
    
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://ecoom.vercel.app/'
    },
    
  ];
const Work = () => {
  return (
  <section className="section" id="work">
    <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
        </h2>
        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc,title,tags,projectLink},key)=>(
                <Portfoliocard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
            ))}

        </div>
    </div>
  </section>
  )
}

export default Work
