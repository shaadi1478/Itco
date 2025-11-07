import React from 'react';
import About from '../About/About';
import Success from '../Success/Success';
import TestimonialSlider from '../Testtimonial/Testtimonial';
import OurTeamMember from '../OurTeamMember/OurTeamMember';

const AboutSection = () => {
    return (
        <div>
            <About />
            <Success />
            <TestimonialSlider />
            <OurTeamMember />
        </div>
    );
};

export default AboutSection;