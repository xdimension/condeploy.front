export const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h1 class="title">Stack</h1>
            </div>
            <div class="col-md-3">
              <ul class="nav">
                <li class="nav-item">
                  <a href="../index.html" class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../examples/landing-page.html" class="nav-link">
                    Landing
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../examples/register-page.html" class="nav-link">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../examples/profile-page.html" class="nav-link">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul class="nav">
                <li class="nav-item">
                  <a href="https://contact-us" class="nav-link">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://about-us" class="nav-link">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://blog" class="nav-link">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://opensource.org/licenses/MIT" class="nav-link">
                    License
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3 class="title">Follow us:</h3>
              <div class="btn-wrapper profile">
                <a target="_blank" href="https://instagram.com" class="btn btn-icon btn-neutral  btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                  <i class="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://twitter.com" class="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Follow us">
                  <i class="fab fa-twitter"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com" class="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Like us">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
    )
}