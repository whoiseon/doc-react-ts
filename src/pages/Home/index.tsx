import Header from "../../components/Header";
import './styles.css';

export default function Home() {
  return (
    <div>
      <Header title="시작하기" />
      <div className="home-section">
        <h2>이 페이지는
          <a href="https://ko.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
            React docs
          </a>
          의 자료를 복습하고 TS를 적용하려고 만든 페이지입니다.
        </h2>
        <div className="home-intro-writer">
          <i>작성자</i>
          <a href="https://github.com/whoiseon">
            https://github.com/whoiseon
          </a>
        </div>
      </div>
    </div>
  );
};