let playerNumber,
    computerNumber;
let counter = 0;
let compNum = []

const plauerBtn = document.querySelector('.player__title-button')
const h5 = document.querySelector('.counter__player-number')
const playerList = document.querySelector('.counter__player-list')
const computerList = document.querySelector('.counter__computer-list')
const computerList2 = document.querySelector('.counter__computer-list2')
const playerInner = document.querySelector('.player__inner')
const plauerInput = document.querySelector('.player__title-input')
const allertWin = document.querySelector('.winner')
const allertWinText = document.querySelector('.winner__text')
const allertWinBtn = document.querySelector('.wrapper__btn')


computerNumber = randomCompNum()
console.log(computerNumber);

plauerBtn.addEventListener('click', playerNum)
allertWinBtn.addEventListener('click', () => window.location.reload())


// var str = computerList.innerText;
// var newhtml = "";
// for (var i = 0; i < str.length; i++) {
//     newhtml += "<a>" + str[i] + "</a>";
// }
// computerList.innerHTML = newhtml;
// computerList.onclick = function (e) {
//     alert("кликнули на букве \"" + e.target.innerText + "\"");
// }




function chackRanpomPlayerNum(y) {
    for (let i = 0; i < 5; i++) {
        for (let k = i + 1; k < 4; k++) {
            if (y[i] == y[k]) return false
        }
    }
    return true
}

function playrNumCheck(x) {
    if (x.length != 4) return false
    if (!chackRanpomPlayerNum(x)) return false
    return true
}

function playerNum() {
    playerNumber = plauerInput.value
    if (!playrNumCheck(playerNumber)) return false
    let playerNumberW = h5.innerHTML
    if (!playerNumberW) {
        h5.innerHTML = playerNumber
        plauerBtn.innerHTML = 'Пробовать'

    } else {
        const li = `<li>${playerNumber}</li>`
        computerList.insertAdjacentHTML('beforeend', li)
        if (checkCompNum()) {
        } else {
            console.log('4');
        }
        counter += 1
    }
}

function randomCompNum() {
    let n
    function rend() {
        n = Math.floor(Math.random() * 10);
        return n
    }
    function findeNum(x) {
        for (let i = 0; i < compNum.length; i++) {
            if (compNum[i] == x) {
                return false
            }
        }
        return true
    }
    rend()
    while (compNum.length < 4) {
        if (findeNum(n)) {
            compNum.push(n)
        } else {
            rend()
        }
    }
    return compNum.join('');
}

function winner(x) {
    if (x == 1) {
        allertWin.classList.remove('none')
        console.log(allertWinText);
        allertWinText.innerHTML = `Вы победили компьютер за ${counter + 1} ходов`
    } else {
        allertWin.classList.remove('none')
        allertWinText.innerHTML = `Компьютер победил Вас за ${counter + 1} ходов`
    }
}
function showBulls(z, q) {
    let countCows = 0
    let countBulls = 0
    console.log(computerNumber);
    for (let i = 0; i < z.length; i++) {
        for (let k = 0; k < q.length; k++) {
            if (z[i] == q[i]) {
                // console.log(z[i]);
                // console.log(q[i]);
                countBulls += 1
                break
            } else if (z[i] == q[k]) {
                // console.log(z[k]);
                // console.log(q[i]);
                countCows += 1

            }

        }
    }
    if (countBulls || countCows) {
        computerList2.insertAdjacentHTML('beforeend', `<li>${countBulls} Б, ${countCows} К</li>`)
        console.log(computerList.textContent);
    } else {
        computerList2.insertAdjacentHTML('beforeend', `<li>----</li>`)
    }

}

function checkCompNum() {
    if (playerNumber == computerNumber) {
        winner(1)
        return true
    } else {
        showBulls(playerNumber, computerNumber)
        return false
    }
}