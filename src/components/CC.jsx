// 클래스 컴포넌트 하나당 context 하나만 사용 가능하기에
// 잘 사용되지 않는다.

import React from "react";
import FruitContext from "../contexts/FruitContext";
export default class CC extends React.Component {
  static contextType = FruitContext;

  render() {
    const fruits = this.context;
    return (
      <>
        <h2>Class Component & contextType</h2>
        <ul>
          {fruits.map((v) => (
            <li>{v.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

// static 키워드를 대신하는 방법
// CC.contextType = FruitContext;
