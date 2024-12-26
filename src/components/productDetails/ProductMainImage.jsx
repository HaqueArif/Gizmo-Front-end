/* eslint-disable react/prop-types */
const ProductMainImage = ({ product }) => {
  return (
    <div className="grid grid-cols-5">
      <div className="sm:border col-span-5 hover:scale-105 transition-all">
        <div className="relative w-[80%] h-full md:h-[80%] mx-auto mt-8">
          <img src={product?.images[0]} alt={product?.name} />
        </div>
      </div>
    </div>
  );
};

export default ProductMainImage;
