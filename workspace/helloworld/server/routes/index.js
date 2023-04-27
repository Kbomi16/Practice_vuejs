var express = require('express');
var router = express.Router();
const Service = require("./service");
const Pager = require("node-jyh-pager");
let pager = new Pager({
  itemPerPage: 10,
  pageCount: 5
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/helloworld", function(req, res) {
  res.write("helloworld")
  res.end()
})
router.post("/board/list", async function(req,res) {
  var page = req.body.page
  

  var list = await Board.findAll({
    offset: (page-1) * 10,
    limit: 10,
    order: [["writeDate", "DESC"], ["boradNo", "DESC"]]
  })
  var totalCount = await Board.count()
  var pagination = pager.getBottomNav(page, totalCount)




  res.json({
    list: list,
    pagination: pagination
  })
})

router.post("/board/write", async function (req, res) {
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
  // board.create(req.body).then(result => {
  //   console.log(result.dataValues)
  // })
  // res.json({
  //   result: "ok"
  // })
  // console.log("저장 후")

  // await은 aysnc안에 있어야 함
  var result = await Board.create(req.body)

  res.json({
    result: "ok",
    item: result
  })
  console.log("저장 후")

})

router.post("/board/item", async function (req, res) {
  var boardNo = req.body.boardNo
  var boardItem = await Board.findOne({
    where: {
      boardNo: boardNo
    }
  })
  boardItem.viewCount++
  await boardItem.save()

  res.json({
    result: "ok",
    board: boardItem
  })
})

router.post("/board/modify", async function(req,res) {
  console.log(req.body)

  if(req.body.title == "") {
    res.json({
      result: "fail",
      message: "제목을 입력하세요."
    })
    return
  }
  if(req.body.body == "") {
    res.json({
      result: "fail",
      message: "글 내용을 입력하세요."
    })
    return
  }
  await Board.update({
    title: req.body.title,
    body: req.body.body
  }, {
    where: {
      boardNo: req.body.boardNo
    }
  })


  res.json({
    result: "ok"
  })
})

router.post("/board/remove", async function(req, res) {
  console.log(req.body)
  await Board.destroy({
    where: {
      boardNo: req.body.boardNo
    }
  })
  res.json({
    result: "ok"
  })
})

module.exports = router
