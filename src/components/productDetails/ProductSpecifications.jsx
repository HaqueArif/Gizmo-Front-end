/* eslint-disable react/prop-types */
const ProductSpecifications = ({ product }) => {
  return (
    <div className="mb-10 sm:mb-20">
      <h4 className="font-semibold italic">Specification & Details</h4>
      <p className="mt-2 mb-5">{product.description}</p>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Model: <span>{product.name}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Brand: <span>{product.brand}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Rating: <span>{product.rating}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Processor: <span>{product.specifications.processor}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Specifications: <span>{product.specifications.ram}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Storage: <span>{product.specifications.storage}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Battery: <span>{product.specifications.battery}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Camera: <span>{product.specifications.camera}</span>
      </div>
      <div className="border-t border-b py-2 flex gap-2 justify-between pr-3 sm:pr-10">
        Display: <span>{product.specifications.display}</span>
      </div>
    </div>
  );
};

export default ProductSpecifications;
