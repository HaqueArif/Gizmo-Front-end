/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HotDealsCard = ({ product }) => {
  return (
    <div className="pb-1">
      <Link to={`/product/${product._id}`} className="w-full">
        <div className="card-compact bg-base-100 w-full h-full max-w-[360px] shadow cursor-pointer">
          <figure>
            <img
              className="h-20 sm:h-32 md:h-36 lg:h-40 xl:h-52 mx-auto"
              src={product?.images[0]}
              alt={product?.name}
            />
          </figure>
          <div className="card-body border-t-2 mt-3 text-center">
            <p className="text-[10px] sm:text-[12px] lg:text-[16px]">
              $ {product?.price}
            </p>
            <h2 className="font-bold text-[10px] sm:text-[12px] lg:text-[16px]">
              {product?.name}
            </h2>
            <div className="flex justify-center gap-1 ">
              <span className="text-[10px] sm:text-[12px] lg:text-[16px]">
                {product?.specifications.ram}
              </span>
              +
              <span className="text-[10px] sm:text-[12px] lg:text-[16px]">
                {product?.specifications.storage}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotDealsCard;
