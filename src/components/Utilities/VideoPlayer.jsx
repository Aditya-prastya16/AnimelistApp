'use client'

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) =>{

    const [isOpen, setisOpen] = useState(true)

    const handleVideoPlayer = () => {
        setisOpen((prevState) => !prevState)
    }

    const option = {
        width : "300",
        height : "250"
    }

    const Player = () =>{
        return(
    
            <div className="fixed bottom-2 right-2">
                <button
                onClick={handleVideoPlayer}
                className="text-color-primary float-right bg-color-secondary hover:transform hover:translate-y-1 hover:transition hover:ease-out hover:bg-red-500 hover:scale-110 hover:delay-150 px-3 mb-1">
                    X
                </button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Yahh... Video Trailernya Rusak")}
                />
            </div>
            
        )
    }

    const ButtonOpenTrailer = () =>{
        return(
            <button 
            onClick={handleVideoPlayer}
            className="fixed bottom-4 right-5 w-fit p-3  bg-color-accent rounded-lg font-semibold  text-color-primary text-xl hover:bg-color-accent transition-all animate-bounce duration-1000 ease-out shadow-xl">
               Tonton Trailer
           </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />

}

export default VideoPlayer