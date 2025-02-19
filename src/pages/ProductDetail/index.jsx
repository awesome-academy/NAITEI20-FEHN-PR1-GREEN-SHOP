import { useState } from "react";
import ProductImage from "../../components/ProductImage";
import QuantitySelector from "../../components/QuantitySelector";
import { HeartOutlined, SearchOutlined } from "@ant-design/icons";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Tabs } from "antd";

const onProductDetailTabsChange = (key) => {
  console.log(key);
};

const ProductDetail = () => {
  const product = {
    name: "Cây Dạ Lam",
    price: "4.099.000",
    oldPrice: "4.999.000",
    description:
      "Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ...",
    images: [
      "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
    ],
  };

  const items = [
    {
      key: "1",
      label: "Thông tin sản phẩm",
      children: (
        <div className="text-left">
          <h3>Chi tiết sản phẩm</h3>
          <p>Thông tin chi tiết về sản phẩm này.</p>
        </div>
      ),
    },
    {
      key: "2",
      label: "Khách hàng đánh giá",
      children: (
        <div className="text-left">
          <h4>Tên phổ thông:</h4>
          <p>Dạ lam, Huỳnh tinh cánh, Dòng vân.</p>

          <h4>Tên khoa học:</h4>
          <p>Calathea zebrina</p>

          <h4>Họ thực vật:</h4>
          <p>Marantaceae (Củ dong).</p>

          <h4>Chiều cao:</h4>
          <p>0,8-1,2m</p>

          <h4>Xuất xứ:</h4>
          <p>
            Cây dạ lam có nguồn gốc từ Brazil, được du nhập và phân bố rộng khắp
            ở Việt Nam.
          </p>

          <h4>Mô tả chi tiết:</h4>
          <p>
            Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình
            từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gần lá nổi rõ, phiến rộng
            khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có
            màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách,
            cuống lá dài khi rụng để lại các khía màu nâu nhạt.
          </p>
          <p>
            Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu
            nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe,
            tốc độ sinh trưởng nhanh với sức sống mạnh. Đây là loại cây có dáng
            đẹp, màu lá mướt mát, tươi khỏe, cây rất phù hợp trồng chậu trang
            trí nội thất-văn phòng.
          </p>
          <p>
            Ngoài ra, cây còn có đặc điểm lọc khí, làm xanh mắt môi trường, giúp
            điều hòa không khí, đặc biệt tốt cho những môi trường thường xuyên
            sử dụng các loại máy móc tăng nhiệt. Có thể bày cây ở hành lang hay
            ở giữa sảnh, đặt ở cạnh bàn làm việc hoặc trang trí các góc phòng có
            diện tích trung bình.
          </p>
        </div>
      ),
    },
    {
      key: "3",
      label: "Thẻ tag",
      children: (
        <div className="text-left">
          <h3>Chi tiết sản phẩm</h3>
          <p>Thông tin chi tiết về sản phẩm này.</p>
        </div>
      ),
    },
  ];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

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
            Trang chủ
          </Link>
          <Typography
            color="primary"
            style={{
              fontWeight: 500,
              color: "#36B37E",
            }}
          >
            Cây dạ lam
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="pt-10 px-50 flex space-x-8">
        <ProductImage
          images={product.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <div className="flex-1">
          <div className="space-y-4 text-left">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-red-500 text-2xl font-bold">
                {product.price} đ
              </span>
              <span className="text-gray-400 line-through">
                {product.oldPrice} đ
              </span>
            </div>
          </div>
          <div className="h-0.5 w-full bg-gray-100 mb-7 mt-7"></div>
          <p className="text-gray-700 text-left">{product.description}</p>
          <div className="h-0.5 w-full bg-gray-100 mb-7 mt-7"></div>
          <QuantitySelector />
          <div className="h-0.5 w-full bg-gray-100 mb-7 mt-7"></div>
          <div className="flex space-x-4">
            <button className="w-1/5 py-2 px-4 bg-green-200 text-green-800 font-bold rounded-full hover:bg-green-300">
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
      <div className="px-50 pt-10 pb-50 ">
        <div className="px-5 border h-120">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onProductDetailTabsChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
