function findtype() {
    let c = document.getElementById("ip").value;
    let res = parseInt(c);
    if(res < 0){
        document.getElementById("result").innerHTML = "negative";
    }
    else{
        document.getElementById("result").innerHTML = "positive";
    }
}

