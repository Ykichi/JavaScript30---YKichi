# JavaScript References VS Copying
### 使用變數時要注意何時是引用(reference)，何時是複製(copy)。
+ `string`、`number`、`boolean` 都是 copy 。
    ```js
    let age = 100;
    let age2 = age;
    console.log(age, age2); // 100 100
    age = 200;
    console.log(age, age2); // 200 100
    ```
+ 陣列及物件都是 reference 。
    - 陣列
    ```js
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;
    console.log(players, team);
    team[3] = 'Lux';
    console.log(players, team);
    // ["Wes", "Sarah", "Ryan", "Lux"] ["Wes", "Sarah", "Ryan", "Lux"]
    ```
    - 物件
    ```js
    const person = {
    name: 'Wes Bos',
    age: 80
    };
    const captain = person;
    captain.number = 99;
    console.log(person, captain);
    // Object {name: "Wes Bos", age: 80, number: 99}
    // Object {name: "Wes Bos", age: 80, number: 99}
    ```
### 幾種複製陣列的方法
+ [`Array.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 會回傳一個新的陣列
+ [`Array.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 透過合併一個空陣列來達到複製
+ 利用 ES6 [`Spread syntax`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
+ [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
### 複製物件的方式
+ [`Object.assign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 但只能複製深度只有一層的物件
    ```js
    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
    
    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
    
    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
    
    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}
    ```
+ `JSON.parse(JSON.stringify(obj))` 轉換成字串再轉換成物件，可以完整複製物件
    - [`JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 轉成字串
    - [`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 轉成物件
    ```js
    // Deep Clone
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
    ```