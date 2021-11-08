import React from 'react'

export default function Song(props) {
    const {
        youtubeId,
        youtubeTime,
        name
    } = props.Song

    return (
        <div className="col-4 col-sm-3 col-lg-2 category">
            <a href={`https://youtu.be/${youtubeId}?t=${youtubeTime}`} target="_blank" rel="noreferrer noopener">
                <img className="song-img" src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`} width="100%" alt={name} />
            </a>
            <a href={`https://youtu.be/${youtubeId}?t=${youtubeTime}`} target="_blank" rel="noreferrer noopener">
                <p className="song-name">{name}</p>
            </a>
        </div>
    )
}
