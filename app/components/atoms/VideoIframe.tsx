import { FC, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface VideoProps {
  videoId: string
  width?: number
  height?: number
  className?: string
}

export const VideoIframe: FC<VideoProps> = ({
  videoId,
  width,
  height,
  className = '',
}) => {
  const [isClient, setIsClient] = useState<boolean>(false)
  //const [isMuted, setIsMuted] = useState<boolean>(true)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const youtubeUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : ''
  const posterUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : ''

  return (
    <>
      {isClient && (
        <div className={`video-iframe ${className}`}>
          <ReactPlayer
            url={youtubeUrl}
            controls={true}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                },
              },
            }}
            light={posterUrl}
          />
        </div>
      )}
    </>
  )
}
