import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="mid">
        <div id='footgrid'>
          <ul>
            <li>
              <p>About Commerco</p>
            </li>
            <li>About us</li>
            <li>Careers</li>
            <li>Press Center</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>
              <p>Help & Support</p>
            </li>
            <li>Customer Service</li>
            <li>Contact Us</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
          </ul>
          <ul>
            <li>
              <p>Selling</p>
            </li>
            <li>Seller Center</li>
            <li>Seller Fees</li>
            <li>Advertising</li>
            <li>Seller Handbook</li>
          </ul>
          <ul>
            <li>
              <p>Legal</p>
            </li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
          </ul>
          <ul>
            <li>
              <p>Download App</p>
            </li>
            <li id='app'><i class="bi bi-phone"></i> <>Get App</></li>
            <li id='ios'>Available on iOS and Android</li>
          </ul>
        </div>
        <div id="footgrid2">
          <div className="fgcont">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-5 h-5 text-primary flex-shrink-0" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
            <div className="svdiv">
              <h6>Email</h6>
              <p>support@commerco.com</p>
            </div>
          </div>
          <div className="fgcont">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5 text-primary flex-shrink-0" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            <div className="svdiv">
              <h6>Phone</h6>
              <p>98-XXXXXXXX</p>
            </div>
          </div>
          <div className="fgcont">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-5 h-5 text-primary flex-shrink-0" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div className="svdiv">
              <h6>Address</h6>
              <p>Baagbazaar-8, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        <div id="copyright">© 2025 Commerco. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
