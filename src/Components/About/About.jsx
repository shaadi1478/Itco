import React from 'react';

const About = () => {
    return (
        <div>
            <section className='w-[1296px] m-auto bg-white mt-[140px]'>
                <div className='flex items-center gap-[100px]'>
                    <img className='w-[636px] h-[500px]' src="/public/Image (1).png" alt="" />
                    <div className='leading-10'>
                        <h3 className='text-[#16A571] text-[20px] font-normal'>About Your Company</h3>
                        <h1 className='text-[50px] font-bold leading-13'>We Execute Our ideas
                            From The Start to Finish</h1>
                        <p className='lh-[30px] font-normal text-[18px] text-[#383838]'>Solve Business Problems And Automate Workflows With Artificial Work
                            Intelligence-Based Solutions. Unlock The Hidden Power Of The Data
                            You Already Have And Hand Hampers The Creativity.</p>
                        <p className='flex items-center gap-2 '> <img src="/public/point.png" alt="" />Development of Financial Models</p>
                        <p className='flex items-center gap-2 '> <img src="/public/point.png" alt="" />Nifty team is a diverse network of consultants</p>
                        <p className='flex items-center gap-2 '> <img src="/public/point.png" alt="" />Industry professionals with a global mindset</p>
                        <button className='btn btn-success mt-5'>Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;