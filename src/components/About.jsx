import React from 'react'


const aboutItems = [
    {
      label: 'Project done',
      number: 2
    },
    {
      label: 'internship',
      number: 6
    }
  ];
const About = () => {
  return (
    <section className="section" id="about">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Sai kiran, a junior web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.

                </p>
                <div className="flex flex-rap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label,number},key)=>(
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <div className="text-2xl font-semibold md:text-4xl">{number}</div>
                                <div className="text-sky-400 font-semibold md:text-3xl"></div>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>

                        </div>
                    ))}
                    <img src="/images/logo.svg" height={30} width={30} alt="Logo" className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
