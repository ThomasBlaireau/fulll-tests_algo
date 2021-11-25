//////////////////////////////////////
// The requested FizzBuzz function //
////////////////////////////////////

//Algo :
    //► If the rest of the division of (3*5)/number = 0, then display "FizzBuzz"
    //► Else if the rest of the division of (3)/number = 0, then display "Fizz"
    //► Else if the rest of the division of (5)/number = 0, then display "Buzz"
    //► Else display the number

function FizzBuzz(number){
    var result = '';
    
    if (number % 15 == 0){
        result = "FizzBuzz";
    }
    else if (number % 3 == 0){
        result = "Fizz";
    }
    else if (number % 5 == 0){
        result = "Buzz";
    }
    else{
        result = number;
    } 

    return result;
}