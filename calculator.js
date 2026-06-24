const btn = document.querySelectorAll('.action');
 // rtn.innerHTML = 'total action button is: ' + btn.length;
 const typing = document.querySelector('.typing');
 const answer = document.querySelector('.answer');
 const equal =  document.querySelector('.equalSign')
 const clear =  document.querySelector('.clear')
 const bkspace =  document.querySelector('.bkspace')
 const sqroot_btn = document.querySelector('.sqroot')
 const TurnOn = document.querySelector('.on_btn')
 const calcScreen = document.querySelector('.calculator_screen')
 const TurnOff = document.querySelector('.off_btn')


 /*const sin =    document.querySelector('sin')
 const cos =    document.querySelector('cos')
 const tan =    document.querySelector('tan')
 */

 for(let x =0; x < btn.length; x++){ //for loop, as long as x is less than the number of buttons
  btn[x].onclick = function(){ //event listener - onclick
    //alert('You clicked btn: '+ this.innerText)
    if (typing.innerText == 0)typing.innerText ='';

    typing.innerText += btn[x].innerText; //plus assingment used to append i.e is add more values
    if (typing.innerText.search ('Exp') != -1)typing.innerText = typing.innerText.replace('Exp', '**');

    
  }
 }

 //equal btn action here
 equal.onclick = function(){
 let tvalue = typing.innerText;

  //rtn.innerText = typing.charCodeAt(0);
 // if(typing.innerText.startsWith('√')) return alert('yes start with sqroot')
  if(typing.innerText.startsWith('√')) {
    let rep = typing.innerText.replace('√', '');
    answer.innerText = Math.sqrt(rep);
    //answer.innerText = Math.sqrt(typing.innerText.replace('√', ''));

    return;
  }

   if(typing.innerText.startsWith('sin')) {
    let rep = typing.innerText.replace('sin', '');
    answer.innerText = Math.sin(rep);

    return;
   
  }

  if(typing.innerText.startsWith('cos')) {
    let rep = typing.innerText.replace('cos', '');
    answer.innerText = Math.cos(rep);
   
    return;
  }
  
  if(typing.innerText.startsWith('tan')) {
    let rep = typing.innerText.replace('tan', '');
    answer.innerText = Math.tan(rep);

    return;
   
  }

  if(tvalue.includes('sin')) {
    let valueToArray = tvalue.split('sin');
    let lvalue = valueToArray[0];
    let rvalue = valueToArray[1];  
    
    let radian = lvalue * (Math.PI / 180);
    let rst   =  rvalue * Math.sin(radian);

    answer.innerText = rst;
    return;

    //console.log(valueToArray);
  }

 // rtn.innerText = typeof typing.innerText
  answer.innerText = eval(typing.innerText);
 }

 clear.onclick = function(){
   typing.innerText = 0;
   answer.innerText = '';
 }

 bkspace.onclick = function(){
  typing.innerText = typing.innerText.slice(0, -1);
  if(typing.innerText.length <= 0)typing.innerText = 0;
 }

 //sqroot function here
 sqroot_btn.onclick = function(){
  typing.innerText = this.innerText; // this keyword is referencing the sqroot button
  //answer.innerText = Math.sqrt(typing.innerText); 
 }

 /*sin
 sin.onclick = function(){
    
 }
*/

// TO calculatte 20sin50\circ in hs yu yst multiply 20by math.sin()
 

TurnOn.addEventListener('click', function(){
  typing.innerText = 'Welcome!';
  calcScreen.classList.add('off')  // class list retruns all the class name in an element 
  let tiBtn = document.querySelectorAll('.ti');

  setTimeout(function(){
     for(let x = 0; x < tiBtn.length; x++ ){
      tiBtn[x].disabled = false;
     }
     typing.innerText = 0;
     TurnOn.disabled = true;
     calcScreen.classList.remove('off');
  }, 2000);
})
TurnOff.addEventListener('click', function(){
  typing.innerText = 'Goodbye!';
  calcScreen.classList.add('off')  // class list retruns all the class name in an element 
  let tiBtn = document.querySelectorAll('.ti');

  setTimeout(function(){
     for(let x = 0; x < tiBtn.length; x++ ){
      tiBtn[x].disabled = true;
     }
     typing.innerText = '';
     TurnOff.disabled = true;
     TurnOn.disabled = false;
     calcScreen.classList.remove('off');
  }, 2000);
})

