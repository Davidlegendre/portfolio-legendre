"use client";
import Image from "next/image";
import "./css/Header.class.css";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="container-header">
      <div className="header">
        <div className="header-head">
          <Image
            src="https://avatars.githubusercontent.com/u/23003800?v=4"
            width={48}
            height={48}
            alt="user"
          ></Image>
          <p className="animate-infast2 title-name">David Legendre</p>

          <Link
            href="https://api.whatsapp.com/send?phone=51914847720"
            target="_blank"
            className="whatsapp-contact"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=AltfLkFSP7XN&format=png&color=000000"
              width={22}
              height={22}
              alt="whatsapp"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
