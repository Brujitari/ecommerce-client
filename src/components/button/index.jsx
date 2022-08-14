import "./styles.scss";

const Button = ({ text, handleClick }) => {
  const backgroundColor = "light-gray"

  return (
    <section
      className="button"
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      <p className="button__text">{text}</p>
    </section>
  );
};

export default Button;
