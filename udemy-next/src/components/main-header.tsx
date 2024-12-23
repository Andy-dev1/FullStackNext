import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={LogoImg.src} width="40px" alt="A plate with food on it" />
        NextLevel
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
