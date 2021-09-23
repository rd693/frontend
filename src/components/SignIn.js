import React from 'react'

export default function SignIn() {
    return (
        <div className="container" style={{"width":400,"marginTop":8}} >
            <main className="form-signin">
  <form className="d-block">
  <i class="fas fa-user fa-8x"></i>
  
    <h1 className="h3 mb-3 fw-normal my-4">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
  </form>
</main>
        </div>
    )
}
