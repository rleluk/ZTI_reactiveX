import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
    try {
        subscriber.next(1);
        subscriber.next(2);
        throw new Error('my error message');
        subscriber.next(3);
        subscriber.complete();
    } catch (err) {
        subscriber.error(err);
        subscriber.next(4);
    }
});

console.log('just before subscribe');
observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
});
console.log('just after subscribe');