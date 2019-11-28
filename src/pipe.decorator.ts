export function Pipe(
  operators: Array<Function>
) {
  return function (
    target: any, // Object's prototype
    propertyKey: string, // Key of the member that we are decorating
    descriptor: PropertyDescriptor, // Property descriptor
  ) {
    console.log(target, propertyKey, descriptor);
  }
}