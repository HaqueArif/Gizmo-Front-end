/* eslint-disable react/prop-types */
import { MapPin, TruckIcon } from "lucide-react";

const ProductShippingInfo = ({ product }) => {
  return (
    <div className="bg-orange-50 p-3 mb-5">
      <div className="border-b-2">
        <div className="flex gap-5 items-center mb-2">
          <p className="flex gap-1">
            <MapPin /> Dhaka, Dhaka North, Banani Road No. 12 - 19
          </p>
          <button className="text-cyan-600">Change</button>
        </div>
        <div className="flex gap-5 justify-between items-center mb-2">
          <p className="flex gap-1">
            <TruckIcon /> Standard Delivery 4 - 9 day&apos;s
          </p>
          <button className="text-cyan-600">$ {product.price}</button>
        </div>
        <p className="flex gap-1 mb-1">
          <MapPin /> 7 Day Return
        </p>
      </div>
      <div className="my-2">
        <span className="text-sm">Change of mind applicable</span>
      </div>
      <div>
        <p className="flex gap-1">Warranty not available</p>
      </div>
    </div>
  );
};

export default ProductShippingInfo;
