<template>
  <div>
    <v-btn @click="helloWorld()">안녕하세요. 김보미입니다.</v-btn>

    <!-- <div v-if="onoff"></div> -->

    <!-- 반복문 for -->
    <!-- old클래스는 학생의 나이가 40이상만 출력함. -->
    <div v-for="student in studentFilter()" class="student" :class="{old:student.age>=40}">
      {{ student.name }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  // 변수 선언
  data() {
    return {
      onoff: true,
      students: [
        {name : "김보미", age:20},
        {name : "장세림", age:30},
        {name : "윤다영", age:40},
        {name : "임효진", age:50}
      ]
    }
  },

  methods:{
    helloWorld() {
      // this.students.push("학생" + Math.random())
      // this.onoff = !this.onoff
      this.$router.push("/helloworld")
    },
    studentFilter() {
      var returnArr=[]
      if(this.onoff == true) {
        this.students.forEach(student => {
          returnArr.push(student)
        })
      } else {
        // 나이가 40미만인 학생만 리턴
        this.students.forEach(student => {
          if(student.age < 40) {
            returnArr.push(student)
          }
        })
      } 
      return returnArr;
    }
  }
});
</script>

<style>
  .student {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .student.old {
    color: red;
  }
</style>
