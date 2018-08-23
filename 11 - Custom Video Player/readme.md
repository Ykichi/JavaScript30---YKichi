# [Custom Video Player](https://github.com/Ykichi/JavaScript30---YKichi/tree/master/11%20-%20Custom%20Video%20Player)
+ [HTML DOM Video Object](https://www.w3schools.com/tags/ref_av_dom.asp)
+ [`timeupdate`](https://developer.mozilla.org/zh-CN/docs/Web/Events/timeupdate) 事件
+ 這一段控制播放鍵的部分
    ```js
    function updateButton() {
        if (video.paused) {
            toggle.textContent = '►'
        } else {
            toggle.textContent = '❚❚'
        }
    }
    ```
    原本是反過來的寫了
    ```js
    function updateButton() {
        if (video.played) {
            toggle.textContent = '❚❚'
        } else {
            toggle.textContent = '►'
        }
    }
    ```
    後來發現 `played` 這個屬性不是用來表示影片是否為播放狀態的屬性，  
    回傳的也不是布林値，所以一定要用 `paused`這個屬性。