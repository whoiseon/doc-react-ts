import Header from "../../../components/Header";

export default function ComponentsAndProps() {
  return (
    <div>
      <Header title="Components와 Props" mainText="components-and-props" />
      <div className="section">
        <p className="p-sub-title">
          컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 살펴볼 수 있습니다.
          이 페이지에서는 컴포넌트의 개념을 소개한다.
        </p>
        <p>
          개념적으로 컴포넌트는 JavasScript 함수와 유사하다. Props라는 임의의 인자를 입력받는 함수이다.
        </p>
        <div className="paragraph">
          <h2>함수 컴포넌트와 클래스 컴포넌트</h2>
          <p>
            컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것이다.
          </p>
          <p>
            <i>함수 컴포넌트</i>는 데이터를 가진 하나의 "props" 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트입니다. <br />
            이러한 컴포넌트는 JavaScript 함수이기 때문에 말 그대로 "함수 컴포넌트"라고 한다.
          </p>
          <p>
            또한 <i>ES6 class</i>문법을 사용하여 컴포넌트를 정의할 수 있다.
          </p>
          <p>
            React의 관점에서 볼 때 <i>함수 컴포넌트</i>와 <i>class 컴포넌트</i>는 동일하다.
          </p>
        </div>
      </div>
    </div>
  )
}