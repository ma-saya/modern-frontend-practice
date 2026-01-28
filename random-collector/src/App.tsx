import { useState} from 'react';

export default function App() {
  const [images, setImages] = useState<string[]>([]);
  
  const addImage = () => {
    const nweImageUrl = `https://picsum.photos/200/200?random=${Math.random()}`;
    setImages([...images, nweImageUrl])
  }

  return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>画像コレクター</h1>
      <button onClick={addImage} style={{marginBottom: '20px'}}>画像を追加</button>
      <p>現在 {images.length} 枚の画像があります</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center"}}>
        {images.map((url, index) => (
          <img 
          key={index}
          src={url}
          alt="random"
          style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px"}}/>
        ))}
      </div>
    </div>
  )
}