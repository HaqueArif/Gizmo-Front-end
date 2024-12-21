import { useParams } from "react-router-dom";
import useFetchData from "../components/api/useFetchData";
import { MapPin, PackageCheck, Truck, TruckIcon } from "lucide-react";
import Container from "../components/Shared/Container";
import Loader from "../components/Loader";
// Adjust the path to where your hook is

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const { loading, error, getProductById } = useFetchData(
    `http://localhost:5000/products`
  );
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  // Fetch product details by id using the getProductById function
  const product = getProductById(id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-32   bg-base-100  mb-40 mt-20 ">
        <div className=" grid grid-cols-5 ">
          {/* main image */}
          <div className="sm:border  col-span-5 hover:scale-105 transition-all">
            <div className="relative w-[80%] h-full md:h-[80%]  mx-auto mt-8  ">
              <img src={product?.images[0]} alt={product?.name} />
            </div>
            {/* three image of category*/}
            {/* <div className=" flex  items-center justify-between ">
              <div className="border bg-slate-100 w-full py-2">
                <div className=" relative w-full h-20 ">
                  <img src={product?.images[0]} alt={product?.name} />
                </div>
              </div>
              <div className="border bg-slate-200 w-full py-2">
                <div className=" relative w-full h-20 ">
                  <img src={product?.images[0]} alt={product?.name} />
                </div>
              </div>
              <div className="border bg-slate-200 w-full py-2">
                <div className=" relative w-full h-20 ">
                  <img src={product?.images[0]} alt={product?.name} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* middle side contents */}
        <div className="">
          <div className="  border-b-2 pb-10 mb-10">
            <p className="text-3xl font-semibold">{product?.name}</p>
            <div>
              <span className="text-2xl">${product?.price}</span>
            </div>
          </div>

          <p className="">Rating: {product?.rating}</p>
          <p className="">Brand: {product?.brand}</p>
          <p className="">{product?.description}</p>

          <div className="mt-10">
            <p className="flex gap-5">
              <Truck /> Free worldwide shipping on all orders over $100
            </p>
            <p className="flex gap-5">
              <PackageCheck /> Delivers in: 3-7 Working Days Shipping & Return
            </p>
          </div>
        </div>

        {/* right side contents */}

        <div className="">
          <div className="bg-orange-50 p-3 mb-5">
            <div className="border-b-2">
              <div className="flex gap-5 items-center mb-2">
                <p className="flex gap-1">
                  <MapPin /> Dhaka, Dhaka North, Banani Road No. 12 - 19
                </p>
                <button className="text-cyan-600">Change</button>
              </div>
              <div className="flex gap-5 justify-between items-center mb-2">
                <p className="flex gap-1 ">
                  <TruckIcon /> Standard Delivery 4 - 9 day&apos;s
                </p>
                <button className="text-cyan-600">$ {product?.price}</button>
              </div>
              <p className="flex gap-1 mb-1">
                <MapPin /> 7 Day Return
              </p>
            </div>
            <div className="my-2">
              <span className="text-sm">Change of mind applicable</span>
            </div>
            <div className="">
              <p className="flex gap-1">Warranty not available</p>
            </div>
          </div>

          <div className="bg-orange-50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <span>Sold by</span>
                <p>{product?.seller.name}</p>
              </div>
              <span>CHAT</span>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col justify-between items-center">
                <p className="border-2 p-1">Positive Seller Ratings</p>
                <p className="border-2 p-1 w-full h-full text-center">
                  New Seller
                </p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <p className="border-2 p-1">Ship on Time</p>
                <p className="border-2 p-1 w-full h-full text-center text-xl font-bold">
                  100%{" "}
                </p>
              </div>
              <div className="flex flex-col justify-betweens items-center">
                <p className="border-2 p-1">Chat Response Rate</p>
                <p className="border-2 p-1 w-full h-full text-center">
                  Not enough data{" "}
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>Email: {product?.seller.contactEmail}</p>
              </div>
              <button className="inline-block w-full py-2 mt-2 text-center bg-orange-500 text-white">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Specification & Details */}
      <div className="mb-10 sm:mb-20">
        <h4 className="font-semibold italic">Specification & Details</h4>
        <p className="mt-2 mb-5">{product?.description}</p>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Model:
          <span> {product?.name}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Brand:
          <span> {product?.brand}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Rating:
          <span> {product?.rating}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Processor:
          <span> {product?.specifications.processor}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Specifications: <span>{product?.specifications.ram}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Storage: <span>{product?.specifications.storage}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Battery: <span>{product?.specifications.battery}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Camera: <span>{product?.specifications.camera}</span>
        </div>
        <div className="border-t border-b py-2 flex gap-2 justify-between  pr-3 sm:pr-10">
          Display: <span>{product?.specifications.display}</span>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
