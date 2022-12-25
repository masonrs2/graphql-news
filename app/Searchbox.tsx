"use client"

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const Searchbox = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!search) return;

        router.push(`/search/${search}`)
    }

  return (
    <form 
    onSubmit={handleSearch}
    className="max-w-6xl mx-auto flex justify-between items-center px-5"> 
        <input 
        placeholder="Search using keywords..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text" 
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400" />

        <button 
        type="submit"
        disabled={!search}
        className="text-orange-400 disabled:text-gray-400"
        >Search
        </button>

    </form>
  )
}

export default Searchbox