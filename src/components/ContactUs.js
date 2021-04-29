import React from 'react';
import UserHeader from './UserHeader';

function ContactUs()
{
    return(
<>
<UserHeader/>
<div className="text-center">
  <h1 className="mt-2">ContactUs</h1>
  <hr/>
  <div className="container card-view-cotactus">    
    <div className="row about-us">
      <div className="col-sm-6">
        <h4>Need Help?</h4><br/><br/>
        <p>Make a Call - 123-456-7890</p>
        <p>Available 24/7 - 
            <a href="#"> tltaproject2@gmail.com</a>
        </p>
      </div>
      <div className="col-sm-6">
        <h4>FAQs</h4>
          <p>What Skills can I learn? <br/>
          <i>TLTA will help you acquire all the skills that you recquire.</i></p>

          <p>How do I solve issues with course links?<br/>
            <i>Contact us any time, any where.</i>
          </p>

          <p>How do I reset my password?<br/>
            <i>From our settings tab.</i>
          </p>

          <p>How do I take the assessment?<br/>
            <i>By visiting the link provided.</i>
          </p>
        </div>
    </div>
  </div>
  </div>
  </>
  );
}
export default ContactUs;