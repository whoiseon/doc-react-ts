import '../../../styles/common.css';
import Header from "../../../components/Header";
import CodeSniper from "../../../components/CodeSniper";

export default function HelloWorld() {
  return (
    <div>
      <Header title="Hello World" mainText="hello-world" />
      <div className="section">
        <p className="p-sub-title">가장 단순한 React 예시는 다음과 같이 생겼습니다.</p>
        <CodeSniper>
          <code>
            <p>const root = ReactDOM.createRoot(document.getElementById('root');</p>
            <p>root.render(&lt;h1&gt;Hello, world!&lt;/h1&gt;);</p>
          </code>
        </CodeSniper>
        <p>위 코드는 페이지에 "Hello, world"라는 제목을 보여준다.</p>
      </div>
    </div>
  );
};