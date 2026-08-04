import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

const channels = [
  {
    number: "01",
    title: "책",
    description: "전공의 기초부터 최신 기술까지, 배움의 깊이를 더하는 대학교재",
    href: "https://www.hanbit.co.kr/academy/books/new_book_list.html",
  },
  {
    number: "02",
    title: "교수전용공간",
    description: "견본도서 신청과 강의자료를 위한 교수님 전용 지원 공간",
    href: "https://www.hanbit.co.kr/academy/professor/index.html",
  },
  {
    number: "03",
    title: "정보교과서",
    description: "IT 전문 출판사의 노하우로 만든 중등 정보 교과서",
    href: "https://www.hanbit.co.kr/textbook/",
  },
  {
    number: "04",
    title: "교재 단체구매",
    description: "학교와 기관을 위한 편리한 교재 단체구매 안내",
    href: "https://www.hanbit.co.kr/grouporder/order.html",
  },
];

const principles = [
  {
    number: "01",
    title: "현장의 지식을 담습니다",
    description:
      "국내 우수 저자들의 최신 이론과 교육 현장의 노하우를 한 권의 교재에 정교하게 담습니다.",
  },
  {
    number: "02",
    title: "검증된 지식을 연결합니다",
    description:
      "세계적으로 검증된 양질의 원서를 바탕으로 국내 교육 환경에 맞는 깊이 있는 번역서를 만듭니다.",
  },
  {
    number: "03",
    title: "배움의 내일을 준비합니다",
    description:
      "공간과 형식의 한계를 넘어 가르침과 배움을 필요로 하는 모든 사람의 성장 공간이 됩니다.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">HANBIT ACADEMY · UNIVERSITY PUBLISHING</p>
            <h1 id="hero-title">
              <span className="hero-title-line">더 나은 가르침과 배움,</span>
              <span className="hero-title-line hero-title-line-accent">
                내일을 준비하는 교재.
              </span>
            </h1>
            <p className="hero-description">
              기술의 변화를 읽고 교육의 본질을 지키며, 교수자의 깊이 있는
              가르침과 학습자의 새로운 가능성을 연결합니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#brand-story">
                브랜드 이야기
                <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href="https://www.hanbit.co.kr/academy/professor/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                교수전용공간
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/hero-campus.jpg"
              alt="교수와 학생들이 노트북을 활용해 수업하는 대학 강의실"
              fill
              sizes="(max-width: 900px) 100vw, 54vw"
              priority
              className="cover-image"
            />
            <div className="hero-shade" />
            <div className="hero-caption">
              <span>TEACHING × LEARNING</span>
              <strong>SINCE 2003</strong>
            </div>
          </div>

          <a className="scroll-cue" href="#brand-story" aria-label="다음 내용 보기">
            <span>SCROLL</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="brand-story section-shell" id="brand-story">
          <div className="section-label reveal">
            <span>01</span>
            <p>ABOUT HANBIT ACADEMY</p>
          </div>
          <div className="brand-statement reveal">
            <h2>
              가르침의 말과
              <br />
              배움의 글이 만나는 곳.
            </h2>
            <div className="brand-copy">
              <p>
                한빛아카데미는 한빛+의 대학교재 출판 부문을 담당하는
                브랜드입니다. 2003년 컴퓨터공학 분야의 대학교재를 시작으로
                지금은 전기, 전자, 기계, 수학, 통계 등 다양한 이공계 분야의
                대학교재를 출판하고 있습니다.
              </p>
              <p>
                독자에게는 정확하고 깊이 있는 배움을, 교수자에게는 더 나은
                가르침을 위한 든든한 기반을 제공하며 대학교재 종합 출판사로
                성장해 왔습니다.
              </p>
            </div>
          </div>

          <div className="story-media reveal">
            <div className="story-image">
              <Image
                src="/images/campus-collaboration.jpg"
                alt="대학 캠퍼스에서 함께 프로젝트를 진행하는 학생들"
                fill
                sizes="(max-width: 800px) 100vw, 68vw"
                className="cover-image"
              />
            </div>
            <div className="story-note">
              <span>OUR ROLE</span>
              <p>
                지식을 전달하는 책을 넘어,
                <br />
                함께 성장하는 교육의 기반을 만듭니다.
              </p>
            </div>
          </div>
        </section>

        <section className="journey">
          <div className="journey-inner section-shell">
            <div className="section-label light reveal">
              <span>02</span>
              <p>OUR JOURNEY</p>
            </div>

            <div className="journey-heading reveal">
              <p className="journey-kicker">기술 교육의 변화와 함께</p>
              <h2>
                출판의 지평을
                <br />
                넓혀왔습니다.
              </h2>
            </div>

            <div className="journey-grid">
              <div className="timeline reveal">
                <article>
                  <strong>2003</strong>
                  <div>
                    <h3>컴퓨터공학에서 시작</h3>
                    <p>
                      빠르게 변화하는 IT 기술을 대학 교육 현장에 정확하게
                      전달하는 대학교재 출판을 시작했습니다.
                    </p>
                  </div>
                </article>
                <article>
                  <strong>EXPAND</strong>
                  <div>
                    <h3>이공계 전 분야로 확장</h3>
                    <p>
                      전기·전자·기계·수학·통계까지 분야를 넓히며 전공 교육의
                      탄탄한 기반을 만들어왔습니다.
                    </p>
                  </div>
                </article>
                <article>
                  <strong>2021</strong>
                  <div>
                    <h3>경제경영 분야로 도약</h3>
                    <p>
                      48년 전통의 무역경영사를 인수하며 더 폭넓은 지식과
                      배움을 연결하는 종합 출판사로 성장했습니다.
                    </p>
                  </div>
                </article>
              </div>

              <div className="journey-image reveal">
                <Image
                  src="/images/science-lab.jpg"
                  alt="실험 장비를 활용해 함께 연구하는 대학생들"
                  fill
                  sizes="(max-width: 900px) 100vw, 46vw"
                  className="cover-image"
                />
                <div className="image-index" aria-hidden="true">
                  <span>SCIENCE</span>
                  <span>ENGINEERING</span>
                  <span>TECHNOLOGY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="principles section-shell">
          <div className="section-label reveal">
            <span>03</span>
            <p>EDITORIAL PRINCIPLES</p>
          </div>
          <div className="principles-heading reveal">
            <p>한빛아카데미의 출판 철학</p>
            <h2>
              좋은 교재는 지식을 넘어
              <br />
              사람의 성장을 설계합니다.
            </h2>
          </div>

          <div className="principle-list">
            {principles.map((principle) => (
              <article key={principle.number} className="principle-item reveal">
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vision-band" aria-label="한빛아카데미 비전">
          <div className="vision-image">
            <Image
              src="/images/modern-library.jpg"
              alt="현대적인 대학 도서관에서 공부하는 학생들"
              fill
              sizes="100vw"
              className="cover-image"
            />
            <div className="vision-overlay" />
          </div>
          <div className="vision-copy reveal">
            <p>KNOWLEDGE FOR TOMORROW</p>
            <blockquote>
              공간과 틀의 한계를 넘어,
              <br />
              모두의 성장 공간으로.
            </blockquote>
            <span>
              가르침과 배움을 필요로 하는 다양한 사람들의 내일을 함께
              준비하겠습니다.
            </span>
          </div>
        </section>

        <section className="channels section-shell">
          <div className="section-label reveal">
            <span>04</span>
            <p>EXPLORE HANBIT ACADEMY</p>
          </div>
          <div className="channels-heading reveal">
            <h2>필요한 공간으로 이어집니다.</h2>
            <p>책과 수업, 교과서와 구매까지 한빛아카데미의 주요 서비스를 만나보세요.</p>
          </div>

          <div className="channel-grid">
            {channels.map((channel) => (
              <a
                key={channel.number}
                className="channel-card reveal"
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channel-number">{channel.number}</span>
                <div>
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                </div>
                <span className="channel-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <a
            className="hanbit-plus-card reveal"
            href="https://www.hanbit.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span>HANBIT+</span>
              <h3>AI 시대, 기술과 사람을 연결합니다.</h3>
            </div>
            <p>한빛 전체의 책과 교육 콘텐츠를 만나는 대표 홈페이지</p>
            <span className="plus-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <div className="footer-brand">
            <Image
              src="/images/hanbit-academy-logo.png"
              alt="한빛아카데미"
              width={260}
              height={44}
            />
            <p>더 나은 가르침과 배움, 내일을 준비하는 교재</p>
          </div>
          <div className="footer-info">
            <p>한빛아카데미㈜</p>
            <p>(03785) 서울 서대문구 연희로2길 62 2층</p>
            <p>TEL 02-336-7112 · FAX 02-336-7199</p>
            <p>대표이사 전태호 · 사업자등록번호 105-87-81648</p>
          </div>
          <div className="footer-links">
            <a href="https://cs.hanbit.co.kr/">고객센터</a>
            <a href="https://www.hanbit.co.kr/member/privacy_policy.html">
              개인정보처리방침
            </a>
            <a href="https://www.hanbit.co.kr/">한빛+</a>
          </div>
          <p className="copyright">© 2026 Hanbit Academy Inc.</p>
        </div>
      </footer>
    </>
  );
}
