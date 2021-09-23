import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">COMMZY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link active mx-10   " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
       
        
      </ul>
      
          
      <button className="btn btn-outline-success mx-4 btn-sm">
      <a className="nav-link" href="/cart">CART</a>
      </button>
      <button className="btn btn-outline-success btn-sm">
      <a className="nav-link" style={{}} href="/signUp">SignUp</a>
      </button>
      </div>
    
  </div>
</nav>
        </div>
    )
}
