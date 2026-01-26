import { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState<string>('');
  
  const isValid = password.length >= 8;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>パスワード設定</h1>
      <input
      type='password'
      value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='パスワードを入力'
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }} />
      <div style={{ marginTop: '10px', height: '30px' }}>
        {isValid ? (
          <span style={{ color: 'green'}}>OK！安全なパスワードです</span>
        ) : (
            <span style={{ color: 'red' }}>あと{8 - password.length} 文字必要です。</span>
      )}
      </div>
      <button
        disabled={!isValid}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isValid ? 'blue' : 'grey',
          color: 'white',
          cursor: isValid ? 'pointer' : 'not-allowed',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={() => alert('登録しました')}>
        登録する
      </button>
    </div>
  )
}