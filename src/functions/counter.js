export function counter() {
  const days = document.querySelector('#days span');
  const hours = document.querySelector('#hours span');
  const minutes = document.querySelector('#minutes span');
  const seconds = document.querySelector('#seconds span');

  let d = `0${8}`;
  let hr = 12;
  let min = 44;
  let sec = 28;

  days.innerHTML = d;
  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;

  const interval = setInterval(() => {

    if (d < 1) {
      days.innerHTML = '00';
      d = 0;
    }

    if (hr == 0) {
      d < 10 ? days.innerHTML = `0${d--}` : days.innerHTML = d--;
      hr = 24;
    }

    if (min == 0) {
      hr < 10 ? hours.innerHTML = `0${hr--}` : hours.innerHTML = hr--;
      min = 60;
    }

    if (sec == 0) {
      min < 10 ? minutes.innerHTML = `0${min--}` : minutes.innerHTML = min--;
      sec = 60;
    }

    if (sec <= 60) {
      sec < 10 ? seconds.innerHTML = `0${sec--}` : seconds.innerHTML = sec--;
    }
    
  }, 1000)

}