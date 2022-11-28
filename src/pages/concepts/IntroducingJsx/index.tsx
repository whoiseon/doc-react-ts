import '../../../styles/common.css';
import Header from "../../../components/Header";
import CodeSniper from "../../../components/CodeSniper";

export default function IntroducingJsx() {
  return (
    <div>
      <Header title="JSX 소개" mainText="introducing-jsx" />
      <div className="section">
        <p className="p-sub-title">아래 변수 선언을 살펴보자.</p>
        <CodeSniper>
          <code>
            <p>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;</p>
          </code>
        </CodeSniper>
        <div className="paragraph">
          <p>
            위 변수에 담긴 태그는 문자열도 HTML 태그도 아니다 <i>JSX</i>라고 하는 <i>JavaScript를 위한 확장 문법</i>이다. <br />
            UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장한다고 적혀있다. <br />
            그렇다고 템플릿 언어라고 생각할 순 없다. 왜냐하면 Javascript의 모든 기능이 포함되어 있기 때문이다. <br />
          </p>
          <h2>JSX 란?</h2>
          <p>
            React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)
            과 연결된다는 사실을 받아들입니다.
          </p>
          <p>
            React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는
            "컴포넌트"라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리합니다. 이후 섹션에서 다시 컴포넌트로 돌아오겠지만,
            JS에 마크업을 넣는 게 익숙해질 필요가 있습니다.
          </p>
          <p>
            React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로
            더 도움이 된다고 생각합니다.<br /> 또한 <i>React가 더욱 도움이 되는 에러 및 경고 메시지를 표시</i>할 수 있게 해줍니다.
          </p>
          <h2>JSX에 표현식 포함하기</h2>
          <p>아래 예시에서는 nmae이라는 변수를 선언한 후 중괄호로 감싸 JSX 안에 사용하였다.</p>
          <CodeSniper>
            <code>
              <p>const name = 'Mucbo'</p>
              <p>const element = &lt;h1&gt;Hello, &#123;name&#125;&lt;/h1&gt;</p>
            </code>
          </CodeSniper>
          <p>
            JSX의 중괄호 안에는 유효한 모든 <i>Javascript 표현식</i>을 넣을 수 있다. <br />
            예를 들어 <i>2 + 2</i>, <i>user.firstName</i>, <i>formatName(user)</i> 등은 모두 유효한 <i>Javascript 표현식</i>이다.
          </p>
        </div>
      </div>
    </div>
  )
}