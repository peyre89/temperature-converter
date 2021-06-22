function round(num: number): number {
    const m = Number((Math.abs(num) * 100).toPrecision(15));

    return Math.round(m) / 100 * Math.sign(num);
}

function fahrenheitToCelsius(val: number): number {
    let result = (val - 32) / 1.8;
    result = round(result);

    return result;
}

function kelvinToCelsius(val: number): number {
    let result = val - 273.15;
    result = round(result);

    return result;
}

export { fahrenheitToCelsius, kelvinToCelsius };
