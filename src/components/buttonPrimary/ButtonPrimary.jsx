import "../../styles/buttonPrimary.css";

function ButtonPrimary({ textButton, classPersonalization }) {
  return (
    <button type="button" className={`buttonPrimary ${classPersonalization}`}>
      {textButton}
    </button>
  );
}

export default ButtonPrimary;
