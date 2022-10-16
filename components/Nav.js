import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillMail,
  AiOutlineArrowLeft,
  AiOutlineUser,
  AiFillHome,
  AiFillSetting,
  AiFillHeart,
} from "react-icons/ai";
import { getTokenFromLocalCookie } from "../library/auth";

const Nav = () => {
  const router = useRouter();
  const jwt = getTokenFromLocalCookie();

  return (
    <div className="navbar text-neutral-content bg-neutral">
      <div className="w-full relative">
        <ul className="menu menu-vertical sm:menu-horizontal p-0 rounded-box w-full">
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
              <a className={router.pathname == "/" ? "active" : ""}>
                <span>
                  <AiFillHome />
                </span>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>
                <span>
                  <AiFillMail />
                </span>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favourites">
              <a className={router.pathname == "/favourites" ? "active" : ""}>
                <span>
                  <AiFillHeart />
                </span>
                Favourites
              </a>
            </Link>
          </li>
          <li className="sm:ml-auto sm:absolute sm:right-0">
            {!jwt ? (
              <Link href="/login">
                <a className={router.pathname == "/login" ? "active" : ""}>
                  <span>
                    <AiOutlineUser />
                  </span>
                  Login
                </a>
              </Link>
            ) : (
              <Link href="/admin">
                <a className={router.pathname == "/admin" ? "active" : ""}>
                  <span>
                    <AiFillSetting />
                  </span>
                  Admin
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
