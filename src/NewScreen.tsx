// src/NewScreen.tsx
import React from 'react';

function NewScreen() {
    return (
        <div>
            <h1>過去の時間割</h1>
            <select class="form-select" aria-label="Default select example">
  <option selected>時間割選択</option>
  <option value="1">バイト優先</option>
  <option value="2">サークル優先</option>
  <option value="3">単位優先</option>
  <option value="3">空きコマ0</option>
</select>
        </div>
    );
}

export default NewScreen;