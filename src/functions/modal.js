export function modal() {
  const modal = document.querySelector('.modal');
  const title = document.querySelector('.modal-content h1');
  const subtitle = document.querySelector('.modal-content p');
  const form = document.querySelector('form');
  const buttonEnv = document.querySelectorAll('.modal-content .btnEnv');
  const buttonSub = document.querySelector('.btn');
  const loading = document.querySelector('.loading');

  function openModal() {
    const name = localStorage.getItem('name');

    if (localStorage.getItem('email')) {
      modal.style.display = 'flex';
      modal.style.opacity = 1;
      title.innerHTML = `Obrigado! <br/> ${name} mas...`;
      subtitle.textContent = 'Você já adicionou um email em nosso sistema.';
      buttonEnv[1].textContent = 'Ok';
      // form.style.display = 'none';
    } else {
      modal.style.display = 'flex';
      modal.style.opacity = 1;
      loading.style.display = 'block';
      buttonEnv[1].style.display = 'none';

      setTimeout(() => {
        loading.style.display = 'none';
        form.style.display = 'block';
      }, 1000);
    }
    
  }

  function complet() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (email.length < 5 ||  name.length <= 5) {
      return null;
    } else {
      loading.style.display = 'block';
      title.textContent = '';
      subtitle.textContent = '';
      form.style.display = 'none';

      localStorage.setItem('email', email);
      localStorage.setItem('name', name);
      setTimeout(() => {
        title.innerHTML = `Obrigado! <br/> ${name}`;
        subtitle.textContent = 'Espero que goste do nosso lançamento. Estamos sempre tentando evoluir e melhorar a experiência dos nossos usuários.';
        loading.style.display = 'none';
        buttonEnv[1].innerHTML = 'De nada!';
        buttonEnv[1].style.display = 'block';
      }, 2000);
    }
  }

  function closeModal() {
    modal.style.opacity = 0;

    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }

  buttonSub.addEventListener('click' || 'touch', openModal);
  buttonEnv[0].addEventListener('click' || 'touch', complet);
  buttonEnv[1].addEventListener('click' || 'touch', closeModal)
  form.addEventListener('submit', (event) => event.preventDefault())
}