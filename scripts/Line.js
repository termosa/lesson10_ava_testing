class Line {
    constructor(startPoint, endPoint) {
        this._startPoint = startPoint;
        this._endPoint = endPoint;
    }

    getLength() {
        return Math.sqrt(Math.pow((this._endPoint.getX() - this._startPoint.getX()), 2) +
            Math.pow((this._endPoint.getY() - this._startPoint.getY()), 2))
    }

    getStartPoint() {
        return this._startPoint
    }

    getEndPoint() {
        return this._endPoint
    }

    setStartPoint(point) {
        this._startPoint = point
    }

    setEndPoint(point) {
        this._endPoint = point;
    }
}

module.exports = Line;
