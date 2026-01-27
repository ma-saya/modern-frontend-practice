import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState<number>(0);

  const images: string[] = [
    "https://placehold.co/300x200/ff7eb3/white?text=Image+1", // ピンク
    "https://placehold.co/300x200/42a5f5/white?text=Image+2", // 青
    "https://placehold.co/300x200/66bb6a/white?text=Image+3", // 緑
  ];

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>フォトギャラリー</h1>

      <img
        src={images[index]}
        alt="gallery"
        style={{
          width: "300px",
          height: "200px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={index === 0}>
          前の画像へ
        </button>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          {index + 1} / {images.length}
        </span>
        <button onClick={handleNext} disabled={index === images.length - 1}>
          次の画像へ
        </button>
      </div>
    </div>
  );
}
