import "../styles/Shadows.css";

interface Props {
  image: string;
}
const ProfileImage = ({ image }: Props) => {
  return (
    <img
      src={image}
      alt="profile image"
      className="profile-image drop-shadow"
      style={{
        width: "100%",      // Make the image fill the container's width
        height: "100%",     // Make the image fill the container's height
        objectFit: "cover", // Maintain the aspect ratio while covering the container
      }}
    ></img>
  );
};

export default ProfileImage;
