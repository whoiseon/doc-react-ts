import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HelloWorld from "./pages/concepts/HelloWorld";
import IntroducingJsx from "./pages/concepts/IntroducingJsx";
import RenderingElements from "./pages/concepts/RenderingElements";
import ComponentsAndProps from "./pages/concepts/ComponentsAndProps";
import StateAndLifecycle from "./pages/concepts/StateAndLifecycle";
import HandlingEvents from "./pages/concepts/HandlingEvents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello-world" element={<HelloWorld />} />
      <Route path="/introducing-jsx" element={<IntroducingJsx />} />
      <Route path="/rendering-elements" element={<RenderingElements />} />
      <Route path="/components-and-props" element={<ComponentsAndProps />} />
      <Route path="/state-and-lifecycle" element={<StateAndLifecycle />} />
      <Route path="/handling-events" element={<HandlingEvents />} />
      <Route path="/conditional-rendering" element={<ComponentsAndProps />} />
      <Route path="/forms" element={<ComponentsAndProps />} />
      <Route path="/lifting-state-up" element={<ComponentsAndProps />} />
      <Route path="/composition-vs-inheritance" element={<ComponentsAndProps />} />
      <Route path="/thinking-in-react" element={<ComponentsAndProps />} />
    </Routes>
  );
}

export default App;
