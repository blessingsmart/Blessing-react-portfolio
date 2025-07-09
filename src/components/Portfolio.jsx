import React from 'react'
import excel from '../assets/portfolio/excel.jpg'
import login from '../assets/portfolio/login.jpg'
import roadmap from '../assets/portfolio/roadmap.jpg'
import sheet from '../assets/portfolio/sheet.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import sourcereflect from '../assets/portfolio/sourcereflect.png'

const Portfolio = () => {
    const portfolios = [
        // {
        //     id: 1,
        //     src: excel,
        //     demo: 'https://docs.google.com/spreadsheets/d/1mmwzcQNCNh68F8ZPdFCld-YAtKRy7YksgpVRD9tPOlM/edit?usp=sharing'
        // },
        // {
        //     id: 2,
        //     src: sheet,
        //     demo: 'https://docs.google.com/spreadsheets/d/1mmwzcQNCNh68F8ZPdFCld-YAtKRy7YksgpVRD9tPOlM/edit#gid=759693817&range=A11'
        // },
        {
            id: 3,
            src: roadmap,
            code: 'https://github.com/TechStarsCommunity/FE-Online_Library/tree/Blessing-Roadmap',
            demo: 'https://book-slab.netlify.app/'
        },
        // {
        //     id: 4,
        //     src: reactSmooth,
        // },
        {
            id: 5,
            src: login,
            code: 'https://github.com/TechStarsCommunity/FE-Online_Library/tree/Blessing-Login',
            demo: 'https://book-slab.netlify.app/login'
        },
        {
            id: 6,
            src: sourcereflect,
            code: 'https://github.com/blessingsmart/sourcereflect1',
            demo: 'https://sourcereflect.netlify.app/'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                portfolios.map(({ id, src, code, demo }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href={demo} className='w-1/2 px-6 py-3  duration-200 hover:scale-105'  target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href={code} className='w-1/2 px-6 py-3  duration-200 hover:scale-105'  target="_blank" rel="noopener noreferrer">Code</a>
                        </div>
                    </div>
                    ))}
            </div>    
        </div>
    </div>
  );
};

export default Portfolio;