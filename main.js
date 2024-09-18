
let title = document.querySelector(".title");
let turn = "x";

    function end(num1,num2,num3){
        title.innerHTML = `${squear[num1]} Wins `;
        document.getElementById("item" + num1).style.background = "black";
        document.getElementById("item" + num2).style.background = "black";
        document.getElementById("item" + num3).style.background = "black";
        setInterval(()=> {title.innerHTML += "."}, 500);
        setTimeout(()=> {location.reload()},1800);
    }


let squear = [];
function winner(){
    for(let i=1; i < 10; i++){
        squear[i] = document.getElementById(`item${i}`).innerHTML;
    }
    if(squear[1] == squear[2]&& squear[2] == squear[3] && squear[1] != ""){
        end(1,2,3);
    }else if(squear[4] == squear[5]&& squear[5] == squear[6] && squear[4] != ""){
        end(4,5,6);
    }else if(squear[7] == squear[8]&& squear[8] == squear[9] && squear[9] != ""){
        end(7,8,9);
    }else if(squear[1] == squear[4]&& squear[4] == squear[7] && squear[1] != ""){
        end(1,4,7);
    }else if(squear[2] == squear[5]&& squear[5] == squear[8] && squear[5] != ""){
        end(2,5,8);
    }else if(squear[3] == squear[6]&& squear[6] == squear[9] && squear[9] != ""){
        end(3,6,9);
    }else if(squear[1] == squear[5]&& squear[5] == squear[9] && squear[1] != ""){
        end(1,5,9);
    }else if(squear[3] == squear[5]&& squear[5] == squear[7] && squear[7] != ""){
        end(3,5,7);
    }
    if((squear[1]&&squear[2]&&squear[3]&&squear[4]&&squear[5]&&squear[6]&&squear[7]&&squear[8]&&squear[9]) != ""){
        title.innerHTML = "Draw";
        setInterval(()=> {title.innerHTML += "."}, 500);
        setTimeout(()=> {location.reload()},1800);
    }
}

function game(id){
    let ele = document.getElementById(id);
    if(turn === "x" && ele.innerHTML == ""){
        ele.innerHTML = "x";
        title.innerHTML = "O turn";
        turn = "o";
    }else if(turn === "o" && ele.innerHTML == ""){
        ele.innerHTML = "o";
        title.innerHTML = "X Turn";
        turn = "x";
    }
    winner()
}