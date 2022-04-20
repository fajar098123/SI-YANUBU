function importAll(r) {
  let img = {};
  r.keys().map(item => { img[item.replace('./', '')] = r(item); });
  return img;
}

const img = importAll(require.context('../img', false, /\.png/));

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
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-sosmed"><i class="bx bxl-instagram-alt"></i><span>yayasan_nurul_burhan</span></a>
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-sosmed"><i class='bx bxl-youtube'></i><span>Yayasan Nurul Burhan</span></a>
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-sosmed"><i class='bx bxl-facebook-square'></i><span>Yayasan Nurul Burhan</span></a>
            </div>
          </div>
        </div>

      </section>
      {/* <!-- End Hero --> */}

      <section class="wrapper">
        <div class="container">

          <div class="row">
            <div class="col-md-3 pb-2">
              <div class="card text-white card-has-bg click-col  shadow" style={{ backgroundImage: `url(${img['img1.png']})` }}>
                <div class="card-img-overlay d-flex flex-column">
                  <div class="card-body">
                    <h4 class="card-title mt-0 "><a class="text-white" herf="#">PPI PUTRA - NURUL BURHAN</a></h4>
                    <p class="card-meta mb-2">Untuk Info lebih lengkap terkait PPI PUTRA - NURUL BURHAN dapat di lihat di sini</p>
                    {/* <small><i class="far fa-clock"></i> October 15, 2020</small> */}
                    <a class="" href="#"><h5 class="d-inline">Baca Selengkapnya</h5><i class='bx bxs-chevron-right bx-xs'></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 pb-2">
              <div class="card text-white card-has-bg click-col shadow" style={{ backgroundImage: `url(${img['img2.png']})` }}>
                <div class="card-img-overlay d-flex flex-column">
                  <div class="card-body">
                    <h4 class="card-title mt-0 "><a class="text-white" herf="#">PPI PUTRA - NURUL BURHAN</a></h4>
                    <p class="card-meta mb-2">Untuk Info lebih lengkap terkait PPI PUTRA - NURUL BURHAN dapat di lihat di sini</p>
                    {/* <small><i class="far fa-clock"></i> October 15, 2020</small> */}
                    <a class="" href="#"><h5 class="d-inline">Baca Selengkapnya</h5><i class='bx bxs-chevron-right bx-xs'></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 pb-2">
              <div class="card text-white card-has-bg click-col shadow" style={{ backgroundImage: `url(${img['img3.png']})` }}>
                <div class="card-img-overlay d-flex flex-column">
                  <div class="card-body">
                    <h4 class="card-title mt-0 "><a class="text-white" herf="#">PPI PUTRA - NURUL BURHAN</a></h4>
                    <p class="card-meta mb-2">Untuk Info lebih lengkap terkait PPI PUTRA - NURUL BURHAN dapat di lihat di sini</p>
                    {/* <small><i class="far fa-clock"></i> October 15, 2020</small> */}
                    <a class="" href="#"><h5 class="d-inline">Baca Selengkapnya</h5><i class='bx bxs-chevron-right bx-xs'></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 pb-2">
              <div class="card text-white card-has-bg click-col shadow" style={{ backgroundImage: `url(${img['img4.png']})` }}>
                <div class="card-img-overlay d-flex flex-column">
                  <div class="card-body">
                    <h4 class="card-title mt-0 "><a class="text-white" herf="#">PPI PUTRA - NURUL BURHAN</a></h4>
                    <p class="card-meta mb-2">Untuk Info lebih lengkap terkait PPI PUTRA - NURUL BURHAN dapat di lihat di sini</p>
                    {/* <small><i class="far fa-clock"></i> October 15, 2020</small> */}
                    <a class="" href="#"><h5 class="d-inline">Baca Selengkapnya</h5><i class='bx bxs-chevron-right bx-xs'></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="artikel">
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="title-section"><h1>ARTIKEL</h1></div>
            <div class="read-more d-flex align-items-center"><a class="btn-read-more" href="#"><h5 class="d-inline">Baca Selengkapnya</h5><i class='bx bxs-chevron-right bx-xs'></i></a></div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
