"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  {
    label: "책",
    href: "https://www.hanbit.co.kr/academy/books/new_book_list.html",
  },
  {
    label: "교수전용공간",
    href: "https://www.hanbit.co.kr/academy/professor/index.html",
  },
  { label: "정보교과서", href: "https://www.hanbit.co.kr/textbook/" },
  {
    label: "교재 단체구매",
    href: "https://www.hanbit.co.kr/grouporder/order.html",
  },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand-logo"
          href="/"
          aria-label="한빛아카데미 메인으로 이동"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/hanbit-academy-logo-mono.png"
            alt="한빛아카데미"
            width={357}
            height={65}
            preload
          />
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
          <a
            className="hanbit-plus-link"
            href="https://www.hanbit.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            한빛+
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="모바일 주요 메뉴">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
            >
              <span className="menu-index">0{index + 1}</span>
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a
            className="mobile-hanbit-plus"
            href="https://www.hanbit.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
          >
            <span className="menu-index">05</span>
            <span>한빛+</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <p>기술과 사람을 연결하는 한빛 전체의 대표 홈페이지</p>
      </div>
    </header>
  );
}
