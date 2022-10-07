import Link from "next/link";

const Card = ({ post }) => {
  return (
    <Link href={`details/${post.id}`} passHref>
      <div className="card w-96 bg-base-200 shadow-xl m-2 cursor-pointer">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
