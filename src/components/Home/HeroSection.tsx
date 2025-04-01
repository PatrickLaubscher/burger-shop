import Image from 'next/image'
import React from 'react'



function HeroSection() {

    return (

        <section
        className="flex flex-row items-center justify-betwwen"
        >
            
            <div
            className="w-screen md:w-2/3"
            >
                <h1
                className="text-6xl font-bold py-6"
                >
                THE ULTIMATE BURGER HAVEN
                </h1>
    
                <p
                className=""
                >
                Welcome to our Burger Paradise, where every bite is a journey into flavour perfection ! 
                Indulge in a symphony of premium ingrediens, expertly crafted patties, and mouthwatering 
                sauces.
                </p>

                <div
                className="flex gap-4 mt-8"
                >
                    <button
                    className='btn-primary'>
                        Order Now
                    </button>

                    <button
                    className='btn-secondary'>
                        View Menu
                    </button>


                </div>
    
            </div>

            <div
            className='-ml-10 z-[-1]'>
                <Image
                src={`/images/burger-bg.png`}
                alt='background'
                width={'400'}
                height={'300'}
                className='object-contain z-[-1]'
            />
            </div>
  
        </section>
        
    )
}

export default HeroSection