window.onload = () => {
    const Point = require('./scripts/Point');
    const Line = require('./scripts/Line');

    const pointA = new Point(10, 15);
    const pointB = new Point(27, 18);
    const line = new Line(pointA, pointB);

    document.querySelector('.points').innerText = `Точки отрезка: ${line.getStartPoint()}, ${line.getEndPoint()}`;
    document.querySelector('.length1').innerText = `Длинна отрезка: ${line.getLength()}`;

    line.setStartPoint(new Point(4, 5));
    document.querySelector('.length2').innerText = `Длинна отрезка: ${line.getLength()}`;
};


