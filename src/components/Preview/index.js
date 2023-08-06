export const Preview = ({ imageFiles }) => {
  if (!imageFiles.length) {
    return null;
  }

  return imageFiles.map((file) => (
    <img
      style={{ maxWidth: "200px" }}
      src={`//localhost:8000/${file.filename}`}
      alt={file.originalname}
    />
  ));
};
