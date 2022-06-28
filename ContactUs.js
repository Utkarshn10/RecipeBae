import useAnalyticsEventTracker from './useAnalyticsEventTracker';

const ContactUs = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  return(
  <div>
    <h3>Contact Us</h3>
     <div> 
       <a href="#" onClick={()=>gaEventTracker('call')}>Call Us</a>
      </div>
     <div>
       <a href="mailto:someone@example.com" onClick={()=>gaEventTracker('email')}>Write to us</a>
      </div>
  </div>)
};