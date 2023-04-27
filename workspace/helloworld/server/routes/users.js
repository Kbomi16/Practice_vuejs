var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/join", async function(req, res) {
  console.log(req.body)
  var alreadyUser = await User.findOne({
    where: {
      id: req.body.id
    }
  })
  // 같은 아이디로 가입된 사용자가 있는 경우
  if(alreadyUser) {
    res.json({
      result: "fail",
      message: "이미 가입된 아이디입니다."
    })
    return
  }
  // 같은 아이디로 가입된 사용자가 없는 경우
  await User.create(req.body)
  res.json ({
    result : "ok"
  })
})

module.exports = router;
