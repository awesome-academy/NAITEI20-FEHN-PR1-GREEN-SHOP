import React, { useState } from "react";

const CommentForm = ({ onSubmit, onCancel, replyTo }) => {
  const [newComment, setNewComment] = useState({ name: "", email: "", phone: "", comment: "" });

  const handleSubmit = () => {
    if (!newComment.name || !newComment.comment) return;
    onSubmit(newComment);
    setNewComment({ name: "", email: "", phone: "", comment: "" });
  };

  return (
    <div className="mt-6 p-4 w-full">
      <h3 className="text-left text-lg font-bold text-gray-600">{replyTo ? "Trả lời bình luận" : "Viết bình luận"}</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <input
          type="text"
          placeholder="Họ và tên :"
          className="w-full p-2 border border-gray-300"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email:"
          className="w-full p-2 border border-gray-300"
          value={newComment.email}
          onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone:"
          className="w-full p-2 border border-gray-300"
          value={newComment.phone}
          onChange={(e) => setNewComment({ ...newComment, phone: e.target.value })}
        />
      </div>
      <textarea
        placeholder="Bình luận"
        className="w-full h-30 p-3 border border-gray-300 mt-2"
        value={newComment.comment}
        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
      ></textarea>
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={onCancel}
          className="w-35 px-4 py-2 border border-gray-300 text-gray-500 rounded-2xl hover:bg-gray-200"
        >
          Hủy
        </button>
        <button
          onClick={handleSubmit}
          className="w-35 px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700"
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
