import { Observable } from 'rxjs';

const foo = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next(42);
});

foo.subscribe(x => {
    console.log('x', x);
});
foo.subscribe(y => {
    console.log('y', y);
});