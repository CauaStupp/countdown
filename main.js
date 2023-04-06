import bgTop from './src/assets/top-image.svg';
import bgBottom from './src/assets/bottom-image.svg';
import Rocket from './src/assets/rocket.svg';

import { counter } from './src/functions/counter';
import { modal } from './src/functions/modal';

import './global.css';
import './src/styles/main.css';
import './src/styles/modal.css';

document.querySelector('#app').innerHTML = `
  <main>
    <div class="bg-effect one">
      <img src="${bgTop}"/>
    </div>
    
    <div class="content">
      <div class="timer">
        <h1>Ready to launch in...</h1>

        <div class="counter">
          <div class="count">
            <div id="days">
              <p>Dias</p>
              <span>00</span>
            </div>
            <div class="separator">:</div>
            <div id="hours">
              <p>Horas</p>
              <span>00</span>
            </div>
            <div class="separator">:</div>
            <div id="minutes">
              <p>Minutos</p>
              <span>00</span>
            </div>
            <div class="separator">:</div>
            <div id="seconds">
              <p>Segundos</p>
              <span>00</span>
            </div>
          </div>
        </div>

        <p>Inscreva-se para saber mais sobre o lançamento</p>
        <button class="btn">
          Inscreva-se
        </button>
      </div>

      <div class="rocket">
        <img src="${Rocket}" alt="Foguete"/>
      </div>
    </div>

    <div class="bg-effect two">
      <img src="${bgBottom}"/>
    </div>

    <div class="modal">
      <div class="modal-content">
        <h1>Inscreva-se no <br/> lançamento!</h1>
        <p>Insira seu E-mail e digite uma mensagem do que você espera do lançamento.</p>

        <form>
          <label>
            <span>Nome</span>
            <input type="text" id="name" name="name" placeholder="Nome completo" required/>
          </label>
          <label>
            <span>E-mail</span>
            <input type="email" id="email" name="email" placeholder="fulano@gmail.com" required/>
          </label>
          <label>
            <span>Mensagem</span>
            <textarea id="message" cols="30" rows="10" placeholder="Está muito bom!"></textarea>
          </label>

          <button class="btnEnv">Enviar</button>
        </form>
        <div class="btnEnv"></div>
        <div class="loading"></div>
      </div>
    </div>
  </main>
`

counter()
modal();