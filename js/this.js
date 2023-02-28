const student = {
    name:'Ali akbar hasan',
    age: 13,
    address: 'Kocukete',
    regNo: 19146512415,
    studentId: function(){
        return this.regNo+this.age;
    },
    studentFormNumber: function(){
        const form = `
        Hello iam  ${this.name}.
        iam coming from ${this.address}

        `
        return form;
    }
}
console.log(student.studentId());
console.log(student.studentFormNumber());