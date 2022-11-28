import React from 'react';
import './styles.css';
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {docsAdvanced, docsHooks, docsKeyConcept, docsTesting} from "../../data/docs";
import { ReactComponent as ArrowImg } from '../../assets/arrow_img.svg';

interface DocsItemPropsType {
  title: string
}

export default function DocsItem({ title }: DocsItemPropsType) {
  const location = useLocation();
  const [docs, setDocs] = useState<boolean>(false);

  const active: React.CSSProperties = {
    color: '#FFF',
    fontWeight: 'bold',
  }

  const getDocsList = (title: string) => {
    switch (title) {
      case "주요 개념":
        return (
          <>
            {
              docsKeyConcept.map((doc, idx) => {
                return (
                  <li key={doc.title} style={location.pathname === doc.path ? active: {}}>
                    <Link to={doc.path}>
                      {doc.title}
                    </Link>
                  </li>
                )
              })
            }
          </>
        )
      case "고급 안내서":
        return (
          <>
            {
              docsAdvanced.map((doc, idx) => {
                return (
                  <li key={doc.title} style={location.pathname === doc.path ? active: {}}>
                    <Link to={doc.path}>
                      {doc.title}
                    </Link>
                  </li>
                )
              })
            }
          </>
        )
      case "HOOK":
        return (
          <>
            {
              docsHooks.map((doc, idx) => {
                return (
                  <li key={doc.title} style={location.pathname === doc.path ? active: {}}>
                    <Link to={doc.path}>
                      {doc.title}
                    </Link>
                  </li>
                )
              })
            }
          </>
        )
      case "테스팅":
        return (
          <>
            {
              docsTesting.map((doc, idx) => {
                return (
                  <li key={doc.title} style={location.pathname === doc.path ? active: {}}>
                    <Link to={doc.path}>
                      {doc.title}
                    </Link>
                  </li>
                )
              })
            }
          </>
        )
      default:
        return ''
    }
  }

  const onClickOpenDocs = () => {
    setDocs((prev) => !prev);
  }

  return (
    <div>
      <button
        type="button"
        className="docs-title-btn"
        onClick={onClickOpenDocs}
      >
        { title }
        <ArrowImg className={docs ? 'docs-arrow-img active-arrow' : 'docs-arrow-img'} />
      </button>
      <ul className="docs-list-wrapper">
        { docs && getDocsList(title) }
      </ul>
    </div>
  );
};