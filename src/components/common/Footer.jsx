export default function Footer () {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-11 bg-nav'>
            <div className='row justify-content-end align-items-center footer-content'>
              <div className='col-8'>
                <p className='creador'> Creado por Mills </p>
              </div>
              <div className='col-3'>
                <p className='text-center'>Redes Sociales</p>
                <p className='text-end'>
                  <a href='https://www.linkedin.com/in/mildred-avila-81111724a/' target='_blank' rel='noopener noreferrer'>
                    <img className='icon-effect' src='https://img.icons8.com/wired/25/FFFFFF/linkedin--v2.png' /> Linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
