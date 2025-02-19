import React from "react";

const Reply = ({ name, avatar, content, date }) => (
  <div className="flex border-t border-gray-200 py-4 pl-12">
    <img
      src={avatar}
      alt={name}
      className="w-10 h-10 rounded-full mr-4 object-cover"
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <h4 className="font-bold text-gray-800">{name}</h4>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          Trả lời
        </a>
      </div>
      <p className="text-gray-700 text-sm mb-2">{content}</p>
      <span className="text-gray-500 text-xs">{date}</span>
    </div>
  </div>
);

const Comment = ({ name, avatar, content, date, replies }) => (
  <div className="flex border-b border-gray-200 py-4">
    <img
      src={avatar}
      alt={name}
      className="w-12 h-12 rounded-full mr-4 object-cover"
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          Trả lời
        </a>
      </div>
      <p className="text-gray-700 text-sm mb-2">{content}</p>
      <span className="text-gray-500 text-xs">{date}</span>

      {/* Hiển thị replies nếu có */}
      {replies && replies.length > 0 && (
        <div className="mt-4">
          {replies.map((reply, index) => (
            <Reply key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  </div>
);

const CommentList = () => {
  const comments = [
    {
      name: "Nguyễn Văn An",
      avatar:
        "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      content:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.",
      date: "Thứ 7, 26/12/2015 12:00 AM",
      replies: [
        {
          name: "Nguyễn Văn Bình",
          avatar:
            "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
          content:
            "Reply to Nguyễn Văn An. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
          date: "Thứ 7, 26/12/2015 12:30 AM",
        },
      ],
    },
    {
      name: "Nguyễn Văn Chiến",
      avatar:
        "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
      content:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
      date: "Thứ 7, 26/12/2015 1:00 AM",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">BÌNH LUẬN (3)</h2>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentList;
