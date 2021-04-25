import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators/index.js";

of(1, 'a', 3).pipe(
    map(x => {
        if (isNaN(x)) throw new Error('not a number');
        return x * x;
    }),
    catchError(error => {
        console.log(error.message);
        return new Observable();
    })
)
    .subscribe((v) => console.log(`value: ${v}`));