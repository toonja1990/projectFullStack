//JSX Code
function Footer() {
 return ( 
 <footer id="footer" className="footer">
 <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="http://localhost:3000/subscribe" method="post" className="php-email-form">
              <div className="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
 <div className="container footer-top">
   <div className="row gy-4">
     <div className="col-lg-4 col-md-6 footer-about">
       <a href="index.html" className="d-flex align-items-center">
         <span className="sitename">Arsha</span>
       </a>
       <div className="footer-contact pt-3">
         <p>A108 Adam Street</p>
         <p>New York, NY 535022</p>
         <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
         <p><strong>Email:</strong> <span>info@example.com</span></p>
       </div>
     </div>

     <div className="col-lg-2 col-md-3 footer-links">
       <h4>Useful Links</h4>
       <ul>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
         <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
       </ul>
     </div>

     <div className="col-lg-2 col-md-3 footer-links">
       <h4>Our Services</h4>
       <ul>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
         <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
       </ul>
     </div>

     <div className="col-lg-4 col-md-12">
       <h4>Follow Us</h4>
       <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
       <div className="social-links d-flex">
         <a href=""><i className="bi bi-twitter-x"></i></a>
         <a href=""><i className="bi bi-facebook"></i></a>
         <a href=""><i className="bi bi-instagram"></i></a>
         <a href=""><i className="bi bi-linkedin"></i></a>
       </div>
     </div>

   </div>
 </div>

 <div className="container copyright text-center mt-4">
   <p>© <span>Copyright</span> <strong className="px-1 sitename">Arsha</strong> <span>All Rights Reserved</span></p>
   <div className="credits">
     Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
   </div>
 </div>

</footer>
 );
}
export default Footer;