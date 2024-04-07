import React from "react";
import './styles.css';

function LandingPage() {
  return ( 
    <>
      <header className="Header fixed top-0 left-0 right-0 text-3xl">
        Header atau Navbar
      </header>
      <main className="center">
        <div className="bio-container">
          <h1>BIODATA</h1>
          <div className="biodata-row">
            <div className="biodata-item">
              <p>Nama   : Cici Diah Utari</p>
              <p>Umur   : 20th</p>
              <p>Status : Mahasiswa</p>
              <p>Alamat : Banyuwangi sunrise of java</p>
            </div>
            <div className="biodata-item">
              <p>Nama   : Cici Diah</p>
              <p>Umur   : 20th</p>
              <p>Status : Lajang</p>
              <p>pekerjaan : pengusaha sukses ammin</p>
            </div>
            <div className="biodata-item">
              <p>Nama   : Cici </p>
              <p>Umur   : 20th</p>
              <p>Gender : perempuan</p>
              <p>pekerjaan : mahasiswi</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer fixed bottom-0 left-0 right-0 text-3xl">
        Yt : Cici Diah Ig : cici052_
      </footer>
    </>
   );
}

export default LandingPage;