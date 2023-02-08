export const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1 className="title">Stack</h1>
            </div>
            <div className="col-md-3">
              <ul className="nav">
                <li className="nav-item">
                  <a href="../index.html" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/landing-page.html" className="nav-link">
                    Landing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/register-page.html" className="nav-link">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../examples/profile-page.html" className="nav-link">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://contact-us" className="nav-link">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://about-us" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://blog" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://opensource.org/licenses/MIT" className="nav-link">
                    License
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <a target="_blank" href="https://instagram.com" className="btn btn-icon btn-neutral  btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://twitter.com" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com" className="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Like us">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
    )
}