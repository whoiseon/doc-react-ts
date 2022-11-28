import './styles.css';

interface HeaderPropsType {
  title: string,
  mainText?: string,
}

export default function Header({ title, mainText }: HeaderPropsType) {
  return (
    <div className="header">
      <h1>{ title }</h1>
      <a href={`https://ko.reactjs.org/docs/${mainText}.html`} target="_blank" rel="noreferrer">
        본문 바로가기
      </a>
    </div>
  );
};