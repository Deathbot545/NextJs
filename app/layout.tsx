import React from "react";

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        
      </head>
      <body>
        {/* <div id="spinnerContainer" className="d-flex justify-content-center align-items-center" style={{ display: 'none', position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div> */}
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ms-auto d-flex align-items-center">
              {/* Unauthenticated user links */}
              <button type="button" className="btn btn-light text-dark me-2">
                <a className="dropdown-item">Sign In</a>
              </button>
              <button type="button" className="btn btn-primary">
                <a className="dropdown-item">Sign Up</a>
              </button>
            </div>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                {/* Navigation Links styled like your example */}
                <nav className="nav flex-column">
                 
                  <a className="nav-link " href="/"><i className="fas fa-home icon-space" ></i>Getting Started</a>
                  <a className="nav-link" href="/driver"><i className="fas fa-home icon-space"></i>Driver</a>
                  <a className="nav-link" href="/Dashboard"><i className="fas fa-tachometer-alt icon-space"></i>Dashboard</a>
                  <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" id="vehicleDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-car icon-space"></i>Vehicles
                    </a>
                    <div className="dropdown-menu" aria-labelledby="vehicleDropdown">
                      <a className="dropdown-item" href="/vehicle">Vehicle Lists</a>
                      <a className="dropdown-item" href="/allocation">Vehicle Allocation</a>
                      <a className="dropdown-item" href="#">Vehicle Details</a>
                      {/* ... Add other nested items ... */}
                    </div>
                  </div>
                  <a className="nav-link dropdown-toggle" href="#" role="button" id="inspectionDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-check-circle icon-space"></i>Inspections
                  </a>
                  <div className="dropdown-menu" aria-labelledby="inspectionDropdown">
                    <a className="dropdown-item" href="#">Inspection History</a>
                    <a className="dropdown-item" href="#">Item Failures</a>
                    {/* ... Add other nested items ... */}
                  </div>
                </nav>
                {/* Search Form */}
                <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <main role="main" className="pb-3">
            {children}
          </main>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
