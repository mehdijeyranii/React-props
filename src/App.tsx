import { useState } from "react";

interface Post {
  title: string;
  content: string;
  author: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<Post>({
    title: "My first Post",
    content: "This is a simple content",
    author: "Ali",
  });

  const changeTitle = () => {
    setPost((prevPost) => ({
      ...prevPost,
      title: "Updated Post Title",
    }));
  };

  const changeContent = () => {
    setPost((prevPost) => ({
      ...prevPost,
      content: "This is the new content for the post.",
    }));
  };

  const changeAuthor = (newAuthor: string) => {
    setPost((prevPost) => ({
      ...prevPost,
      author: newAuthor,
    }));
  };

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      <p>Author: {post.author}</p>
      <hr />
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={changeContent}>Change Content</button>
      <button onClick={() => changeAuthor("Mehdi")}>
        Change Author to Mehdi
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BlogPost />
    </div>
  );
};

export default App;
