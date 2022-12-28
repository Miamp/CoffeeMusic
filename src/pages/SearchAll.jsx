/* Components */
import Card from '../components/common/Card'
/* hooks */
import useGetData from '../hooks/useGetData'

export const SearchAll = () => {
  const se = 'super junior'
  const tipo = 'multi'

  const apiUrl = (`https://spotify23.p.rapidapi.com/search/?q=${se}&type=${tipo}offset=0`)

  const { res: all, error, loading } = useGetData(apiUrl)

  return (
    <>
      <section className='container'>
        <div className='row gx-2 gy-3'>
          {all?.albums?.items?.map((album, index) => (
            <div key={index} className='col-12 col-md-8 col-lg-4'>
              <Card data={album} />
            </div>
          ))}
        </div>
      </section>
    </>

  // console.log(all?.albums?.items?.map)

  )
}
