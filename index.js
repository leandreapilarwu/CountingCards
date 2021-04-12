function firstseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
   
}
  
document.querySelector("#card1",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6) ).textContent = result;
  
}
function reset(clear) {
  document.querySelector("#card1").textContent = " ";
}

function secondseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
  }
document.querySelector("#card2",cc(7) + cc(8) + cc(9)).textContent = result;
  
  }
function reset2(clear) {
  document.querySelector("#card2").textContent = " ";
}

function thirdseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
  }
document.querySelector("#card3",cc(10) + cc("J") + cc("K") + cc("Q") + cc("A")).textContent = result;
  
  }
function reset3(clear) {
  document.querySelector("#card3").textContent = " ";
}

function fourthseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
  }
document.querySelector("#card4",cc(3) + cc(7) + cc("Q") + cc(8) + cc("A")).textContent = result;
  
  }
function reset4(clear) {
  document.querySelector("#card4").textContent = " ";
}

function fifthseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
  }
document.querySelector("#card5",cc(2) + cc("J") + cc(9) + cc(2) + cc(7)).textContent = result;
  
  }
function reset5(clear) {
  document.querySelector("#card5").textContent = " ";
}

function sixthseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
  }
document.querySelector("#card6",cc(2) + cc(2) + cc(10)).textContent = result;
  
  }
function reset6(clear) {
  document.querySelector("#card6").textContent = " ";
}

function seventhseq() {
    let count = 0;
    function cc(card) {
  
    (card === 2 || card == 3 || card === 4 || card === 5|| card === 6) ?
      count ++:
  
    (card === 7 || card === 8 || card === 9)?
      count:
  
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" )?
      count --: null
  
    result = count + ((count>0)? ' Bet' : ' Hold');
    return count;
  }
document.querySelector("#card7",cc(3) + cc(2) + cc("A") + cc(10) + cc("K")).textContent = result;
  
  }
function reset7(clear) {
  document.querySelector("#card7").textContent = " ";
}