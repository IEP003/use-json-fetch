import { useEffect, useState } from "react"

interface FetchOptions {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit;
}


export default function useJsonFetch( url: string, opts: FetchOptions = {}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, opts);

                if (!response.ok) {
                    throw new Error(`Status: ${response.status}`)
                }
                const json = await response.json();
                setData(json);
                setError(null);
            } catch (error: any) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [url])

  return [data, loading, error]
}

