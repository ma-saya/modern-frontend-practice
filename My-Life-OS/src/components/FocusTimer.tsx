import { useState, useEffect, } from "react";

export const FocusTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setShowModal(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const m = Math.floor(time / 60).toString().padStart(2, "0");
    const s = (time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div style={boxStyle}>
      <h2>集中タイマー</h2>
      <div style={{ fontSize: "60px", margin: "20px 0", fontWeight: "bold", fontFamily: "monospace" }}>
        {formatTime()}
      </div>
      <div>
        <button onClick={() => setIsRunning(true)} disabled={isRunning} style={btnStyle}>スタート</button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning} style={{...btnStyle, background: "#6c757d", margin: "0 10px"}}>ストップ</button>
        <button onClick={() => setTime(25 * 60)} style={{...btnStyle, background: "#28a745"}}>リセット</button>
      </div>

      {showModal && (
        <div style={overlayStyle} >
          <div style={modalStyle}>
            <h3>お疲れ様でした！</h3>
            <p>少し休憩しましょう。</p>
            <button onClick={() => setShowModal(false)} style={btnStyle}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  )
}
const boxStyle = { padding: "20px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", textAlign: "center" as const };
const btnStyle = { padding: "10px 20px", background:"#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" };
const overlayStyle: React.CSSProperties = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100 };
const modalStyle = { background: "white", padding: "30px", borderRadius: "10px", color: "black", textAlign: "center" as const };