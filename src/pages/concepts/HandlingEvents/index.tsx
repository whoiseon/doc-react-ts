import '../../../styles/common.css';
import Header from "../../../components/Header";

export default function HandlingEvents() {
  return (
    <div>
      <Header title="이벤트 처리하기" mainText="handling-events" />
      <p className="p-sub-title">
        React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 <br />
        이벤트를 처리하는 방식과 매우 유사하다.
      </p>
      <div className="section">
        <div className="paragraph">
          <p>
            <i>camelCase를 사용한다.</i><br />
            <i>onClick</i>, <i>onSubmit</i> 등과 같이 DOM 엘리먼트에서 이벤트를 처리하는 방식에서 <br />
            camelCasefmf 활용하는 방식으로 이벤트를 처리할 수 있다.
          </p>
        </div>
      </div>
    </div>
  );
};