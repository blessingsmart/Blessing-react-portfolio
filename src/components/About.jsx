import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 lg:mt-16 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  About  
                </p>
            </div>
            <div>
              <p className='text-xl'>
                   I'm a versatile and creative Full Stack Developer with a strong foundation in React, TypeScript, NextJs, PHP, Laravel, Wordpress and Wix. I specialize in building scalable and responsive web applications that deliver smooth user experiences. With hands-on experience in developing RESTful APIs, designing admin dashboards, and collaborating with teams across digital projects, I’m passionate about clean code and user-focused design.
              </p>
              <br/>
              <p className='text-xl'>
                  In addition to web development, I'm a skilled Graphics Designer with a keen eye for branding, layout, and visual storytelling. I design engaging social media content, marketing banners, and UI mockups using tools like Photoshop, Figma, and Canva. Whether I’m coding or designing, I’m driven by creativity, precision, and the goal of making meaningful digital experiences.
              </p>
            </div>
        </div>
    </div>
  )
}
export default About