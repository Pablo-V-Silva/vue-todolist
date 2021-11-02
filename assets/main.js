const app = new Vue({
  el: '#app',
  data: {
    tasks: [],
    logo: 'https://www.boolean.careers/images/misc/logo.png',
    newTask: '',
    nullTask: false
  },
  methods: {
    addTask() {
      if (this.newTask != '' && this.newTask.length > 5) {
        this.tasks.push(this.newTask)
        this.nullTask = false
      } else if (this.newTask.length < 5) {
        this.nullTask = true
      }
      this.newTask = ''
    },

    removeTask(i) {
      this.tasks.splice(i, 1)
    }


  }
})