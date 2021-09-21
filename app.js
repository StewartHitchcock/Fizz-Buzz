function getCount(){
    let countInput = document.getElementById('countInput');
    let count = countInput.value;
    document.getElementById('countDisplay').innerHTML = count;
    return count;
}

function reset(){
    let count = 0;
    document.getElementById('countDisplay').innerHTML = count;
    let countInput = document.getElementById('countInput');
    countInput.value = "";
    document.getElementById("output").innerHTML = "";
}

function test3(x){
    if (x % 3 == 0){
        return true;
    } else {
        return false;
    }
}

function test5(x){
    if (x % 5 == 0){
        return true;
    } else {
        return false;
    }
}


function execute(){
    let count = getCount();
    let text = "";
    let i = 1;
    while (i <= count) {
        let testIf3 = test3(i);
        let testIf5 = test5(i);

        if(testIf3 && !testIf5) {
            text += "<br>The number is Fizz";
            i++;
        }
        if(testIf5 && !testIf3){
            text += "<br>The number is Buzz";
            i++;
        }
        if(testIf3 && testIf5){
            text += "<br>The number is FizzBuzz";
            i++;
        }
        else if(!testIf3 && !testIf5){
            text += "<br>The number is " + i; 
            i++;
        }
    }
    document.getElementById("output").innerHTML = text;
}