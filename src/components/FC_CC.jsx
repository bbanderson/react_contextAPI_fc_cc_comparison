// 함수형 & 클래스형 컴포넌트 모두 사용 가능한 방법

import FruitContext from "../contexts/FruitContext";

export default function () {
  return (
    <FruitContext.Consumer>
      {(fruits) => (
        <>
          <h2>Class/Function Component & Consumer</h2>
          <ul>
            {fruits.map((v) => (
              <li>{v.name}</li>
            ))}
          </ul>
        </>
      )}
    </FruitContext.Consumer>
  );
}
