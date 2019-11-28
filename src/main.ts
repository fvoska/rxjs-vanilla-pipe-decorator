import { debounceTime } from 'rxjs/operators';
import { Pipe } from './pipe.decorator';

class Component {
  constructor() {
    const button: HTMLButtonElement = document.querySelector('.click-me');

    button.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }

  @Pipe([
    debounceTime(250),
  ])
  private handleClick(event: MouseEvent): void {
    console.log(event);
  }
}

const component = new Component();
