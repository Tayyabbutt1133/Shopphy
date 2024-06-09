import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import Modal from './Modal'

const Navbar = () => {

    let dialog = useRef();

  return (
      <>
          <Modal ref={dialog}/>
          <header>
              <nav>
                  <div className='Navbar-logo'>
                   <Link to={'/'}> <h1 className='font text-3xl'>Shopphy</h1> </Link>
                  </div>
                  <ul className='nav-links flex gap-8 items-center justify-center'>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/'>Products</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                      <li><Link to='/about'>About</Link></li>
                  </ul>
                  <div className='icon-cart'>
                      <IoCartOutline style={{color:'white'}} onClick={()=> dialog.current.showModal()} />
                  </div>
              </nav>
    </header>
      </>
  )
}

export default Navbar
