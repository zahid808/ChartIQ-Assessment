console.log("load canvas file");


// Get canvas element
const canvas = document.getElementById("chartCanvas");
console.log("canvas", canvas)
/* canvas.width = window.innerWidth;
let canvasWidth = canvas.width;
console.log("canvas width-->", canvasWidth)

canvas.height = window.innerHeight;
let canvasHeight = canvas.height;
console.log("canvasHeight-->", canvasHeight) */

const closingPrices = [
    132.42,
    129.82,
    128.59,
    129.48,
    128.89,
    126.76,
    125.68,
    128.18,
    127.50,
    127.26,
    126.15,
    125.71,
    123.46,
    123.36,
    122.84,
    120.90,
    122.02,
    121.17,
    123.40,
    123.65]


const plotCanvas = (canvasData) => {
    let ctx;
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");

        /* ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 15, 25, 25);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50); */

        if (canvasData) {
            canvasData?.forEach((item, index) => {
                ctx.fillStyle = "green";
                ctx.fillRect(index + 1, index + 1, item, item);
            })
        }
    }
}

function calculateMovingAverage(data, windowSize) {
    const movingAverages = [];
    data.forEach((item, i) => {
        const sum = data.slice(item - windowSize, i + 1).reduce((a, b) => a + b, 0);
        const average = sum / windowSize;
        movingAverages.push(parseFloat(average.toFixed(3)));
    });
    return movingAverages;
}

const result = calculateMovingAverage(closingPrices, 300);
console.log("result --->", result)
if (result) {
    plotCanvas(result);
}




