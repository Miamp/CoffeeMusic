import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu () {
  const inputRef = useRef()

  return (
    <menu className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center title-gradient'>CoffeeMusic</h1>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-11 bg-nav'>
            <div className='row justify-content-end'>
              <div className='col-4'>
                <form>
                  <span>
                    <input type='search' className='balloon' name='search' ref={inputRef} /><label for='Buscar'><img src='https://img.icons8.com/wired/25/FFFFFF/search.png' />  Buscar</label>
                  </span>
                  <NavLink to='/home'><img className='icon-effect' src='https://img.icons8.com/wired/35/FFFFFF/home-page.png' /></NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </menu>
  )
}
