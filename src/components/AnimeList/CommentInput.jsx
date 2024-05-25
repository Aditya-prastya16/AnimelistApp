'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({anime_mal_id, user_email, username, anime_title}) => {

    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [error, setError] = useState("")

    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()

        // Check if the comment has at least three words
        const wordCount = comment.split(" ").filter(word => word.trim() !== "").length;
        if (wordCount < 2) {
            setError("Masukin Minimal 2 Kalimat Buat Coment Donkk...")
            return;
        }

        const data = { anime_mal_id, user_email, comment, username, anime_title}

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
            setError("")
        }
        return
    }
    
    return(
        <div className="flex flex-col gap-2">
            {isCreated && <p className="text-color-primary">Postingan terkirim...</p>}
            {error && <p className="text-color-primary text-xl font-bold">{error}</p>}

            <textarea 
                onChange={handleInput} 
                value={comment}
                placeholder="Masukin Comment Dongg...."
                className="w-full h-32 text-xl p-4 rounded-lg" />
            <button onClick={handlePosting} className="w-52 py-2 px-3 bg-color-accent rounded-lg text-color-primary font-semibold transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-95 duration-300">Posting Komentar</button>
        </div>
    )
}

export default CommentInput
