let initialnum1 = 0;
let initialnum2 = 0;

initialnum1 = parseInt(document.getElementById("score1").innerText);
initialnum2 = parseInt(document.getElementById("score2").innerText);


function add1_1(){
    initialnum1 += 1;
    document.getElementById("score1").innerHTML = initialnum1;
}

function add2_1(){
    initialnum1 += 2;
    document.getElementById("score1").innerHTML = initialnum1;
}

function add3_1(){
    initialnum1 += 3;
    document.getElementById("score1").innerHTML = initialnum1;
}

function reset(){
    initialnum1 = 0;
    initialnum2 = 0;
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
}


function add1_2(){
    initialnum2 += 1;
    document.getElementById("score2").innerHTML = initialnum2;
}

function add2_2(){
    initialnum2 += 2;
    document.getElementById("score2").innerHTML = initialnum2;
}

function add3_2(){
    initialnum2 += 3;
    document.getElementById("score2").innerHTML = initialnum2;
}
