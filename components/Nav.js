import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Nav = () => {
  const router = useRouter();
  // console.log(router);

  return (
    <div className="bg-neutral text-neutral-content flex justify-center">
      <div className="navbar flex-none max-w-2xl bg-neutral">
        <ul className="menu menu-horizontal p-0">
          {router.pathname == "/details/[id]" ? (
            <li>
              <a onClick={() => router.back()}>
                <AiOutlineArrowLeft />
              </a>
            </li>
          ) : (
            false
          )}
          <li>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className={router.pathname == "/login" ? "active" : ""}>
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
