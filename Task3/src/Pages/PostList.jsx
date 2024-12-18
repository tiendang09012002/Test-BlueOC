import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../reduxSetup/reducer/action";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => {
    return state.Post;
  });
  console.log(posts);
  
  useEffect(() => {    
    dispatch(fetchPosts());
  }, [dispatch]);
  
  
  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p>Đã có lỗi xảy ra: {error}</p>;
  }

  return (
    <div className="col-lg-7 col-md-6 col-sm-12">
      <h1>Danh sách bài viết</h1>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
