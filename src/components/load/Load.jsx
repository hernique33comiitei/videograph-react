import "../../styles/load.css";

function Load({ isActive }) {
  return (
    <>
      {isActive && (
        <div className="containerLoad">
          <div className="loader" />
        </div>
      )}
    </>
  );
}

export default Load;
