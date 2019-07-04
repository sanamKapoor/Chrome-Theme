const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const focus = document.getElementById('focus');
const name = document.getElementById('name');

function showTime(){
  let today = new Date(),
  hours = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  const amPm = hours >= 12 ? 'PM' : 'AM';

  // 12hr format

  hours = hours % 12 || 12;

  //  Output Time

 
  time.innerHTML = `${addZero(hours)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
  


  setTimeout(showTime, 1000);
}

//    Add zero in time
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//      Set bg and greeting

function setBg(){
  let today = new Date();
  let hour = today.getHours();
  
  if(hour < 12){
    document.body.style.background = "url('media/pexels-photo-2278543.jpeg') no-repeat center center/cover";

    greeting.innerHTML = 'Good Morning';
  } else if(hour < 18){
    document.body.style.background = "url('media/barn-cropland-dawn-1198507.jpg')  no-repeat center center/cover";

    greeting.innerHTML = 'Good Afternoon';
  } else {
    document.body.style.background = "url('media/astronomy-beautiful-clouds-355465.jpg')  no-repeat center center/cover";

    greeting.innerHTML = 'Good Evening';
  }
}


//      Get name 

function getName(){
  if(localStorage.getItem('name') === null){
    name.innerHTML = '[Enter Name]';
  }
  else{
    name.innerHTML = localStorage.getItem('name');
  }
}


//        Set name

function setName(e){
  if(e.type === 'keypress'){
    //      Make sure of enter key
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else{
    localStorage.setItem('name', e.target.innerText);
  }
}




//      Get focus 

function getFocus(){
  if(localStorage.getItem('focus') === null){
    focus.innerHTML = '[Enter Focus]';
  }
  else{
    focus.innerHTML = localStorage.getItem('focus');
  }
}

//        Set focus

function setFocus(e){
  if(e.type === 'keypress'){
    //      Make sure of enter key
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else{
    localStorage.setItem('focus', e.target.innerText);
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



showTime();
setBg();
getName();
getFocus();