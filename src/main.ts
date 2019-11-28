import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

class Component {
  private click$ = new Subject<MouseEvent>();

  constructor() {
    const button: HTMLButtonElement = document.querySelector('.click-me');

    button.addEventListener('click', (event) => {
      this.handleClick(event);
    });

    this.click$.pipe(
      debounceTime(250),
    ).subscribe((event) => {
      console.log(event);
    });
  }

  private handleClick(event: MouseEvent): void {
    this.click$.next(event);
  }
}

const component = new Component();
