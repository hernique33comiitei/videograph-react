import "../../styles/container.css";

function Container({ children, classPersonalization = "" }) {
  return <div className={`container ${classPersonalization}`}>{children}</div>;
}

export default Container;
