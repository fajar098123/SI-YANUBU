

function Navbar() {
  return (
    <div className="Navbar">
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto"><a href="index.html"><img src="assets/img/yanubu.png" alt="" class="img-fluid" /></a></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li class="dropdown"><a href="#"><span>Profile</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">dropdown 1</a></li>
                  <li><a href="#">dropdown 2</a></li>
                  <li><a href="#">dropdown 3</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#about">Fasilitas</a></li>
              <li><a class="nav-link scrollto" href="#services">Galeri</a></li>
              <li><a class="nav-link scrollto" href="#portfolio">Artikel</a></li>
              <li class="dropdown"><a href="#"><span>Jadwal Kegiatan</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">dropdown 1</a></li>
                  <li><a href="#">dropdown 2</a></li>
                  <li><a href="#">dropdown 3</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Download</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Brosur Pendaftaran</a></li>
                  <li class="dropdown"><a href="#"><span>Formulir Pendaftaran</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" href="#contact">Kontak</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          
          {/* <!-- .navbar --> */}

        </div>
      </header>
      
      {/* <!-- End Header --> */}
  
    </div>
  );
}

export default Navbar;