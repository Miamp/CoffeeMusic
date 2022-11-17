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
        <h1>Aquí esta el SearchAll</h1>
        <div className='row gy-4'>
          {all?.albums?.items?.map((album, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-3'>
              <Card data={album} />
            </div>
          ))}
        </div>
        {
          // console.log(all?.albums?.items)
        }
      </section>
    </>
  )
}
