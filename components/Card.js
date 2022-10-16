import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Card = ({ post }) => {
  const handleClick = () => {
    localStorage.setItem("card" + post.id, post.id);
  };

  return (
    <div className="card w-96 bg-base-200 shadow-xl m-2 p-4 cursor-pointer">
      <Link key={post.id} href={`details/${post.id}`} passHref>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </Link>
      <button
        onClick={handleClick}
        className="btn btn-circle btn-ghost ml-auto text-lg"
      >
        <AiOutlineHeart />
      </button>
    </div>
  );
};

export default Card;
