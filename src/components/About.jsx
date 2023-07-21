import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  About  
                </p>
            </div>
            <p className='text-xl mt-20'>
                As a data scientist with a strong expertise in data analysis and visualization, I have honed my skills in transforming raw data into meaningful and actionable visuals that drive crucial business decision-making. With over two years of experience in a business setting, I have successfully analyzed complex datasets, providing valuable insights to enhance organizational efficiency and performance. Beyond my proficiency in data science, I also hold a leadership role in Loveworld Inc (aka Christ Embassy), where I apply data-driven strategies to support the organization's growth and impact.
            </p>
            <br/>
            <p className='text-xl'>
                As a data scientist with a strong background in frontend development, I possess a passion for education, leading a class of 70+ individuals to excel in Pro Excel and thrive in data-driven environments. Alongside my data science prowess, I'm adept in graphics design using Photoshop and Canva. Certified in business analytics, data science with Python, and CompTIA A+, I'm committed to innovative solutions and making a positive impact through analytics, creative problem-solving, and building dynamic web applications using React and Tailwind.
            </p>
        </div>
    </div>
  )
}

export default About