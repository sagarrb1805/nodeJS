class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    

    greeting(){
        console.log(`hi ${this.name} : ${this.age}`)
        console.log(__filename)
        console.log(__dirname)
    }
}

module.exports = Person;