import "../styles/apresentationModel.css";

function ApresentationModel({ image, title, text, type, alternativeText }) {
  return (
    <>
      {type === "image" ? (
        <div className="apresentationModel">
          <div className="containerImage">
            <img src={image} alt="Icon Work" />
          </div>
          <p className="titleWork">{title}</p>
          <p className="textWork">{text}</p>
        </div>
      ) : (
        <div className="apresentationModelNoImage">
          <div className="divTitles">
            <p className="alternativeText">{alternativeText}</p>
            <p className="titleWorkNoImage">{title}</p>
          </div>
          <p className="textWork">{text}</p>
        </div>
      )}
    </>
  );
}

export default ApresentationModel;
