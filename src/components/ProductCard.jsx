import React from "react";
import { Star, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const handleBuyNow = (e) => {
    e.stopPropagation();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Sản phẩm đã thêm vào giỏ hàng:", product.name);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="h-full border border-gray-200 p-0 bg-white transition cursor-pointer relative overflow-hidden"
      onClick={() => console.log("Đã bấm vào:", product.name)}
    >
      {product.isNew || product.discount > 0 ? (
        <div className="absolute top-2 left-2 w-12 h-12 flex justify-center items-center rounded-full text-white font-semibold text-sm z-10">
          {product.isNew ? (
            <div className="bg-green-500 w-full h-full flex justify-center items-center rounded-full bg-opacity-90">
              New
            </div>
          ) : (
            <div className="bg-red-500 w-full h-full flex justify-center items-center rounded-full bg-opacity-90">
              -{product.discount}%
            </div>
          )}
        </div>
      ) : null}

      <div className="relative group">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full aspect-[4.5/3] object-cover border-b border-gray-200 rounded-t-none transition duration-300 group-hover:blur-sm"
        />

        <div className="absolute inset-0 bg-opacity-40 hidden group-hover:flex items-center justify-center gap-3 z-10">
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-xl text-sm hover:bg-green-600 transition"
            onClick={handleBuyNow}
          >
            MUA NGAY
          </button>

          <div
            className="bg-white w-8 h-8 rounded-full flex justify-center items-center shadow-md cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Tìm kiếm:", product.name);
            }}
          >
            <Search size={16} className="text-gray-700" />
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-6 text-center">{product.name}</h2>

      <div className="flex justify-center items-center mt-1 text-yellow-400">
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

      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="text-red-500 font-bold text-xl">
          {product.price.toLocaleString("vi-VN")}₫
        </span>
        <span className="text-gray-400 line-through text-sm">
          {product.oldPrice.toLocaleString("vi-VN")}₫
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
