import {of, Observable} from 'rxjs';

function delay(delayInMillis) {
    return (observable) => new Observable(observer => {
        const queue = [];
        let blocked = false;
        let completed = true;
        let id;
        const subscription = observable.subscribe({
            next(value) {
                if (!blocked) {
                    observer.next(value);
                    blocked = true;
                    id = setInterval(() => {
                        observer.next(queue.shift());
                        if (!queue.length) {
                            clearInterval(id);
                            blocked = false;
                            if (completed) {
                                observer.complete();
                            }
                        }
                    }, delayInMillis);
                } else {
                    queue.push(value);
                }
            },
            error(err) {
                observer.error(err);
            },
            complete() {
                completed = true;
                if (!blocked) {
                    observer.complete();
                }
            }
        });

        return () => {
            subscription.unsubscribe();
            clearInterval(id);
        }
    });
}

delay(1000)(of(1, 2, 3, 4, 5, 6, 7))
    .subscribe(x => console.log(x));