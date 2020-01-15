import test from 'ava';

import Point from '../scripts/Point';
import Line from '../scripts/Line';

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

test(
    'length of constructor arguments in class Point equally 2',
    t => {
        let count = 0;
        const p = new Point(1, 2, 3);

        for (let key in p) {
            count++;
        }

        t.is(count, 2);
    }
);

test(
    'class Line has instanceof Point by arguments',
    t => {
        for (let i = 0; i < 100; i++) {
            const p1 = new Point(1, 1);
            const p2 = new Point(2, 2);

                const l = new Line(p1, p2);

                t.is(l.getStartPoint() instanceof Point, true);
                t.is(l.getEndPoint() instanceof Point, true);
            }
    }
);


