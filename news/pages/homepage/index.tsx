import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div >
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="https://i.ibb.co/RHNqZ4x/Capture-removebg-preview.png"
                  height={60}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
              {/* Left links */}
            </div>
            <div className="d-flex align-items-center">
              <a className="text-reset me-3" href="#">
                <i className="fas fa-bell" />
              </a>
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
      <div className="slider">
        <div>
          <Slider {...settings}>
            <div>
              <div className="assets">
                <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="1" />
                <div className="title">Raining in Nairobi</div>
                <div className="describe fa fa-map-marker">
                  <div className="category">Naturew</div>
                  <span> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <div>
            <div>
              <div className="assets">
                <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="1" />
                <div className="title">Raining in Nairobi</div>
                <div className="describe fa fa-map-marker">
                  <div className="category">Naturew</div>
                  <span> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div>
              <div className="assets">
                <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="1" />
                <div className="title">Raining in Nairobi</div>
                <div className="describe fa fa-map-marker">
                  <div className="category">Naturew</div>
                  <span> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div>
              <div className="assets">
                <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="1" />
                <div className="title">Raining in Nairobi</div>
                <div className="describe fa fa-map-marker">
                  <div className="category">Naturew</div>
                  <span> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div>
              <div className="assets">
                <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="1" />
                <div className="title">Raining in Nairobi</div>
                <div className="describe fa fa-map-marker">
                  <div className="category">Naturew</div>
                  <span> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            </div>
            <div>
            <div>
              <div className="assets">
                <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="1" />
                <div className="title">Raining in Nairobi</div>
                <div className="describe fa fa-map-marker">
                  <div className="category">Naturew</div>
                  <span> Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
