import React from 'react';

const Subscrib = () => {
    return (
        <div>
            <section className=' bg-[#164343]'>
                <div className='flex gap-[85px]'>
                    <img src="/public/Rectangle 4638.png" alt="" />
                    <div className='py-[100px]'>
                        <h2 className='text-[42px] text-white font-bold '>Subscribe to Our Newsletter</h2>
                        <p className='py-[18px] text-white font-normal'>It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.</p>
                            <div>
                                <input type="text" placeholder="Medium" className="input input-md" />
                                <button className='btn btn-success ml-6'>Submit Now</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscrib;