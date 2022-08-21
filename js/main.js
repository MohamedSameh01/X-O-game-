//
//
//

let boxes = Array.from(document.getElementsByClassName("box"));
let turn = 'x';
let data = [];

function end(num1, num2, num3) {
    document.getElementById('item' + num1).style.background = 'green';
    document.getElementById('item' + num2).style.background = 'green';
    document.getElementById('item' + num3).style.background = 'green';

    document.getElementById('item' + num1).style.color = 'white';
    document.getElementById('item' + num2).style.color = 'white';
    document.getElementById('item' + num3).style.color = 'white';

    document.getElementById("theWinner").innerHTML = "winner...." + document.getElementById('item' + num1).innerHTML;

    setTimeout(function() { location.reload() }, 2000)
}

function winner() {
    for (let i = 1; i < 10; i++) {
        data[i] = document.getElementById('item' + i).innerHTML;
    }
    if (data[1] == data[2] && data[2] == data[3] && data[1] != '') {
        end(1, 2, 3);
    } else if (data[4] == data[5] && data[5] == data[6] && data[4] != '') {
        end(4, 5, 6);
    } else if (data[7] == data[8] && data[8] == data[9] && data[7] != '') {
        end(7, 8, 9);
    } else if (data[1] == data[4] && data[4] == data[7] && data[4] != '') {
        end(1, 4, 7);
    } else if (data[2] == data[5] && data[5] == data[8] && data[8] != '') {
        end(2, 5, 8);
    } else if (data[3] == data[6] && data[6] == data[9] && data[9] != '') {
        end(3, 6, 9);
    } else if (data[1] == data[5] && data[5] == data[9] && data[1] != '') {
        end(1, 5, 9);
    } else if (data[3] == data[5] && data[5] == data[7] && data[7] != '') {
        end(3, 5, 7);
    }

}

function game(id) {

    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'x';
        turn = 'o';


    } else if (turn === 'o' && element.innerHTML == "")

    {
        element.innerHTML = 'o'
        turn = 'x';

    }
    winner();
}