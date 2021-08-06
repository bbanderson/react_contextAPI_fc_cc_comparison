import { useContext } from "react";
import FruitContext from "../contexts/FruitContext";

export default function () {
  const fruits = useContext(FruitContext);
  return (
    <>
      <h2>Function Component & useContext</h2>
      <ul>
        {fruits.map((v) => (
          <li>{v.name}</li>
        ))}
      </ul>
    </>
  );
}
