import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export function Pipe(
  operators: Array<Function>,
) {
  return function (
    target: any, // Object's prototype
    propertyKey: string, // Key of the member that we are decorating
    descriptor: PropertyDescriptor, // Property descriptor
  ) {
    const source$ = new Subject<IArguments>();

    const originalMethod: Function = descriptor.value;

    let _this: any;
    let boxedArguments: { args: IArguments } = { args: null };

    source$.pipe.apply(source$, [
      ...operators,
      map(() => boxedArguments.args),
    ]).subscribe((args: IArguments) => {
      originalMethod.apply(_this, args);
    });

    descriptor.value = function() {
      _this = this;
      boxedArguments.args = arguments;
      source$.next(arguments);
    }
  }
}
