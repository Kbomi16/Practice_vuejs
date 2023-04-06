function init(Sequelize, connection) {
  global.Board = connection.define("board", {
    boardNo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      // 게시글이 써질 때마다 게시물 개수 증가
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING
    },
    writer: {
      type:Sequelize.STRING
    },
    body: {
      type: Sequelize.TEXT,
    },
    viewCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    writeDate: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  })

  connection.sync({
    // force: 실행 시킬 때마다 다 삭제함 
    alter: true
  })
}

module.exports = init