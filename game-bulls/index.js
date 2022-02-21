let playerNumber;
let computerNumber;
let playerNumVariable;
let counter = 0;
let possiblPlayerNum = []
let compNum = []
isPlayrMove = false
const allVarNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const plauerBtn = document.querySelector('.player__title-button')
const h5 = document.querySelector('.counter__player-number')
const h5com = document.querySelector('.counter__computer-number')
const playerList = document.querySelector('.counter__player-list')
const computerList = document.querySelector('.counter__computer-list')
const computerList2 = document.querySelector('.counter__computer-list2')
const playerList2 = document.querySelector('.counter__player-list2')
const playerInner = document.querySelector('.player__inner')
const plauerInput = document.querySelector('.player__title-input')
const allertWin = document.querySelector('.winner')
const allertWinText = document.querySelector('.winner__text')
const allertWinBtn = document.querySelector('.wrapper__btn')

function addcompNum() {
    computerNumber = randomCompNum(compNum)
    h5com.innerHTML = computerNumber
}


plauerBtn.addEventListener('click', playerNum)
allertWinBtn.addEventListener('click', () => window.location.reload())

//нахождение нажатого на экране текста
// var str = computerList.innerText;
// var newhtml = "";
// for (var i = 0; i < str.length; i++) {
//     newhtml += "<a>" + str[i] + "</a>";
// }
// computerList.innerHTML = newhtml;
// computerList.onclick = function (e) {
//     alert("кликнули на букве \"" + e.target.innerText + "\"");
// }

//проверка случайного числа не совпадающее цифры с числом 1 хода
function checkNum1Num2(x, y) {
    for (let i = 0; i < x.length; i++) {
        for (let k = 0; k < y.length; k++) {
            if (x[i] == y[k]) return false
        }
    }
    return true
}

//ход компьютера
let mabyNum = 0
let mabyNum1 = []
let mabyNum2 = []
let mabyNum3 = []
let mabyNum4 = []
let mabyNum5 = []
let dontPlayerNum = []
let exactlyPlayerNum = []
let sumTwoeMove = 0;

function computerMove() {

    //массив чисел которых нет у игрока
    console.log(dontPlayerNum);

    function addDontNum(x) {
        for (let i = 0; i < x.length; i++) {
            dontPlayerNum.push(x[i])
        }
    }
    if (isPlayrMove) {
        if (playerList.childNodes.length == 0) {
            mabyNum1 = randomCompNum(possiblPlayerNum)
            const li = `<li>${mabyNum1.join('')}</li>`
            playerList.insertAdjacentHTML('beforeend', li)
            isPlayrMove = !isPlayrMove
            let mabyNum1Index = showBulls(mabyNum1, playerNumber, 0)
            sumTwoeMove += mabyNum1Index
            if (!mabyNum1Index) {
                addDontNum(mabyNum1)
            }
            //если первое предположение было
        } else if (playerList.childNodes.length == 1) {
            possiblPlayerNum = []
            mabyNum2 = randomCompNum(possiblPlayerNum)
            //если число отличное от первого
            console.log(checkNum1Num2(mabyNum2, mabyNum1));
            if (checkNum1Num2(mabyNum2, mabyNum1)) {
                let mabyNum2Index = showBulls(mabyNum2, playerNumber, 0)
                const li = `<li>${mabyNum2.join('')}</li>`
                playerList.insertAdjacentHTML('beforeend', li)
                isPlayrMove = !isPlayrMove
                sumTwoeMove += mabyNum2Index
                if (!mabyNum2Index) {
                    addDontNum(mabyNum2)
                }
            } else {
                mabyNum2 = randomCompNum(possiblPlayerNum)
                computerMove()
            }
            //3й ход
        } else if (playerList.childNodes.length == 2) {
            if (sumTwoeMove == 3.1 || sumTwoeMove == 2.2 || sumTwoeMove == 1.3 || sumTwoeMove == 0.4) {

                let num12 = mabyNum1.concat(mabyNum2)
                for (let i = 0; i < allVarNum.length; i++) {
                    for (let k = 0; i < num12.length; k++) {
                        if (allVarNum[i] != num12[k]) {
                            dontPlayerNum.push(allVarNum[i])
                        }
                    }
                }
                console.log(num12);
                console.log(dontPlayerNum);
            } else {
                console.log(mabyNum1);
                console.log(mabyNum1);
            }
        }
    }
}

//проверка числа игрока на неповторяемость цифр
function chackRanpomPlayerNum(y) {
    for (let i = 0; i < 5; i++) {
        for (let k = i + 1; k < 4; k++) {
            if (y[i] == y[k]) return false
        }
    }
    return true
}
//общая проверка числа на длину и неповторяемость
function playrNumCheck(x) {
    if (x.length != 4) return false
    if (!chackRanpomPlayerNum(x)) return false
    return true
}
// сначала загадывание числа, потом поле ввода для отгадывания числа
// компьютера и вывод его на экран
function playerNum() {
    if (isPlayrMove) return false
    playerNumVariable = plauerInput.value
    if (!playerNumber) {
        playerNumber = playerNumVariable
        // console.log(playerNumber);
    }

    if (!playrNumCheck(playerNumVariable)) return false
    let playerNumberW = h5.innerHTML
    if (!playerNumberW) {
        addcompNum()
        h5.innerHTML = playerNumVariable
        plauerBtn.innerHTML = 'Пробовать'
    } else {
        isPlayrMove = !isPlayrMove
        const li = `<li>${playerNumVariable}</li>`
        computerList.insertAdjacentHTML('beforeend', li)
        computerMove()
        if (checkCompNum()) {
            console.log('33333');
        } else {
            console.log('44444');
        }
        counter += 1
    }
}

//случайное число компьютера
function randomCompNum(num) {
    let n
    function rend() {
        n = Math.floor(Math.random() * 10);
        return n
    }
    function findeNum(x) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] == x) {
                return false
            }
        }
        return true
    }
    rend()
    while (num.length < 4) {
        if (findeNum(n)) {
            num.push(n)
        } else {
            rend()
        }
    }
    return num;
}
//вывод сообщения о победе
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
//подсчет совпадений числа(подсчет быков и коров) и вывод справа от числа
function showBulls(z, q, w) {
    let countCows = 0
    let countBulls = 0
    // console.log(computerNumber);
    for (let i = 0; i < z.length; i++) {
        for (let k = 0; k < q.length; k++) {
            if (z[i] == q[i]) {
                console.log(z);
                countBulls += 1
                break
            } else if (z[i] == q[k]) {
                console.log(q);
                countCows += 1
            }
        }
    }
    let countrCowBull = showBullslCow(countBulls, countCows)
    if (w) {
        if (countBulls || countCows) {
            computerList2.insertAdjacentHTML('beforeend', `<li>${countBulls} Б, ${countCows} К</li>`)
            // console.log(computerList.textContent);
        } else {
            computerList2.insertAdjacentHTML('beforeend', `<li>----</li>`)
        }
    } else {
        if (countBulls || countCows) {
            playerList2.insertAdjacentHTML('beforeend', `<li>${countBulls} Б, ${countCows} К</li>`)
            // console.log(computerList.textContent);
        } else {

            playerList2.insertAdjacentHTML('beforeend', `<li>----</li>`)
        }
    }
    return countrCowBull
}

//счетчик коров и быков
function showBullslCow(a, b) {
    let c = b / 10
    return a + c
}
//проверка на совпадение числа
function checkCompNum() {
    if (playerNumVariable == computerNumber) {
        winner(1)
        return true
    } else {
        showBulls(playerNumVariable, computerNumber, 1)
        return false
    }
}