<template>
    <v-container>
        <table>
            <tr>
                <th widtth="50px">글번호</th>
                <th>제목</th>
                <th widtth="80px">작성자</th>
                <th widtth="50px">조회수</th>
                <th widtth="100px">작성일</th>
            </tr>

            <tbody>
                <tr v-for="(board, key) in boardList" :key="key" @click="moveItem(board)">
                    <td class="text-center">{{ board.boardNo }}</td>
                    <td>{{ board.title }}</td>
                    <td class="text-center">{{ board.writer }}</td>
                    <td class="text-center">{{ board.viewCount }}</td>
                    <td class="text-center">{{ board.writeDate }}</td>
                </tr>
            </tbody>

        </table>

        <div class="text-right">
          <v-btn color="primary" class="mt-5" @click="moveWrite">글 쓰기</v-btn>
        </div>

    </v-container>
</template>
<script>
export default {
    data() {
        return {
            boardList:[
                {boardNo: 1, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 2, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 3, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 4, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 5, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 6, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 7, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 8, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
                {boardNo: 9, title: "제목1", writer: "김보미", viewCount: 1, writeDate: "2023-03-23"},
            ]
        }
    },
    methods: {
      moveWrite() {
        this.$router.push("/board/write")
      },
      moveItem(board) {
        this.$router.push("/board/item/" + board.boardNo)
      }
    }
}
</script>
<style>
table {
   width: 100%;
   /* 간격 합쳐지게 */
   border-collapse: collapse;
}
table tr th{
  border-bottom: 1px solid #999;
}
table tr td {
  border-bottom: 1px solid #999;
  padding: 5px 0;
}
table tbody tr:hover {
  cursor: pointer;
  background-color: #eee;
}
    
</style>