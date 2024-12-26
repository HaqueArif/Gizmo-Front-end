/* eslint-disable react/prop-types */

import { PackageCheck, Truck } from "lucide-react";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <div className="border-b-2 pb-10 mb-10">
        <p className="text-3xl font-semibold">{product.name}</p>
        <div>
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>

      <p>Rating: {product.rating}</p>
      <p>Brand: {product.brand}</p>
      <p>{product.description}</p>

      <div className="mt-10">
        <p className="flex gap-5">
          <Truck /> Free worldwide shipping on all orders over $100
        </p>
        <p className="flex gap-5">
          <PackageCheck /> Delivers in: 3-7 Working Days Shipping & Return
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
