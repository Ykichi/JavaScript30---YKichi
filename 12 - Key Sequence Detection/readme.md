# [Key Sequence Detection](https://ykichi.github.io/JavaScript30---YKichi/12%20-%20Key%20Sequence%20Detection/)
+ [`Array.prototype.splice()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)  
    ```js
    pressed.splice(-secret.length - 1, pressed.length - secret.length);
    ```
    這個寫法可以控制陣列長度並且從一開始輸入的內容開始移除
+ [`Array.prototype.join()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 將陣列中的內容合併成字串回傳
+ [`String.prototype.includes()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/includes)