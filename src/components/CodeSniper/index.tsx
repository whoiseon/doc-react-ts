import './styles.css';

interface CodeSniperPropsType {
  children: JSX.Element | string;
}

export default function CodeSniper({ children }: CodeSniperPropsType) {
  return (
    <div className="code-sniper-wrapper">
      { children }
    </div>
  );
};
