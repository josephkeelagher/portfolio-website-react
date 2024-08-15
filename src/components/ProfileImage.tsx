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
    ></img>
  );
};

export default ProfileImage;
