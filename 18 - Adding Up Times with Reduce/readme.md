# [Adding Up Times with Reduce](https://ykichi.github.io/JavaScript30---YKichi/18%20-%20Adding%20Up%20Times%20with%20Reduce/)
+ [`Array.prototype.map()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    map 中可以直接使用 function
    ```js
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    //相當於
    const [mins, secs] = timeCode.split(':').map(function(str){
        return parseFloat(str);
    });
    ```
+ [`String.prototype.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 將字串分割並傳回一個字串陣列
+ [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)