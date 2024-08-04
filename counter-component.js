class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this._counter = 0;
    this.attachShadow({ mode: 'open'});

    const container = document.createElement('div');
    const display = document.createElement('div');
    const button = document.createElement('button');

    display.textContent = 0;
    button.textContent = '+';

    button.addEventListener('click', () => {
      console.log('click button')
      this.updateCount(this._counter + 1);
      display.textContent = this._counter;
    })

    container.appendChild(display);
    container.appendChild(button);

    console.log('append container')
    this.shadowRoot.append(container);
  }

  updateCount (newCount) {
    this._counter = newCount;
  }
}


customElements.define('counter-component', CounterComponent);
