import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css"; // For animations
import "font-awesome/css/font-awesome.min.css"; // FontAwesome
import "./Home.css"; // Your custom styles

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="images/logo.png"
              alt="logo"
              className="small-logo"
              style={{ width: "200px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <section id="home" className="banner">
        <div className="banner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="banner-text">
                  <h2>Your journey to mental clarity and strength starts here.</h2>
                  <h6>Meditation, journaling, chatbot, and more!</h6>
                  <br />
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="images/appstore.png"
                          className="wow fadeInUp"
                          data-wow-delay="0.4s"
                          alt="App Store"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="images/playstore.png"
                          className="wow fadeInUp"
                          data-wow-delay="0.7s"
                          alt="Play Store"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src="images/iphone-screen.png"
                  className="img-fluid wow fadeInUp"
                  alt="iPhone Screen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="sectioner-header text-center">
            <h3>About</h3>
            <span className="line"></span>
            <p>
              Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
              viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
              pharetra ante.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box">
                <i className="fa fa-life-ring" aria-hidden="true"></i>
                <h5>Emotion Tracking</h5>
                <p>
                  Generates a calendar color-coded to display your emotions each
                  day, and a graph that shows your stress levels over time.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <h5>Emotion Management Strategies</h5>
                <p>
                  Daily reminders to meditate and journal, and steps to do so.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box">
                <i className="fa fa-bolt" aria-hidden="true"></i>
                <h5>Chatbot</h5>
                <p>
                  Debrief your days, vent to, and seek advice from our Gen AI
                  therapist Sarah, who has a real conversational voice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="feature section-padding">
        <div className="container">
          <div className="sectioner-header text-center">
            <h3>Features</h3>
            <span className="line"></span>
            <p>
              Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
              viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
              pharetra ante.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-feature">
                <i className="fa fa-bolt" aria-hidden="true"></i>
                <h5>Fast Processing</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="images/iphone-screen-with-shadow.png"
                className="img-fluid"
                alt="iPhone Features"
              />
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <i className="fa fa-check-double" aria-hidden="true"></i>
                <h5>Regular Updates</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
