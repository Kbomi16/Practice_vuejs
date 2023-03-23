# Practice_vuejs
📘소프트웨어 공학 수업 정리 노트📘

https://vuejs.org/guide/introduction.html <br>

css 프레임워크 <br>
https://vuetifyjs.com/en/ 

<hr>

### DOM
https://miro.medium.com/v2/resize:fit:640/1*NA2VKR09ECb8PEgYDteR3w.gif <br>
-> VUE는 가상의 DOM을 만들어 사용자의 행동에 따라 생겨야 할 태그를 만들어(가공) 내보냄.

### 이벤트
- v-btn에 @click 등 @를 통해 이벤트를 추가할 수 있음.
```vue
<v-btn @click="helloWorld()">안녕하세요</v-btn>
```

### 배열에 있는 데이터 출력하기
- 변수 선언
```js
data() {
    return {
      students: ["김보미", "김세민", "김혜현", "나호윤"]
    }
  }
```
- 반복문 for로 출력하기

```vue
<div v-for="student in students">
    {{ student }}
</div>
```
### 페이지 연결

```js
this.$router.replace("/board")

this.$router.push("/board")
```
📍 push <br>
홈 -> 로그인 -> 메인페이지 -> [뒤로가기] -> 로그인<br>
- push를 사용하면 히스토리가 순서대로 쌓여서, 로그인 다음 페이지에서 뒤로가기 버튼을 누르면 로그인 페이지로 돌아가게 된다.

📍 replace <br>
홈 -> 로그인 -> 메인페이지 -> [뒤로가기] -> 홈<br>
- replace를 사용하면 history 제일 위에 있는 원소를 지금 넣을 원소로 바꿔줘서, 뒤로가기 버튼을 누르면 로그인의 전 페이지로 돌아가게 된다.