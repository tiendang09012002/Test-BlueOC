import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reduxSetup/reducer/action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.Post);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && body) {
      const newPost = { title, body, userId: 1 };
      dispatch(addPost(newPost));
      setTitle("");
      setBody("");
    }
  };
  return (
    <>
      <div className="col-lg-5 col-md-6 col-sm-12">
        <h1 >Thêm Mới Bài viết</h1>
        {loading && <p>Đang thêm bài viết...</p>}
        {error && <p style={{ color: "red" }}>Có lỗi xảy ra: {error}</p>}{" "}
        <form className="post-form">
          <div className="form-group">
            <label htmlFor="title">Tiêu đề bài viết:</label>
            <input
              type="text"
              id="title"
              value={title}
              className="form-control"
              placeholder="Nhập tiêu đề..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Nội dung bài viết:</label>
            <textarea
              id="body"
              value={body}
              className="form-control"
              placeholder="Nhập nội dung..."
              rows="5"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleAddPost}
            className="btn btn-primary"
          >
            Thêm bài viết
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
