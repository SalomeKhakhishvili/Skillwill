// alert ( "salome");
 // Home Work 1

function CheckEquality ( a,b ) {
    if ( a !== b) return "ar aris toli"; 
    return "aris toli"; 
}
    

 console.log (CheckEquality (5, 5)); 
 console.log (CheckEquality (5, 10)); 
 console.log (CheckEquality (5, '5')); 

// Home Work 2

function FahrenheitToCelsius(Tem) {
    if (typeof Tem !== 'number') return false;
    return (Tem - 32) / 1.8;
}

console.log (FahrenheitToCelsius(32)); 
console.log (FahrenheitToCelsius(50)); 
console.log (FahrenheitToCelsius ('50')); 

 // Home Work 3

function Calculate (a, b, op) {
    if (typeof a !== 'number' || typeof b !== 'number') return false ; 

    switch (op) {
        case '+': return a+b
        case '-': return a-b
        case '*': return a*b
        case '/': return a/b
        default: return false; 
    
    }
    
}
console.log (Calculate (20, 30, '+')); 
console.log (Calculate (50, 30, '-'));
console.log (Calculate (10, 5, '*'));
console.log (Calculate (30, 10, '/'));
console.log (Calculate ('10', 20, '+'));
console.log (Calculate (10, '40', '*'));
console.log (Calculate ( '10', '10', '+')); 
console.log (Calculate (10, 20, '&'));
