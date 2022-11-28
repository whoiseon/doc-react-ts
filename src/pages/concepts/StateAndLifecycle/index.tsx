import '../../../styles/common.css';
import Header from "../../../components/Header";

export default function StateAndLifecycle() {
  return (
    <div>
      <Header title="State와 생명주기" mainText="state-and-lifecycle" />
      <div className="section">
        <div className="paragraph">
          <h2>State를 올바르게 사용하기</h2>
          <p>
            <i>직접 State를 수정하지 않는다.</i><br />
            setState를 사용하지 않고 직접 수정한다면 그 코드는 컴포넌트를 리렌더링 하지 않는다.
          </p>
          <p>
            <i>State 업데이트는 비동기적일 수도 있다.</i><br />
            React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있다. <br />
            함수형 setState를 사용하면 이전 state값과 업데이트가 적용된 시점의 state를 조작할 수 있다.
          </p>
          <p>
            <i>데이터는 아래로 흐른다 ( 단방향 )</i><br />
            컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다. <br />
            하지만 반대로 자식 컴포넌트가 부모 컴포넌트에 전달 할 수는 없다. 이를 가능하게 하려면 <br />
            <i>Redux</i>, <i>Recoil</i>과 같은 라이브러리를 활용해야 한다.
          </p>
        </div>
      </div>
    </div>
  );
};