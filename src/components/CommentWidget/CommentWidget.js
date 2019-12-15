import React, { useState, useEffect } from "react";
import "./CommentWidget.scss";
import { useParams } from "react-router";
import { getComments, addComment } from "../../helpers/comments";

function CommentWidget() {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setComments(getComments(id) || []);
  }, [id]);
  return (
    <div className="comment-widget">
      <div className="comment-widget__title">Comments</div>
      <div className="comment-widget__comments">
        {comments.map(({ text }, idx) => {
          return (
            <div key={idx} className="comment-widget__comment">
              <i>Anonymous:</i>
              <div>{text}</div>
            </div>
          );
        })}
      </div>
      <div>
        <textarea
          value={currentComment}
          onChange={e => {
            setCurrentComment(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            if (!currentComment) {
              return;
            }
            addComment(id, currentComment);
            setComments([
              ...comments,
              {
                id,
                text: currentComment
              }
            ]);
            setCurrentComment("");
          }}
        >
          Post comment
        </button>
      </div>
    </div>
  );
}

export default CommentWidget;
