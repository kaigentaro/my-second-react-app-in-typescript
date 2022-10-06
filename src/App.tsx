import React from 'react';
import CounterWithReducer from './CounterWithReducer';

//functionComponentの型制約
interface AppProps {
  message?: string;
}

//Reactに元々あるコンポーネントを使って型アノテーションを関数全体に反映させる
//FunctionComponentを使うときは関数に対して必ずアノテーションをつける
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

//propsのデフォルト値を設定 → propsの設定を関数全体に反映させておく必要がある
App.defaultProps = {
  message: 'Hello Default',
};

export default App;
