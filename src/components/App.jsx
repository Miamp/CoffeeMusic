import { SearchAll } from '../pages/SearchAll'

export default function App () {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-3 text-center m-left'>
            <p>Artista</p>
            <p>Albums</p>
            <p>Canciones</p>
            <p>Géneros</p>
            <p>Playlist</p>
            <p>Podcast</p>
            <p>Episodios</p>
          </div>
          <div className='col-8 bg-c'>
            <SearchAll />
          </div>
        </div>
      </div>
    </div>
  )
}
