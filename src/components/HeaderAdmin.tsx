import React from 'react'

const HeaderAdmin = () => {
  return (
    <div>
      <div >
			<nav className="navbar navbar-expand-lg navbar-light bg-light" >
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item" style={{paddingLeft: '10px' , fontSize: '30px'}}>
							<a style={{color: '#000', textDecoration: 'none'}} href="index.html" className="probootstrap-logo">Black<span>.</span></a>
							</li>
						
						</ul>
						<form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>

		</div>
    </div>
  )
}

export default HeaderAdmin
