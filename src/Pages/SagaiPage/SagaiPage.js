import React from "react";
import { Gallery, SagaiDataJsonData } from "../../Components";

const SagaiPage = () => {

  // Map SagaiDataJsonData to create an array of objects with id and mandapImage
  const SagaisImages = SagaiDataJsonData.map(item => ({
    id: item.id, // Preserve the id
    image: item.SagaiImage, // Change SagaiImage to image
  }));

  return (
    <div className="container mx-auto">
      <Gallery imageData={SagaisImages} /> {/* Pass the structured data */}
    </div>
  );
};

export default SagaiPage;
