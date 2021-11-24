//Please check "Lisez moi.txt" or "Read me.txt"

window.addEventListener('load', function () {
    //create form
    DisplayerInit();
    function DisplayerInit(){
        //input number
        var divNumber = ContainerCreator();
        InputCreator('text', 'inputNumber', '', 'please enter a number', divNumber);

        //array incrementing button
        InputCreator('button', 'inputButton', 'Increment me !', '', divNumber);

        //input clearing button
        InputCreator('button', 'inputButtonClear', 'Clear input', '', divNumber);

        //results reseting button
        InputCreator('button', 'inputButtonReset', 'Reset results', '', divNumber);

        //Convert the input number into an array of digit, increment it and display the result
        document.getElementById('inputButton').addEventListener('click', function () {
            var number = document.getElementById('inputNumber').value;
            //convert the input number to an array of digits
            var digitsArray = ConvertNumberToDigitsArray(number);

            var divNumber = ContainerCreator();
            ResultDisplayer(digitsArray, divNumber);
        });

        //just a few options for the right use of the input
        //block any other input than a digit
        document.getElementById('inputNumber').addEventListener('input', function () {
            document.getElementById('inputNumber').value = InputDigitChecker('inputNumber');
        });
        //prevent pasting text in the input
        document.getElementById('inputNumber').addEventListener('paste', function () {
            var oldValue = document.getElementById('inputNumber').value;
            oldValue = isNaN(oldValue) ? '' : oldValue;
            setTimeout(function() {
                document.getElementById('inputNumber').value = InputPastingChecker('inputNumber', oldValue);
            });
        });
        //Clear the input
        document.getElementById('inputButtonClear').addEventListener('click', function () {
            document.getElementById('inputNumber').value = '';
        });
        //Reset results
        document.getElementById('inputButtonReset').addEventListener('click', function () {
            ResetResults();
        });
        //Execute a function when the user releases a key on the keyboard
        document.getElementById('inputNumber').addEventListener("keyup", function(event) {
            if (event.key === 'Enter') {
            // Trigger the button element with a click
            document.getElementById("inputButton").click();
            }
        });
    }

    function ContainerCreator(){
        //get the div number
        var divNumber = document.body.children.length;

        //div creation
        var div = document.createElement('div');
        document.body.appendChild(div);

        //alternate color for multiples containers
        if(document.body.children.length > 1){
            var containerColor = GetContainerColor();
            if(containerColor != ''){
                document.body.children.item(divNumber).classList.add(containerColor);
            }
        }

        return divNumber;
    }

    function GetContainerColor(){
        var containerColor = document.body.children.item(document.body.children.length - 2).classList.contains('yellow') ? '' : 'yellow';

        return containerColor;
    }

    function InputCreator(type, id, value, placeHolder, divNumber){
        var input = document.createElement('input');
        input.setAttribute('type', type);

        //optional attributes
        if(id != ''){
            input.setAttribute('id', id);
        }
        
        if(value != ''){
            input.setAttribute('value', value);
        }

        if(placeHolder != ''){
            input.setAttribute('placeholder', placeHolder);
        }

        //input creation in the wanted div
        var parentElement = document.body.children.item(divNumber);
        parentElement.appendChild(input);
    }

    //client-side digit checker because I don't have server-side code
    function InputDigitChecker(id){
        var input = document.getElementById(id);
        var oldValue = input.value.slice(0, -1)
        var result = isNaN(input.value.slice(-1)) ? oldValue : input.value;

        return result;
    }

    function InputPastingChecker(id, oldValue){
        var result = document.getElementById(id).value;
        result = isNaN(result) ? document.getElementById(id).value = oldValue : document.getElementById(id).value;

        return result;
    }

    function ResetResults(){
        var resultContainers = document.body.children;
        
        while (resultContainers.length > 1) {
            resultContainers[resultContainers.length - 1].remove();
        }
    }

    function ResultDisplayer(digitsArray, divNumber){
        //get the wanted div
        var containerElement = document.body.children.item(divNumber);

        //get the input number
        var inputNumber = digitsArray.toString().replaceAll(',','');

        //display result
        containerElement.innerHTML = `n°${divNumber} : ${inputNumber} → array = [${digitsArray}] → incremented array = [${IncrementArray(digitsArray)}]`;
    }
});
