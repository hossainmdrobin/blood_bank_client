import React from 'react';
import bannerImage from './../../assets/bannerImage.png'

const Topbanner = () => {
    return (
        <section className='flex justify-center'>
            <div className="md:flex w-4/5 blurbg bgBlurwhite rounded-xl shadow-xl">
                <div className='md:w-1/2'>
                    <img className='rounded-xl' src={bannerImage} alt="Top banner" />
                </div>
                <div className='md:w-1/2 ml-2 hover:bg-transparent'>
                    <h1>Blood Bank</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti eaque voluptates, accusamus reiciendis numquam ab vero consectetur quos blanditiis! Nobis eius eaque aut ipsum. Veniam at eaque magnam nostrum!</p>
                </div>
            </div>
        </section>
    );
}

export default Topbanner;
