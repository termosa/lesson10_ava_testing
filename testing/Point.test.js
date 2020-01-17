import test from 'ava';
import Point from '../scripts/Point';

test(
    'getters of class Point are working with wrong arguments',
    t => {
        for (let i = 0; i < 100; i++) {
            const x = Math.round(-100.5 + Math.random() * 201);
            const y = Math.round(-100.5 + Math.random() * 201);

            const p = new Point(x, y);

            t.is(p.getX(), x);
            t.is(p.getY(), y);
        }
    }
);
