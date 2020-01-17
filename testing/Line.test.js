import test from 'ava';
import Line from '../scripts/Line';

const createPoint = (x, y) => ({
    getX() { return x; },
    getY() { return y; }
});

test(
    'class Line has instanceof Point by arguments',
    t => {
        const p1 = createPoint(1, 1);
        const p2 = createPoint(2, 2);

        const l = new Line(p1, p2);

        t.is(l.getStartPoint(), p1);
        t.is(l.getEndPoint(), p2);
    }
);
