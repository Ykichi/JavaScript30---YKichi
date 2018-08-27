# [LocalStorage](https://ykichi.github.io/JavaScript30---YKichi/15%20-%20LocalStorage/)
+ [`event.preventDefault`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault) 即取消事件的預設行為以避免submit後刷新頁面
+ [`Event.target`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target)
+ [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
+ [`Element.matches()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/matches)
+ ES6中，當一個物件的屬性名和本地變數同名時，不必再寫冒號和值，只寫屬性名即可
    ```js
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    ```