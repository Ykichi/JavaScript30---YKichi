# [Mouse Move Shadow](https://ykichi.github.io/JavaScript30---YKichi/16%20-%20Mouse%20Move%20Shadow/)
+ [解構賦値](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    ```js
    function shadow(e) {
        //let x = e.offsetX;
        //let y = e.offsetY;
        //可寫成
        let { offsetX: x, offsetY: y } = e;
    }
    ```
+ [CSS文字陰影](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)