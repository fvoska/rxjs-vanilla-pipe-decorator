import { Pipe } from './pipe.decorator';

class Component {
  constructor() {
    const button: HTMLButtonElement = document.querySelector('.click-me');

    button.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }

  @Pipe([])
  private handleClick(event: MouseEvent): void {
    console.log(this, event);
  }
}

const component = new Component();
