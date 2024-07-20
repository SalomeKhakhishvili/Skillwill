
// Home Work 1
 let arr  = [
      {name:'Temo', age:25}, 
      { name: 'Lasha', age: 21}, 
      {name: 'Ana', age:28}

]

function  getYoungestUserName(users){
    if (users.length ===0) return null;

    let youngestUser = users[0]; 

    for (let i=1; i < users.length; i ++) {
        if (users[i].age < youngestUser.age) {
            youngestUser = users [i];

        } 
    }
    return youngestUser.name
}


let  users =  [
             {name:'Temo', age:25}, 
             { name: 'Lasha', age: 21}, 
             {name: 'Ana', age:28}
] ; 

console.log(getYoungestUserName(users)); 

//Home Work 2
 
const user = {
            name: "Salome", 
            lastName : "Khakhishvili", 
            age: 27

}
function copyUser (user){
    const newUser = {}
    Object.entries (user).forEach(entry => newUser[entry[0]] = entry [1])
    return newUser;

}
const newUser = copyUser (user);

user.age = 30 ;
console.log (user);
console.log (newUser);


// HomeWork 3 

function rollDice() {
    return Math.floor(Math.random() * 5) + 1;
}

function playGame() {
    let attemptsA = 0;
    let attemptsB = 0;
    let rollA = 0;
    let rollB = 0;

    
    while (rollA !== 3) {
        rollA = rollDice();
        attemptsA++;
    }

    
    
    while (rollB !== 3) {
        rollB = rollDice();
        attemptsB++;
    }

    
    if (attemptsA < attemptsB) {
        return `A is the winner with ${attemptsA} attempts!`;
    } else if (attemptsB < attemptsA) {
        return `B is the winner with ${attemptsB} attempts!`;
    } else {
        return `It's a tie! Both took ${attemptsA} attempts.`;
    }
}

console.log(playGame());



