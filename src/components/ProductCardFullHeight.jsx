import React from "react";
import { Star, Search } from "lucide-react";
import { HeartOutlined, SearchOutlined } from "@ant-design/icons";

const ProductCardFullHeight = ({ product }) => {
  return (
    <div
      className="w-full flex h-60 border-[1px] border-gray-200"
      onClick={() => console.log("Đã bấm vào:", product.name)}
    >
      <div className="flex-1">
        <img
          src={product.images[0]}
          alt="Main Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-3 px-10">
        <div className="flex flex-col space-y-4 text-left">
          <h5 className="text-2xl">{product.name}</h5>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => {
              const currentStar = i + 1;
              const rating = product.rating;

              return (
                <Star
                  key={i}
                  size={18}
                  fill={
                    rating >= currentStar
                      ? "currentColor"
                      : rating >= currentStar - 0.5
                      ? "url(#halfStar)"
                      : "none"
                  }
                  stroke="currentColor"
                />
              );
            })}

            <svg width="0" height="0">
              <defs>
                <linearGradient id="halfStar">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mô tả */}
          <p className="text-gray-700 text-left">{product.descriptions}</p>

          {/* Giá */}
          <div className="items-center ">
            <span className="text-red-500 text-2xl font-bold">
              {product.price} đ
            </span>
          </div>
        </div>

        <div className="pb-3 pt-6">
          <button className="bg-green-600 text-white font-bold rounded-3xl hover:bg-green-700 w-30 h-9">
            Mua Ngay
          </button>

          <button className="py-2 px-4 text-green-800 font-bold rounded-full hover:bg-green-300">
            <SearchOutlined />
          </button>
          <button className="py-2 px-4 text-green-800 font-bold rounded-full hover:bg-green-300">
            <HeartOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFullHeight;
