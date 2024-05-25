'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () =>{
    const searchRef = useRef()

const router = useRouter()

const handleSearch = (event) => {
    const keyword = searchRef.current.value

    if (!keyword || keyword.trim() == "" ) return


    if (event.key === "Enter" || event.type ==="click") {
        event.preventDefault()
        router.push(`/search/${keyword}`)
    }
}
    return (
        <div className="relative">
                <input 
                placeholder="Cari anime bree" 
                className="p-2 rounded-lg w-full text-color-dark"
                ref={searchRef}
                onKeyDown={handleSearch}
                />
                <button className="absolute end-2 top-1 text-color-dark" onClick={handleSearch}>
                    <MagnifyingGlass size={32} />
                </button>
        </div>
    )
}

export default InputSearch