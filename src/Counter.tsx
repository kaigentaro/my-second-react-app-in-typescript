//Componentを作る
import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
  //const [現在の値, 次に設定する値]
  const [value, setValue] = useState<number>(0);
  //buttonをクリックしたstateを変更する(状態管理のためにuseStateを活用する)

  const increment = () => {
    //setValueの引数にはvalueが与えられる戻り値は同じ型
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  /**
   * 何回Renderされたかをカウントする
   */
  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current++;
  });
  //input要素にrefを与えて関数を実行できるようにする(idみたいなイメージ？)
  //refに与えるデータはRef型にする null!：直前のデータはnullじゃないよ
  //!:nonNullAssertionOperator
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click me!</button>
    </div>
  );
};

//↓他のファイルでimportする
export default Counter;
