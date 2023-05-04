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
this.$router.replace("/board");

this.$router.push("/board");
```

📍 push <br>
홈 -> 로그인 -> 메인페이지 -> [뒤로가기] -> 로그인<br>

- push를 사용하면 히스토리가 순서대로 쌓여서, 로그인 다음 페이지에서 뒤로가기 버튼을 누르면 로그인 페이지로 돌아가게 된다.

📍 replace <br>
홈 -> 로그인 -> 메인페이지 -> [뒤로가기] -> 홈<br>

- replace를 사용하면 history 제일 위에 있는 원소를 지금 넣을 원소로 바꿔줘서, 뒤로가기 버튼을 누르면 로그인의 전 페이지로 돌아가게 된다.

###

[터미널]<br>
npm install -g express-generator<br>
express<br>
express server<br>

[vscode]<br>
cd server<br>
npm install<br>
node bin/www<br>

[터미널]<br>
npm install -g nodemon -> 파일 수정 후 다시 시작하지 않고 새로고침 하면 페이지가 바뀜<br>
nodemon bin/www<br>

터미널 2개 실행<br>
백엔드 http://localhost:3000/board/list<br>
프론트엔드 : http://localhost:8080/board<br>

[vscode]<br>
npm install axios --save<br>

vue.config.js파일에서<br>

```js
devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
```

<br>

main.js 파일에서 axios 임포트<br>

```js
import axios from "axios";

var app = createApp(App).use(router).use(vuetify);

app.config.globalProperties.$axios = axios;
app.mount("#app");
```

<br>

list.vue에서 mounted 추가 후 getBoardList 함수 생성<br>

```js
mounted() {
      this.getBoardList()
    },
    methods: {
      getBoardList() {
        this.$axios.get("/api/board/list")
        .then(result => {
          console.log(result.data)
        })
      },
```

<br>
app.js에서<br>

```js
app.use("/api", indexRouter);
```

<br>
터미널 2개 실행<br>
백엔드 http://localhost:3000/api/board/list<br>
프론트엔드 http://localhost:8080/board<br>

write.vue 에서 서버에 글 쓰기 데이터 전송

```js
this.$axios.post("api/board.write", this.board).then((result) => {
  if (result.data.result == "ok") {
    this.$router.replace("/board");
  }
});
```

index.js에서

```js
router.post("/board/write", function (req, res) {
  console.log(req.body);
  var title = req.body.title;
  if (title.indexOf("바보") >= -1) {
    // 제목에 바보라는 키워드가 포함 되어있을 경우
    res.json({
      result: "fail",
      message: "바보는 금지입니다.",
    });
    return;
  }
  // 디비에 저장
  res.json({
    result: "ok",
  });
});
```

### 6주차

workbench에서 board DB 만듦<br>

app.js에서 DB 연결

```js
// Sequelize
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("board", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});
```

### 7주차

```
momnet.js 설치<br>
npm install moment --save

node-jyh-pager
npm install node-jyh-pager
```

### 9주차

https://www.npmjs.com/package/express-session

```js
npm install password-encrypt-util --save

var Password = require("password-encrypt-util")
var password = new Password("mjc801!")
password.getHashPassword("123456")
password.encrptPasswordV2("123456")
password.decryptPassword(암호)

npm install express-session --save
```

https://www.npmjs.com/package/express-mysql-session

```js

npm install express-mysql-session --save

// app.js
var session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
var sesstionStore = new MySQLStore({
host: 'localhost',
port: 3306,
user: 'root',
password: '1234',
database: 'board'
})
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

```
