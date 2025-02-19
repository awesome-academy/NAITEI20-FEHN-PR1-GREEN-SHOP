import React, { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Xử lý gửi bình luận ở đây
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold text-gray-800 mb-10">
        VIẾT BÌNH LUẬN :
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Họ và tên:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nhập email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Bình luận:
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Nhập bình luận của bạn"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600"
        >
          GỬI
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
