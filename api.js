const main = document.querySelector('main');
const container = document.createElement('div');
container.classList.add('container');
main.append(container);
let button
const card = document.createElement('div');
card.classList.add('card');
container.append(card);
let response

const getAdviceData = async function () { 
  try { 
    const res = await fetch ('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => response = data)
    advicePopper(response);
    onButtonClick()
  } catch (err) { 
    console.log(err);
  }
}
//  ეს არის ერთერთი სოლუშენი
function onButtonClick () {
  button = document.querySelector('#button')
    button.addEventListener('click', () => {
      getAdviceData()
  })
}

const advicePopper = function (data) { 
card.innerHTML = ` 
<h1>advice # ${data.slip.id}</h1>
         <div id="text">
            <p>"${data.slip.advice}"</p>
         </div>
           <div id="lineimg">
             <img id="line" src="./images/pattern-divider-desktop.svg" alt="line">
           </div>
       <button id="button"></button>
       `;
      };
      
getAdviceData();
// myBtn.addEventListener("click", getAdviceData);


// setTimeout( ()=> { 
//   const myBtn = document.getElementById("button");

// myBtn.addEventListener("click", getAdviceData);

//   console.log(myBtn);
// },1000)