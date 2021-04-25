import {of} from 'rxjs';
import {map, filter} from 'rxjs/operators/index.js';

console.log('------- 1 -------');

of(1, 2, 3).subscribe((v) => console.log(`value: ${v}`));

console.log('------- 2 -------');

map(x => x * x)(of(1, 2, 3))
    .subscribe((v) => console.log(`value: ${v}`));

console.log('------- 3 -------');

of(1, 'a', 2, 'b', 3).pipe(
    filter(x => !isNaN(x)),
    map(x => x * x),
)
    .subscribe((v) => console.log(`value: ${v}`));
