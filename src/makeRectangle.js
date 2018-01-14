export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);

export const width = rectangle => car(cdr(rectangle));
export const height = rectangle => cdr(cdr(rectangle));

export const square = rectangle => width(rectangle) * height(rectangle);
export const perimeter = rectangle => 2 * (width(rectangle) + height(rectangle));

export const containsTheOrigin = rectangle => {
    const leftTopPoint = startPoint(rectangle);
    const leftBottomPoint =  makePoint(getX(leftTopPoint), getY(leftTopPoint) - height(rectangle));
    const rightBottomPoint =  makePoint(getX(leftTopPoint) + width(rectangle), getY(leftTopPoint) - height(rectangle));
    const rightTopPoint = makePoint(getX(leftTopPoint) + width(rectangle), getY(leftTopPoint) - height(rectangle));
    return quadrant(leftTopPoint) === 2 && quadrant(leftBottomPoint) === 3 && quadrant(rightBottomPoint) === 4;
};
