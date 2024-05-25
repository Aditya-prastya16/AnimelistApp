'use client'
import React, { useState } from 'react'

const CollectionButton = ({anime_mal_id, user_email, anime_image, anime_title}) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async(event) =>{
        event.preventDefault()

        const data = {anime_mal_id, user_email, anime_image, anime_title}

        const response = await fetch("/api/v1/collection",{
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.status == 200){
            setIsCreated(collection.isCreated)
        }
        return
    }

  return (
    <>
    {
    isCreated ? <p className='text-color-primary font-semibold'>Berhasil Ditambahkan Ke Koleksi</p>
    :
    <button onClick={handleCollection} className="px-3 py-2 bg-color-accent  rounded-lg text-color-primary font-semibold ">+ Tambahin Ke Koleksi</button>
    
}
    </>
    )
}

export default CollectionButton