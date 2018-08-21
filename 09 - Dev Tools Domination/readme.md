# [Dev Tools Domination](https://ykichi.github.io/JavaScript30---YKichi/09%20-%20Dev%20Tools%20Domination/)
### 在頁面標籤加上中斷點
F12 開發人員工具中，在 Elements 頁面的某個標籤，右键 → Break on → Attributes modifications。  
便可在該元素上設置中斷點，當它的屬性發生改變時，會定位到程式碼中的對應行。
### `console.log()`
可用替換的方式輸出不同的內容
+ `%s` 字串
+ `%c` 設定輸出樣式
### 不同的 `console`輸出
+ `console.warn()`
+ `console.error()`
### assert 方法測試
接收一個表示式做為參數，如果返回 false 輸出第二個參數的內容
```js
console.assert(1 === 1, "這個不會輸出");
console.assert(1 === 0, "不對不對");
```
### 輸出 DOM 元素
+ `log` 輸出 HTML 標籤
+ `dir` 輸出屬性列表
### `group()` 分組輸出
```js
//用group分組輸出
        const dogs = [{ name: 'Snickers', age: 2, comment: '很聰明' }, { name: 'hugo', age: 8, comment: '超笨' }];
        dogs.forEach(dog => {
            //console.group(dog.name);
            console.groupCollapsed(dog.name); //未展開
            console.log(`這隻狗叫做 ${dog.name}`);
            console.log(`這隻狗${dog.age}歲`);
            console.log(`這隻狗${dog.comment}`);
            console.groupEnd(dog.name);
        });
```
### 計次
`console.count()`
### 計時
用 `time('name')` 跟 `timeEnd('name')` 設置開始點和結束點，參數用來表示計時的名稱。
```js
//計時
console.time('fetch data');
fetch("https://api.github.com/users/ykichi")
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetch data');
        console.log(data);
    });
```