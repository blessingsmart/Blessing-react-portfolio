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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis accusantium ab dicta corporis aperiam culpa qui sunt? Sed, necessitatibus voluptate dolores blanditiis ipsa quod ullam deserunt voluptates ut accusamus. Impedit, unde mollitia, doloribus natus error, aperiam fugit doloremque omnis optio quasi veniam? Iure quos velit corporis asperiores voluptatem praesentium.
            </p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi similique doloribus quaerat? Harum ut dolores ipsam sed atque dolorem est, eligendi pariatur nam magnam eveniet ullam tempore eius. Cupiditate reiciendis ipsam, laborum possimus placeat in voluptatum tempore ea! Nostrum aut vero sint consequatur dignissimos quidem rem adipisci ad explicabo?
            </p>
        </div>
    </div>
  )
}

export default About