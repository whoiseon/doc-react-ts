import '../../../styles/common.css';
import Header from "../../../components/Header";
import CodeSniper from "../../../components/CodeSniper";
import {useEffect, useState} from "react";

export default function RenderingElements() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return (() => clearInterval(id));
  }, []);

  return (
    <div>
      <Header title="엘리먼트 렌더링" mainText="rendering-elements" />
      <div className="section">
        <p className="p-sub-title">엘리먼트는 React 앱의 가장 작은 단위입니다.</p>
        <CodeSniper>
          <code>
            <p>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</p>
          </code>
        </CodeSniper>
        <div className="paragraph">
          <p>
            브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며. 쉽게 생설할 수 있다. <br />
            React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트한다.
          </p>
          <h2>변경된 부분만 업데이트</h2>
          <p>
            React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교를 하고 <br />
            DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.
          </p>
          <h2>시간으로 확인하는 예제</h2>
          <p>
            <i>현재 시간 { time }.</i> <br /> <br />
            본문에서는 root 를 조작하는 방식으로 했지만 나는 <i>useState</i>와 <i>useEffect</i>를 이용해서 구현했다.
            다른 점은 없다 단지 나는 영상이 아닌 현재 사이트에서 바로 보여주기 위함으로 root를 조작하기 곤란해서 hook을 이용해서 만들었다.
            개발자 도구를 이용해 확인하면 마찬가지로 React DOM은 이전 엘리먼트와 비교하여 달라지는 점이 있는 엘리먼트만 <br />
            리렌더링 되는 것을 확인할 수 있다.
          </p>
        </div>
      </div>
    </div>
  )
}