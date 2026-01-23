import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleClick = () => {
    if (liked) {
      setCount(count - 1);
      setLiked(false);
    } else {
      setCount(count + 1);
      setLiked(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>いいねボタンアプリ</h1>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: liked ? 'pink' : 'orange',
          color: liked ? 'red' : 'black',
          transition: 'all 0.3s',
        }}
      >
        ToT {count}
      </button>
      <p>{liked ? 'いいねしました' : 'いいねしていません'}</p>
    </div>
  );
}