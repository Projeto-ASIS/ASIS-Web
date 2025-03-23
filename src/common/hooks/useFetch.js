import { useState, useEffect } from "react"

export default function useFetch(config) {
  const {
    initialData,
    fnMethod,
    options
  } = config
  const [data, setData] = useState(initialData)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    async function get() {
      try {
        let newData = []

        // console.log("🚀 ~ get ~ fnMethod:", fnMethod)
        newData = await fnMethod({ signal })
        console.log("🚀 ~ get ~ newData:", newData)

        setData(newData)
        setIsLoading(false)
        setIsError(false)
      } catch (error) {
        console.error(error)

        setIsError(true)
        setData([])
        setIsLoading(false)
      }
    }

    get()

    return () => {
      abortController.abort()
    }
  }, [])


  return {
    data,
    setData,
    isError,
    isLoading
  }
}