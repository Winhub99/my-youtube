import React, { useEffect, useState } from 'react'

const InfinateScrollExample = () => {

    const [items,setItems] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError]= useState(null)
    const [page,setPage] = useState(1)

    useEffect(()=>{
        const fetchData= async()=>{
            setIsLoading(true)
            setError(null)
            try{
                const response = await fetch(`https://api.freeapi.app/api/v1/public/books?page=${page}`)
                const json = await response.json()
                console.log(json)
                setItems(prevItems=> [...prevItems,...json.data.data])
               // setPage(prevPage=>prevPage+1)       

            }catch(error){
                setError(error)

            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[page])
        
    const handleScroll=()=>{
        if(window.innerHeight + document.documentElement.scrollTop +1 >=document.documentElement.scrollHeight){
            setPage(prev => prev + 1) 
        }
    }

    useEffect(()=>{    
            window.addEventListener('scroll',handleScroll)

        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])

  return (
    <div>
        <ul>
            {items.map((item,index) =>(<>
            <li key={item.id + index}>{item.volumeInfo.title}</li>
            </>
            ))}
        </ul>
        {isLoading  && <p>Loading ...</p>}
        {error && <p>{error.message}</p>}
    </div>
  )
}

export default InfinateScrollExample
