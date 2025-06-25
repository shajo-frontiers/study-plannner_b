import React, { useState } from 'react';

function Description() {
    // ユーザー名の状態を'中央太郎'で初期化
    const [username, setUsername] = useState('中央太郎');

    // 入力フィールドの変更を処理
    const handleNameChange = (event) => {
        setUsername(event.target.value); // ユーザー名の状態を更新
    };

    return (
        <section>
            <p>
                {/* テキスト入力フィールド */}
                <input
                    type="text"
                    value={username} // 入力値はusernameの状態によって制御される
                    onChange={handleNameChange} // 入力が変更されたらhandleNameChangeを呼び出す
                    aria-label="ユーザー名" // アクセシビリティ用のラベル
                    style={{ textAlign: 'center' }} // ← このインラインスタイルを追加してテキストを中央揃えにする
                />
            </p>
            <p> さん　こんにちは</p>
        </section>
    );
}

export default Description;