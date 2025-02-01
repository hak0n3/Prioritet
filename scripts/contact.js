function toggleForm() {
  var backform = document.querySelector('.backform');
  var backformBlackout = document.querySelector('.backform__blackout');
  var body = document.querySelector('body');

  if (backform.style.display === 'none' || backform.style.display === '') {
    backform.style.display = 'grid';
    setTimeout(function () {
      backform.classList.add('show');
      backformBlackout.style.opacity = '0.5';
      backformBlackout.classList.add('show');
      body.style.overflow = 'hidden';
    }, 10);
  } else {
    backform.classList.remove('show');
    backformBlackout.classList.remove('show');
    setTimeout(function () {
      backform.style.display = 'none';
    }, 300);
  }
}

document.querySelectorAll('.form-opener').forEach(function (button) {
  button.addEventListener('click', toggleForm);
});

document.querySelector('.backform-cross').addEventListener('click', function () {
  var backform = document.querySelector('.backform');
  var backformBlackout = document.querySelector('.backform__blackout');
  var body = document.querySelector('body');

  backform.classList.remove('show');
  backformBlackout.style.opacity = '0';
  backformBlackout.classList.remove('show');
  body.style.overflow = 'auto';
  setTimeout(function () {
    backform.style.display = 'none';
  }, 300);
});

document.getElementById('backform-id').addEventListener('submit', function () {
  var backform = document.querySelector('.backform');
  var checkmark = document.querySelector('.form__success');
  var backformBlackout = document.querySelector('.backform__blackout');
  var body = document.querySelector('body')

  backform.classList.remove('show');
  backform.style.display = 'none';
  checkmark.classList.add('show');

  setTimeout(function () {
    checkmark.classList.remove('show');
    backformBlackout.style.opacity = '0';
    backformBlackout.classList.remove('show');
    body.style.overflow = 'auto';
  }, 1800);
});