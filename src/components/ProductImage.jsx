function ProductImage({ images, selectedImage, setSelectedImage }) {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src={selectedImage}
        alt="Main Product"
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
              selectedImage === image ? "border-2 border-teal-500" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
