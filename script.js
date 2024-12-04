function addnumbers(a, b){
    a =  Number(a);
    b =  Number(b);
    document.getElementById("ans1").innerText = a+b;
}
function addNumbers(a, b){
    let result = a+b
    document.getElementById("ans2").innerText = result;
}
function greet(a){
    return "hello," + a + "!";
}
console.log(greet("alice"))
console.log(greet("bob"))
function iseven(a){
    a = Number(a);
    if((a%2)==0){
        document.getElementById("ans5").innerText = "true";
    }
    else{
        document.getElementById("ans5").innerText = "false";
    }
}