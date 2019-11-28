class Component {
  constructor() {
    const button: HTMLButtonElement = document.querySelector('.click-me');

    button.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }

  private handleClick(event: MouseEvent): void {
    console.log(event);
  }
}

const component = new Component();
