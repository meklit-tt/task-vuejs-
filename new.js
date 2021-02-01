new Vue({


  data: {
    name: 'A mountain B ro',
    course: 'Web Engineer Course',
    acceptancePeriod: 'January 2021',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Hiroyoshi Noro', course: 'Machine learning course', acceptancePeriod: 'January 2021' },
      { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2021' },
      { id: 3, name: 'Kazuki Saito', course: 'Web Engineer Course', acceptancePeriod: 'November 2021' }
    ]
  },

  methods: {
    addStudent: function() {
      var lastStudentPosition = this.students.length - 1;
              let id = this.students[lastStudentPosition].id + 1;
              let name = this.name
              let course = this.course
              let acceptancePeriod = this.acceptancePeriod
              this.students.push({ id,name, course, acceptancePeriod })
    }
  }
})
