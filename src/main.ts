import { debounceTime, map } from 'rxjs/operators';
import { Pipe } from './pipe.decorator';

class Component {
  private foo = 42;

  constructor() {
    const button: HTMLButtonElement = document.querySelector('.click-me');

    button.addEventListener('click', (event: MouseEvent) => {
      this.handleClick(event, 'some text');
    });
  }

  @Pipe([
    debounceTime(250),
    map((args: IArguments) => {
      const event: MouseEvent = args[0];
      const someText: string = args[1];

      return [event.target, someText];
    }),
  ])
  private handleClick(event: MouseEvent, someText: string): void {
    console.log(event, someText);
  }
}

const component = new Component();
