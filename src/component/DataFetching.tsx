import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'

interface Props {
    url: string,
    title: string, 
    className?: string
}



export const DataFetching = ({ url, title, className } : Props) => {
    const [data, loading, error] = useJsonFetch(url, {method: 'get'})

  return (
    <div className={`data ${className}`}>
      <h3>{title}</h3>
      {loading ? (
        <div className="loader">
          loading...
        </div>
      ) : (
        <div>{data && data.status}</div>
      )}
      {error && <p className="error">{error.message}</p>}
    </div>
  )
}
