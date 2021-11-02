const app = new Vue({
  el: '#app',
  data: {
    tasks: [],
    logo: 'https://www.boolean.careers/images/misc/logo.png',
    newTask: '',
    nullTask: false,
    caracterTask: false
  },
  methods: {
    addTask() {
      if (this.newTask != '' && this.newTask.length > 8) {
        this.tasks.push(this.newTask)
        nullTask = false
        caracterTask = false
      } else if (this.newTask.length < 5) {
        this.caracterTask = true
      } else {
        this.nullTask = true
      }
      this.newTask = ''
    },

    removeTask(i) {
      this.tasks.splice(i, 1)
    }
  }
})