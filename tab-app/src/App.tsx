import {useState} from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dog');
  
  return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>タブ切り替えアプリ</h1>
      <div style={{marginBottom: '20px'}}>
        <button onClick={() => setActiveTab('dog')} style={{marginRight: '10px'}}>
          犬
        </button>
        <button onClick={() => setActiveTab('cat')} style={{marginRight: '10px'}}>
          猫
        </button>
        <button onClick={() => setActiveTab('rabbit')} style={{marginRight: '10px'}}>
          うさぎ
        </button>

        <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
          {activeTab === 'dog' && (
            <div>
              <h2>ワンコ</h2>
              <p>人懐っこい性格です。</p>
              <div>🐶</div>
            </div>
          )}
        {activeTab === 'cat' && (
          <div>
            <h2>ニャンコ</h2>
            <p>気まぐれな性格です。</p>
            <div>🐱</div>
          </div>
        )}
        {activeTab === 'rabbit' && (
          <div>
            <h2>ウサギ</h2>
            <p>おとなしい性格です。</p>
            <div>🐰</div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}