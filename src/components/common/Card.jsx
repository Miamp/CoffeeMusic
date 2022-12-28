export default function Card ({ data }) {
  return (
    <div className='card'>
      <img className='card-img-top text-center' src={data?.data?.coverArt.sources[0].url} alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{data?.data?.name}</h5>
        <p className='card-text'>{data?.data?.artists?.items[0].profile.name}</p>
      </div>
    </div>
  )
}
