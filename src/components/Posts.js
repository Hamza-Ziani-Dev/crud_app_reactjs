import React, { useState } from "react";
import { addPost, deletePost, updatePost } from "../features/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import { Button, Center, Input, Stack } from "@chakra-ui/react";
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
    <Center>
      <div className="form">
        <Stack spacing={3}>
          <Input
            focusBorderColor="pink.400"
            placeholder="Enter Title ..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            focusBorderColor="pink.400"
            placeholder="Enter Description ...."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Stack>
        <Button
          colorScheme="green"
          onClick={() => {
            dispatch(addPost({ id: posts.length + 1, title, description }));
          }}
        >
          Add Task
        </Button>
        <div className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Button
                  colorScheme="linkedin"
                  onClick={() => {
                    setEdit(true);
                    setId(post.id);
                  }}
                >
                  Update Task
                </Button>
                <Button
                  colorScheme="orange"
                  onClick={() => {
                    dispatch(deletePost({ id: post.id }));
                  }}
                >
                  Delete Task
                </Button>
                <br />
                {edit && id === post.id && (
                  <>
                    <Stack spacing={3}>
                      <Input
                        focusBorderColor="pink.400"
                        placeholder="Enter Title ..."
                        onChange={(e) => {
                          setUpdateTitle(e.target.value);
                        }}
                      />
                      <Input
                        focusBorderColor="pink.400"
                        placeholder="Enter Description ...."
                        onChange={(e) => {
                          setUpdateDescription(e.target.value);
                        }}
                      />
                    </Stack>

                    <Button
                      colorScheme="messenger"
                      onClick={() => {
                        dispatch(
                          updatePost({
                            id: post.id,
                            title: updateTitle,
                            description: updateDescription,
                          })
                        );
                      }}
                    >
                      Update Task
                    </Button>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>There are no posts</p>
          )}
        </div>
      </div>
    </Center>
  );
}

export default Posts;
