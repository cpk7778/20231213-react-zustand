import React from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));

function App() {
  const { count, increaseCount } = useStore();

  return (
    <div className="App">
      <p className="text-2xl font-semibold">구독자 {count}</p>
      <button
        onClick={increaseCount}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increase Count
      </button>
      <Card />
    </div>
  );
}

function Card() {
  const { count } = useStore();

  return (
    <div className>
      <p>카드 {count} </p>
    </div>
  );
}

export default App;
