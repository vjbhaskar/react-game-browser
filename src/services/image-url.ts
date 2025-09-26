import noImage from "../assets/no-image.webp";
const getCroppedImageUrl = (url: string, height: number, width: number) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return `${url.slice(0, index)}crop/${height}/${width}/${url.slice(index)}`;
};

export default getCroppedImageUrl;
