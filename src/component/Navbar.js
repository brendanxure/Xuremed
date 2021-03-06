import React, { useEffect, useState } from 'react'
import './Navbar.css'
import './Signin.css'
import google from './Image/google.png'
import apple from './Image/apple-logo.png'

const Modal = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 xuremedcommunity">
                        <h1><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></h1>
                        <h3>Join our community today and <br/> explore our vast resources</h3>
                        </div>
                        <div class="col-sm-12 col-md-6 signinmain">
                        <div className='signindiv'>
                          <div className='googlesignup'><img className='googlesignupimage' src={google}></img>Sign up with Google</div> 
                          <div className='googlesignup'><img className='applesignupimage' src={apple}></img>Sign up with Apple</div>
                          <div className='orline'><span>or</span></div>
                          <div className='emailsignup'>Sign up with email</div> 
                          <div className= 'services'>By signing up, you agree to the <span className='policyspan'>Terms of Services</span> and <span className='policyspan'>Privacy Policy</span></div>
                          <div><h5 className='already'>Already have an account?</h5></div>
                          <div className='googlesignup'>Sign in</div>
                        </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};


const Modals = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 xuremedcommunity">
                        <h1><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></h1>
                        <h3>Join our community today and <br/> explore our vast resources</h3>
                        </div>
                        <div class="col-sm-12 col-md-6 signinmain">
                        <div className='signindiv'>
                          <div className='googlesignup'><img className='googlesignupimage' src={google}></img>Sign up with Google</div> 
                          <div className='googlesignup'><img className='applesignupimage' src={apple}></img>Sign up with Apple</div>
                          <div className='orline'><span>or</span></div>
                          <div className='emailsignup'>Sign up with email</div> 
                          <div className= 'services'>By signing up, you agree to the <span className='policyspan'>Terms of Services</span> and <span className='policyspan'>Privacy Policy</span></div>
                          <div><h5 className='already'>Already have an account?</h5></div>
                          <div className='googlesignup'>Sign in</div>
                        </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

function Navbar() {
    const [isModalOpen, setModalIsOpen] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

    const [isModalOpens, setModalIsOpens] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModals = () => {
		setModalIsOpens(!isModalOpens);
	};

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-color">
        {isModalOpen && <Modal onRequestClose={toggleModal} />}
        {isModalOpens && <Modals onRequestClose={toggleModals} />}
            <div class="container-fluid">
                <a class="navbar-brand logo" href="#"><span className='x'>X</span><span className='ure'>ure</span><span className='med'>MED</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                <ul class="navbar-nav me-4 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick={toggleModal}>Sign In</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick={toggleModals}>Register</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success me-5" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar