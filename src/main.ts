import { debounceTime } from 'rxjs/operators';
import { Pipe } from './pipe.decorator';

class Component {
  private foo = 42;

  constructor() {
    const button: HTMLButtonElement = document.querySelector('.click-me');

    button.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }

  @Pipe([
    debounceTime(250),
  ])
  private handleClick(_event: MouseEvent): void {
    console.log(this.foo);
  }
}

const component = new Component();
