import "../styles/Button.css";
import "../styles/Shadows.css";

interface Props {
  hoverType: string;
  image: string;
  text: string;
  link: string;
  style?: string;
}

function Button({ hoverType, image, text, link, style }: Props) {
  function buttonHandler(target: string) {
    if (target) {
      window.open(target, "_blank");
    }
  }

  return (
    <div
      className={"button drop-shadow button-" + hoverType}
      onClick={() => buttonHandler(link)}
    >
      <img className={"icon " + style} src={image} alt={text + "image"} />
      <span className="button-title">{text}</span>
    </div>
  );
}

export default Button;
