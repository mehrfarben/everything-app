import React, { useState } from "react"
import "./Photos.css"

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showNextImage, setShowNextImage] = useState(false)

  const images = require.context("../images", true)
  const imageList = images.keys().map((image) => images(image))

  function ShowNextImage() {
    setShowNextImage(true)
    setCurrentImageIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div>
      {showNextImage && (
        <img
          className='app-images'
          key={currentImageIndex}
          src={imageList[currentImageIndex]}
          alt={`IMG ${currentImageIndex}`}
          style={{
            animation: "fadeIn 1.5s",
            position: "absolute",
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 80}%`,
          }}
        />
      )}
      <button className='showImageBtn' onClick={ShowNextImage}>
        Show Image
      </button>
    </div>
  )
}

export default ImageGallery
