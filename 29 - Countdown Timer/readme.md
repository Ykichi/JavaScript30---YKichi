# [Countdown Timer](https://ykichi.github.io/JavaScript30---YKichi/29%20-%20Countdown%20Timer/)
+ 表單或其中的 input 元素有 name 屬性時，可以透過 `document.[name]` 來取得該 DOM 元素
    ```js
    document.customForm.addEventListener('submit', function (e) {
        e.preventDefault();
        timer(this.minutes.value * 60);
        this.reset();
    });
    ```
+ [JavaScript ES6 中的箭頭函數（arrow function）及對 this 的影響](https://pjchender.blogspot.com/2017/01/es6-arrow-function.html)
+ [JavaScript Date 物件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)
+ [`setInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
+ [`clearInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearInterval)