import React from "react";

export const GalleryView = (props) => {
  const { view } = props;

  return (
    <div className="page-container">
      <div className="galleryView">
        <>
          {view
            // .filter((item) => item.lens === "Fujifilm 35mm f/1.4") // filters only photos with this lens
            .map((item) => (
              <ul>
                <>
                  <img src={item.image} alt="test" />
                  <li>{item.camera}</li>
                  <li>{item.lens}</li>
                  <li>{item.date}</li>
                  <li>{item.location}</li>
                </>
              </ul>
            ))}
        </>
      </div>
    </div>
  );
};
export default GalleryView;
