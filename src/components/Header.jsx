// src/components/Header.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaTumblr,
  FaVimeoV,
  FaUser,
  FaUserPlus,
  FaShoppingBasket,
  FaBars,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import HeaderImage from "../assets/images/bg-header.png";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { mockProducts } from "../mock/mockProducts";
// Chuyển danh sách sản phẩm thành menu items
const items = mockProducts.map((product) => ({
  label: (
    <Link to={`/product/${product.id}`} key={product.id}>
      {product.name}
    </Link>
  ),
  key: product.id,
}));

// // Tạo danh sách sản phẩm mới
// const itemsNew = mockProducts
//   .filter((product) => product.isNew)
//   .map((product) => ({
//     label: (
//       <Link to={`/product/${product.id}`} key={product.id}>
//         {product.name}
//       </Link>
//     ),
//     key: product.id,
//   }));

const Header = () => {
  return (
    <header className="bg-white shadow-md text-left ">
      <div className="px-50 flex justify-between items-center bg-black text-white text-sm py-2">
        <div className="flex flex-row items-center justify-between text-[13px]">
          <div className="flex  items-center justify-center gap-2 md:block">
            <span>Open time: 8:00 - 18:00 Monday - Sunday</span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center hover:bg-blue-600 hover:text-white">
            <FaFacebookF />
          </div>
          <div className="flex h-8 w-8 items-center justify-center hover:bg-blue-400 hover:text-white">
            <FaTwitter />
          </div>
          <div className="flex h-8 w-8 items-center justify-center hover:bg-tumblr hover:text-white">
            <FaTumblr />
          </div>
          <div className="flex h-8 w-8 items-center justify-center hover:bg-vimeo hover:text-white">
            <FaVimeoV />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex items-center justify-center gap-1 hover:text-green-500">
            <FaUser />
            <span>Đăng nhập</span>
          </div>
          <div className="flex items-center justify-center gap-1 hover:text-green-500">
            <FaUserPlus />
            <span>Đăng kí</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        style={{ backgroundImage: `url(${HeaderImage})` }}
        className="px-50 flex justify-between items-center bg-black text-white text-sm py-2"
      >
        <div className="flex basis-full flex-row items-center md:p-0">
          <div className="flex w-full flex-row items-center ">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className=" w-2/5 px-20">
          <div className="mb-1 text-center flex text-black">
            <FaPhoneAlt className="mt-1 mr-2 ml-1" />
            <span>Hỗ trợ</span>:
            <div className="hover:text-green-500">(04) 6674 2332</div>
            <span> - </span>
            <div className="hover:text-green-500">(04) 3786 8904</div>
          </div>
          <div className="w-[400px] flex relative text-black">
            <input
              type="text"
              name="search"
              data-placeholder="search"
              className="w-full h-10 px-5 border border-solid border-grey-300 rounded-l-[50px] focus:outline-none"
            />
            <button
              type="submit"
              className="w-10 h-10 bg-white rounded-r-[50px] flex items-center justify-center border border-solid border-border"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end mt-5 min-w-[20%]">
          <div className="group relative flex flex-row items-center">
            <div className="flex items-center justify-center gap-1 hover:text-green-500 text-black">
              <FaShoppingBasket className="text-[15px]" />0<span>Sản phẩm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#009f5f] text-white px-50">
        <div className="container max-w-[1140px] mx-auto">
          <nav className="flex flex-row items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex gap-20">
                <li className="py-[13px]">
                  <FaBars size={25} />
                </li>
                <li className="bg-active py-[13px]">
                  <div className="hover:text-white">
                    <Link to="/" className="text-white">
                      TRANG CHỦ
                    </Link>
                  </div>
                </li>
                <li className="py-[13px] hover:bg-active hover:text-white">
                  <div>
                    <Link to="/" className="text-white">
                      GIỚI THIỆU
                    </Link>
                  </div>
                </li>
                <li className="group relative py-[13px] hover:bg-active hover:text-white">
                  <Dropdown
                    menu={{
                      items,
                    }}
                    className="text-white"
                  >
                    <Link to="/products">
                      <Space style={{ fontWeight: "normal" }}>
                        SẢN PHẨM
                        <DownOutlined />
                      </Space>
                    </Link>
                  </Dropdown>
                </li>
                <li className="group relative py-[13px] hover:bg-active hover:text-white">
                  <div>
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <Link to="/products">
                        <Space style={{ fontWeight: "normal" }}>
                          SẢN PHẨM MỚI
                          <DownOutlined />
                        </Space>
                      </Link>
                    </Dropdown>
                  </div>
                </li>
                <li className="group relative py-[13px] hover:bg-active hover:text-white">
                  <div>
                    <Link to="/news" className="text-white">
                      TIN TỨC
                    </Link>
                  </div>
                </li>
                <li className="group relative py-[13px] hover:bg-active hover:text-white">
                  <div>
                    <Link to="/" className="text-white">
                      LIÊN HỆ
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
