var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/helloworld", function(req, res) {
  res.write("helloworld")
  res.end()
})
router.get("/board/list", function(req,res) {
  var list = [
    {boardNo: 1, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
              {boardNo: 2, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 3, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 4, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 5, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 6, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 7, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 8, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 9, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"}
  ]
  res.json(list)
})

router.post("/board/write", function (req, res) {
  console.log(req.body)
  var title = req.body.title
  if (title.indexOf("바보") > -1) {
    // 제목에 바보라는 키워드가 포함 되어있을 경우
    res.json({
      result: "fail",
      message: "바보는 금지입니다."
    })
    return
  }
  // 디비에 저장
  res.json({
    result: "ok"
  })
})
module.exports = router
