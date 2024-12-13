import "../App.css"
import "../styles/Shadows.css"

interface Props {
  image : string;
  title : string;
  description : string;
  link : string;
}

const Card = ({image, title, description, link} : Props) => {
  function buttonHandler(target: string) {
    if (target) {
      window.open(target, "_blank");
    }
  }

  return (
    <> 
      <div className="projects__card-padding" onClick={() => buttonHandler(link)}>
        <div className="projects__card-container drop-shadow">
          <div className="projects__card-contents-container">
            <img src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card