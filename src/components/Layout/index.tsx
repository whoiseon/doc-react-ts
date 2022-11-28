import React from 'react';
import './styles.css';
import DocsItem from "../DocsItem";

interface LayoutPropsTypes {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutPropsTypes) {
  return (
    <div className="layout-wrapper">
      <div className="container">
        <main className="content">
          { children }
        </main>
        <nav className="docs-list">
          <DocsItem title="주요 개념" />
          <DocsItem title="고급 안내서" />
          <DocsItem title="HOOK" />
          <DocsItem title="테스팅" />
        </nav>
      </div>
    </div>
  );
};