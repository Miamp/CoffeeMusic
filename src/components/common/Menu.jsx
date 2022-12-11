import { NavLink } from 'react-router-dom'

export default function Menu () {
  return (
    <menu className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center title-gradient'>CoffeeMusic</h1>
        </div>
        <div className='row justify-content-center align-items-center mt-5'>
          <div className='col-11 bg-nav'>
            <NavLink to='/home'><img src='https://img.icons8.com/wired/25/FFFFFF/home-page.png' /></NavLink>
          </div>
        </div>
      </div>
    </menu>
  )
}
