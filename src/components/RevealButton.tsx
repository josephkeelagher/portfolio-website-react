import "../styles/Button.css";
import "../styles/Shadows.css";

interface Props {
  hoverType: string;
  image: string;
  text: string;
  style?: string;
  onClick: () => void;
}

function RevealButton({hoverType, image, text, style, onClick}: Props) {

  return (
    <div
      className={"button drop-shadow button-" + hoverType}
      onClick={onClick}
    >
      <img className={"icon " + style} src={image} alt={text + "image"} />
      <span className="button-title">{text}</span>
    </div>
  );
}

export default RevealButton;
