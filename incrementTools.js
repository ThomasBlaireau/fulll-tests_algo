//Please check "Lisez moi.txt" or "Read me.txt"

function ConvertNumberToDigitsArray(number){
    //Array.from(arrayLike, fonctionMap) will be called
    //fonctionMap function will take a parameter that was returned by the iteration of Array.from() method.
    //arrayLike type must be a string so the type of parameter is a string, but we will typecast it into integer and return it.
    var fonctionMap = num => Number(num);
    var digitsArray = Array.from(String(number), fonctionMap);

    //digitsArray : from 123 to [1,2,3]
    return digitsArray;
}

//////////////////////////////////////
// The requested increment function //
//////////////////////////////////////
function IncrementArray(digitsArray){
    //Algo :
    //► If the last digit isn't 9, this is a simple increment of it
    //► Else, we have to check if the previous digit isn't 9
    //►► While the tested digit is 9, we have to check the previous digit
    //►►► If the tested digit isn't 9, increment it, set all the next digits to 0 and exit the loop
    //►►► Else If the very first digit is 9 (in fact, if all digits are 9, like [9,9,9]), we have to set all digits to 0, unshift a 1 at the start of the array and exit the loop

    var arrayLength = digitsArray.length;

    //► If the last digit isn't 9, this is a simple increment of it
    if(digitsArray[arrayLength - 1] != 9){
        digitsArray[arrayLength - 1]++;

    //► Else, we have to check if the previous digit isn't 9
    }else{
        //►► While the tested digit is 9, we have to check the previous digit
        for(var i = 1; i <= arrayLength; i++){
            //►►► If the tested digit isn't 9, increment it, set all the next digits to 0 and exit the loop
            if(digitsArray[arrayLength - i] != 9){
                digitsArray[arrayLength - i]++;
                for(var y = 1; arrayLength - i + y < arrayLength ; y++){
                    digitsArray[arrayLength - i + y] = 0;
                }
                break;

            //►►► Else If all digits are 9, we have to set them to 0, unshift a 1 at the start of the array and exit the loop
            }else{
                if((i == arrayLength) && (digitsArray[0] == 9)){
                    for(var y = 0; y < arrayLength ; y++){
                        digitsArray[y] = 0;
                    }
                    digitsArray.unshift(1);
                    break;
                }
            }
        }
    }

    return digitsArray;
}