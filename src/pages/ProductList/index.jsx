// src/components/Header.jsx
import React, { useState } from "react";
import { mockProducts } from "../../mock/mockProducts";
import { categories } from "../../mock/mockCategory";
import { colors } from "../../mock/mockColors";
import { priceRanges } from "../../mock/mockPrice";
import { sortBy } from "../../Utils/SortUtil";
import {
  RightOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import Slide1 from "../../assets/images/slide-banner1.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import ProductCardFullHeight from "../../components/ProductCardFullHeight";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState(mockProducts);
  const [itemsPerPage, setItemsPerPage] = useState(9); // 'grid' or 'list'

  const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const categoryProductCount = categories.map((category) => {
    const count = mockProducts.filter((product) =>
      product.categories.includes(category.id)
    ).length;
    return { ...category, count };
  });

  // SORT
  const [sortOption, setSortOption] = useState("name-asc");

  const onSortChange = (option) => {
    setSortOption(option);

    // Xác định key và thứ tự dựa vào option
    const [key, order] = option.split("-");
    const sortedProducts = sortBy(mockProducts, key, order);
    setDisplayedProducts(sortedProducts);
  };

  // TÌM THEO CATE
  const [filters, setFilters] = useState({
    category: null,
    color: null,
    price: null,
  });

  // Hàm xử lý bộ lọc
  const onFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);

    let filtered = mockProducts;

    // Lọc theo category nếu có
    if (newFilters.category) {
      filtered = filtered.filter((product) =>
        product.categories.includes(newFilters.category)
      );
    }

    // Lọc theo color nếu có
    if (newFilters.color) {
      filtered = filtered.filter((product) =>
        product.colors.includes(newFilters.color)
      );
    }

    // Lọc theo price nếu có
    if (newFilters.price) {
      const [min, max] = newFilters.price
        .split(" - ")
        .map((price) => Number(price.replace(/\./g, "").replace(" Đ", "")));
      filtered = filtered.filter((product) => {
        if (max) return product.price >= min && product.price <= max;
        return product.price >= min;
      });
    }

    setDisplayedProducts(filtered);
  };

  return (
    <>
      <div className="px-50 pt-10">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#666",
              fontWeight: 500,
            }}
          >
            Home
          </Link>
          <Typography
            color="primary"
            style={{
              fontWeight: 500,
              color: "#36B37E",
            }}
          >
            Danh sách sản phẩm
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="px-50 flex text-left pt-10">
        <div className="w-1/4">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Danh mục sản phẩm</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <ul className="space-y-2">
              {categoryProductCount.map((category, index) => (
                <li
                  key={category.id}
                  className={`flex items-center text-gray-700 hover:text-green-600 cursor-pointer ${
                    filters.category === category.id
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600`}
                  onClick={() => {
                    // Nếu category đã được chọn, click thêm lần nữa sẽ bỏ chọn
                    const newCategory =
                      filters.category === category.id ? null : category.id;
                    onFilterChange("category", newCategory);
                  }}
                >
                  <RightOutlined className="text-[10px] color-[#898989] pr-2" />
                  <span>{category.name}</span>
                  {category.count && (
                    <span className="text-gray">({category.count})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Tìm theo giá */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Tìm theo giá</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <ul className="space-y-2">
              {priceRanges.map((range, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex items-center ${
                    filters.price === range ? "text-green-600" : "text-gray-700"
                  } hover:text-green-600`}
                  onClick={() => {
                    const newPrice = filters.price === range ? null : range;
                    onFilterChange("price", newPrice);
                  }}
                >
                  <RightOutlined className="text-[10px] color-[#898989] pr-2" />
                  {range}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Tìm theo màu</h3>
            <div className="h-1 w-20 bg-green-500 mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, index) => (
                <div
                  key={color.id}
                  className={`flex items-center space-x-2 cursor-pointer ${
                    filters.color === color.id
                      ? "text-green-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    // Nếu màu đã được chọn, click thêm lần nữa sẽ bỏ chọn
                    const newColor =
                      filters.color === color.id ? null : color.id;
                    onFilterChange("color", newColor);
                  }}
                >
                  <div className={`w-6 h-6 rounded-full ${color.color}`}></div>
                  <span className="font-medium">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="w-full mb-6">
            <img src={Slide1} alt="banner" className="w-full h-30" />
          </div>
          <div className="flex items-center justify-between py-4">
            {/* Icons for view switching */}
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 ${itemsPerPage === 9 ? "bg-gray-200" : ""}`}
                onClick={() => setItemsPerPage(9)}
              >
                <AppstoreOutlined
                  style={{ fontSize: "24px", color: "green" }}
                />
              </button>
              <button
                className={`p-2 ${itemsPerPage === 9 ? "bg-gray-200" : ""}`}
                onClick={() => setItemsPerPage(5)}
              >
                <UnorderedListOutlined
                  style={{ fontSize: "24px", color: "gray" }}
                />
              </button>
            </div>

            {/* Dropdowns for sorting and showing */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">Sắp xếp theo</span>
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={sortOption}
                  onChange={(e) => onSortChange(e.target.value)}
                >
                  <option value="name-asc">Tên sản phẩm (A-Z)</option>
                  <option value="name-desc">Tên sản phẩm (Z-A)</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">Show</span>
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option>15</option>
                  <option>30</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            {/* Danh sách sản phẩm */}
            {displayedProducts.length === 0 ? (
              <p className="text-gray-700 text-center mt-10">
                Không có sản phẩm nào
              </p>
            ) : (
              <div
                className={`grid gap-6 ${
                  itemsPerPage === 9 ? "grid-cols-3" : "grid-cols-1"
                }`}
              >
                {displayedProducts
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((product, index) => (
                    <div
                      key={product.id}
                      className={`h-72 flex ${
                        itemsPerPage === 5
                          ? "flex-row items-center space-x-4"
                          : "flex-col"
                      }`}
                    >
                      {itemsPerPage === 5 ? (
                        <ProductCardFullHeight product={product} />
                      ) : (
                        <ProductCard product={product} />
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* Phân trang */}
            {displayedProducts.length > 0 && (
              <div className="flex items-center justify-end space-x-2 mt-6 pt-20 pb-20">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-30 hover:bg-gray-100"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Trang trước
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`px-4 py-2 border rounded-30 ${
                      currentPage === index + 1
                        ? "bg-teal-500 text-white border-teal-500"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => goToPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="px-4 py-2 border border-gray-300 rounded-30 hover:bg-gray-100"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Trang cuối
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
