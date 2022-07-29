// document.addEventListener("DOMContentLoaded", () => {
    let operand = document.getElementById("operands");
    let ans = document.getElementById("answer");
    console.log(operand);
    console.log(ans);
    var eqn = "";

    function disp(num) {
    operand.innerText += num;
    }

    function slice() {
    operand.innerText = operand.innerText.slice(0,-1);
    }

    function allclear() {
    operand.innerText = "";
    ans.innerText = "";
    }

    function equal() {
    ans.innerText = eval(operand.innerText);
    }  
//})