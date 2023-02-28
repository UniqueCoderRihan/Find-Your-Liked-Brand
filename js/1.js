const person = {
    fristName:'Raihan ',
    exName: 'Pospa',
    id:500,
    fullName: function(){
        return this.fristName+this.exName;
    }
}
console.log(person.fullName());