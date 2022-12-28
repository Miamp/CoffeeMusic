import { useEffect, useState } from 'react'

export default function useGetData (apiUrl) {
  const [res, setRes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31b4076723msh7d00975ce3f275ep185057jsn947f2360aae8',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }

  const getData = async () => {
    try {
      const request = await fetch(apiUrl, options)
      const response = request.ok ? await request.json() : []
      setRes(response)
      response.ok && setError(response.statusText)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [apiUrl])

  return { res, error, loading }
}
