let greyscale_button = document.createElement("button");
greyscale_button.innerHTML = "greyscale";
greyscale_button.className = "btn btn-dark";

let original_button = document.createElement("button");
original_button.innerHTML = "original";
original_button.className = "btn btn-warning";

let invert_button = document.createElement("button");
invert_button.innerHTML = "invert";
invert_button.className = "btn btn-danger";

let pixelate_button = document.createElement("button");
pixelate_button.innerHTML = "pixelate";
pixelate_button.className = "btn btn-primary";

greyscale_button.addEventListener("click", () => {
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            const pixelIndex = (i + j * width) * 4;
            const r = data[pixelIndex + 0];
            const g = data[pixelIndex + 1];
            const b = data[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            data[pixelIndex + 0] = avg;
            data[pixelIndex + 1] = avg;
            data[pixelIndex + 2] = avg;
        }
    }
    var image_data = ctx.createImageData(width, height);
    image_data.data.set(data);
    console.log(data);
    ctx.putImageData(image_data, 0, 0);
});

original_button.addEventListener("click", () =>{
    var image_data = ctx.createImageData(width, height);
    data = structuredClone(original_image_data);
    image_data.data.set(data);
    console.log(data);
    ctx.putImageData(image_data, 0, 0);
});

invert_button.addEventListener("click", () => {
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            const pixelIndex = (i + j * width) * 4;
            const r = 255 - data[pixelIndex + 0] ;
            const g = 255 - data[pixelIndex + 1];
            const b = 255 - data[pixelIndex + 2];
            data[pixelIndex + 0] = r;
            data[pixelIndex + 1] = g;
            data[pixelIndex + 2] = b;
        }
    }
    var image_data = ctx.createImageData(width, height);
    image_data.data.set(data);
    console.log(data);
    ctx.putImageData(image_data, 0, 0);
});

pixelate_button.addEventListener("click", () =>{
    let array = []
    let factor = Number(prompt("Enter a factor"));
    for(let i = 0; i < height; i+=factor){
        for(let j = 0; j < width; j+=factor){
            let pixelIndex = (i + j * width) * 4;
            let r = data[pixelIndex + 0];
            let g = data[pixelIndex + 1];
            let b = data[pixelIndex + 2];
            let store = {x: i, y: j, rgb:[r, g, b]}
            array.push(store);
        }
    }
        console.log(array);
    for (let c = 0; c < array.length; c++){
        let x = array[c].x;
        let y = array[c].y;
        let rgb = array[c].rgb;
        for(let m = 0; m < factor; m++){
            for(let n = 0; n < factor; n++){
                let thingy = ((x + m) + ((y + n) * width)) * 4;
                data[thingy + 0] = rgb[0];
                data[thingy + 1] = rgb[1];
                data[thingy + 1] = rgb[1];
            }
        }
    }
    
    var image_data = ctx.createImageData(width, height);
    image_data.data.set(data);
    console.log(data);
    ctx.putImageData(image_data, 0, 0);
});