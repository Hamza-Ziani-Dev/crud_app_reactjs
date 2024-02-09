import React, { Fragment, useState } from "react";
import { addPost, deletePost, updatePost } from "../features/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
function Posts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  return (
    <Fragment>
      <div className="form">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Title"
          className="inputField"
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter Description"
          className="inputField"
        />
        <button
          onClick={() => {
            dispatch(addPost({ id: posts.length + 1, title, description }));
          }}
          className="SaveButton"
        >
          Save
        </button>
      </div>

      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button
                onClick={() => {
                  setEdit(true);
                  setId(post.id);
                }}
                className="updateButton"
              >
                Update
              </button>
              <button
                onClick={() => {
                  dispatch(deletePost({ id: post.id }));
                }}
                className="deleteButton"
              >
                Delete
              </button>
              <br />
              {edit && id === post.id && (
                <>
                  <input
                    type="text"
                    onChange={(e) => {
                      setUpdateTitle(e.target.value);
                    }}
                    placeholder="Enter Title"
                    className="inputField"
                  />
                  <input
                    type="text"
                    onChange={(e) => {
                      setUpdateDescription(e.target.value);
                    }}
                    placeholder="Enter Description"
                    className="inputField"
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        updatePost({
                          id: post.id,
                          title: updateTitle,
                          description: updateDescription,
                        })
                      );
                    }}
                    className="updateButton"
                  >
                    Update
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>There are no posts</p>
        )}
      </div>
    </Fragment>
  );
}

export default Posts;
