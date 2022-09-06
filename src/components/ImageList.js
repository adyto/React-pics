import React from "react";

const ImageList = (props) => {
  const images = props.images.map(
    ({ alt_description, description, id, urls }) => {
      return (
        <div key={id}>
          <h2 style={{ textTransform: "capitalize", textAlign: "center" }}>
            {alt_description}
          </h2>
          <img alt={description} src={urls.regular} />
        </div>
      );
    },
  );

  return (
    <div>
      <h1>{images}</h1>
    </div>
  );
};

export default ImageList;
