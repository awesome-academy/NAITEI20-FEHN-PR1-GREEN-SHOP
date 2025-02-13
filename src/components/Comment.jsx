import React, { useEffect, useState } from "react";
import { mockComments } from "../mock/mockComments";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showFormReply, setShowFormReply] = useState(null);
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    } else {
      localStorage.setItem("comments", JSON.stringify(mockComments));
      setComments(mockComments);
    }
  }, []);

  const handleReply = (id) => {
    setReplyTo(id);
    setShowFormReply(id);
  };

  const handleAddComment = (newComment) => {
    if (!newComment.name || !newComment.comment) return;

    const newCommentData = {
      id: comments.length + 1,
      name: newComment.name,
      avatar: "/images/avatar.png",
      comment: newComment.comment,
      date: new Date().toLocaleString("vi-VN"),
      parentId: replyTo,
    };

    let updatedComments = [];

    if (replyTo) {
      comments.forEach((c) => {
        updatedComments.push(c);
        if (c.id === replyTo) {
          updatedComments.push(newCommentData);
        }
      });
    } else {
      updatedComments = [newCommentData, ...comments];
    }

    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    setShowForm(false);
    setShowFormReply(null);
    setReplyTo(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-lg text-left font-bold text-gray-500 uppercase mb-4">
          Bình luận ({comments.length})
        </h2>

        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            handleReply={handleReply}
            showFormReply={showFormReply}
            handleAddComment={handleAddComment}
            setShowFormReply={setShowFormReply}
            replyTo={replyTo}
          />
        ))}

        {showForm && (
          <CommentForm
            onSubmit={handleAddComment}
            onCancel={() => setShowForm(false)}
            replyTo={null}
          />
        )}

        {!showForm && (
          <button
            onClick={() => {
              setReplyTo(null);
              setShowForm(true);
            }}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700"
          >
            Viết bình luận
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
