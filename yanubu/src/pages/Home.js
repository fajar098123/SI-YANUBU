function Home() {
  return (
    <div className="App">
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex align-items-center">

        <div class="container">
            <div class="d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Selamat Datang</h1>
              <h2 class="col-lg-5 d-flex flex-column">di Website <span>Yayasan Nurul Burhan</span> Bondowoso</h2>
              <div class="d-flex justify-content-center">
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-sosmed"><i class="bx bxl-instagram-alt"></i><span>Watch Video</span></a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-sosmed"><i class='bx bxl-youtube'></i><span>Watch Video</span></a>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-sosmed"><i class='bx bxl-facebook-square'></i><span>Watch Video</span></a>
              </div>
            </div>
        </div>

      </section>
      {/* <!-- End Hero --> */}

      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>

    </div>
  );
}

export default Home;
