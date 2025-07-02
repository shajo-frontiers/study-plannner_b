import React, { useState } from 'react';

function Description() {
    // ユーザー名の状態を'中央太郎'で初期化
    const [username, setUsername] = useState('中央太郎');

    // 入力フィールドの変更を処理
    const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUsername(event.target.value); // ユーザー名の状態を更新
    };

    return (
        <section>
          <p style={{ display: 'inline-block', margin: 0 }}>
            <input
              type="text"
              value={username}
              onChange={handleNameChange}
              aria-label="ユーザー名"
              style={{ textAlign: 'center' }}
            />
            {/* 「さん」をそのまま続ける */}
            さん
          </p>
        </section>
      );
}

export default Description;