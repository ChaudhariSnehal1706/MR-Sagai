import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { RiDownloadLine } from "react-icons/ri";

const ImageGallery = ({ imageData }) => {
  const [imagesToShow, setImagesToShow] = useState(9); // Initially show 9 images
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null); // Track which image is hovered
  const [isLoading, setIsLoading] = useState(false); // Show loader when fetching new images

  // Function to load more images on scroll
  const loadMoreImages = () => {
    if (imagesToShow < imageData.length && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setImagesToShow((prevCount) => prevCount + 9); // Load 9 more images
        setIsLoading(false); // Hide the loader after 3 seconds
      }, 5000); // 5-second loader
    }
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (currentIndex < imageData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(imageData[currentIndex + 1].image); // Ensure using the correct property
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(imageData[currentIndex - 1].image); // Ensure using the correct property
    }
  };

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "Escape") {
        handleClose();
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  // Handle infinite scroll
  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 1) {
      loadMoreImages();
    }
  };

  // Add scroll event listener to load more images
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imagesToShow, isLoading]);

  return (
    <div className="gallery-container lg:py-24 py-7 lg:px-0 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-center">
      </div>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageData.slice(0, imagesToShow).map((item, index) => (
          <ImageListItem
            key={item.id}
            className="relative image-item"
            onMouseEnter={() => setHoveredImageIndex(index)} // Show download button on hover
            onMouseLeave={() => setHoveredImageIndex(null)} // Hide download button when hover ends
          >
            <img
              src={item.image} // Make sure this points to the correct property
              alt={`Image ${item.id}`}
              // className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
              className="rounded-lg cursor-pointer"
              onClick={() => handleImageClick(item.image, index)} // Ensure this is also the correct property
            />
            {hoveredImageIndex === index && (
              <a
                href={item.image} // Ensure this is also the correct property
                download
                className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                {/* Download */}
                <RiDownloadLine/>
              </a>
            )}
          </ImageListItem>
        ))}
        </ImageList>

      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center items-center mt-6">
          <div className="custom-loader"></div>
        </div>
      )}

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onMouseEnter={() => setHoveredImageIndex(currentIndex)} // Show download button on hover in modal
          onMouseLeave={() => setHoveredImageIndex(null)}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className={`absolute left-5 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 ${
              currentIndex === 0 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex === 0} // Disable button at first image
          >
            {/* &lt;  */}
            <BiArrowFromRight/>
          </button>

          <img
            src={selectedImage} // Make sure this points to the correct property
            alt="Selected"
            className="max-w-full max-h-full rounded-lg"
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`absolute right-5 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 ${
              currentIndex === imageData.length - 1 &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex === imageData.length - 1} // Disable button at last image
          >
            {/* &gt; */}
            <BiArrowFromLeft/>
          </button>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700"
          >
            {/* X */}
            <CgClose/>
          </button>

          {/* Download button in modal */}
            <a
              href={selectedImage} // Make sure this points to the correct property
              download
              className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              {/* Download */}
              <RiDownloadLine/>
            </a>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
