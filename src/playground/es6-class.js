class Person{
    constructor(name= 'Anynomous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreetings(){
        return `Hi I am ${this.name} !`
    }
    
    getDescription(){
        return `${this.name} is ${this.age} years(s) old.`;
    }
}
class Traveler extends Person{
    constructor(name,location){
        super(name);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreetings(){
        let homeLocation = super.getGreetings();
        if(this.hasLocation()){
            homeLocation += `Hi I am ${this.name}. I am visiting from ${this.location}`
        }

        return homeLocation;

    }
}
const me = new Traveler('Emmanuel Tuyishimire', 'Kigali');
console.log(me.getGreetings());

const other = new Traveler();
console.log(other.getGreetings());