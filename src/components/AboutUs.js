import React from 'react';
import UserHeader from './UserHeader';

function AboutUs()
{
    return(

        <>
        <UserHeader/>
        <div className="text-center">
        <div className="mt-2 ">
        <h1 className="text-center">About Us</h1>
        <hr />
        </div>
        <div className="container table-color ">
            <div className="about-us">
                <p className="text-left pt-5 ">We bring flexible, job-relevant online learning to individuals worldwide. 
                    We offer a range of learning opportunities and courses.
                    to job-ready certificates and degree programs.
                    We help you to build new skills and confidence.
                    Seamless learning experience with a lot of activities and assessments.</p>
                    <p> Technology Learning And Training App was founded in 2020. 
                    With a vision of providing one of it's kind learning experience to learners.
                    Today Technology Learning And Training App is one of the online learning platform
                    that offers anyone, anywhere, access to online courses.</p>
                    <p className=" pt-3"><i>-TLTA Team</i></p>
            </div>
        </div>
        </div>
    
        </>
    );
}
export default AboutUs;