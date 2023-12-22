import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const uid = userId.current.value;
    const Title = postTitle.current.value;
    const Body = postBody.current.value;
    const Reactions = postReactions.current.value;
    const Tags = postTags.current.value.split(" ");
    addPost(uid, Title, Body, Reactions, Tags);
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = "";
    navigate("/");
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          UserId
        </label>
        <input
          type="text"
          className="form-control"
          ref={userId}
          id="UserId"
          placeholder="Your user Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitle}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postBody}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={postReactions}
          id="reactions"
          placeholder="How many reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={postTags}
          id="tags"
          placeholder="Tell your hashtags with spaces"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreatePost;
