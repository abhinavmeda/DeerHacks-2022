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


    let a = 0;
    let c = 0;
    let original_rgb = (a + c * width) * 4;
    let r = data[original_rgb + 0];
    let g = data[original_rgb + 1]
    let b = data[original_rgb + 1]
    for(let i = 0; i < 20; i++){
        for (let j = 0; j < 20; j++){
            let pixelIndex = (i + j * width) * 4;
            data[pixelIndex + 0] = r;
            data[pixelIndex + 1] = g;
            data[pixelIndex + 2] = b;
        }
    }
    // a == i
    // c == j
    original_rgb = (a + c + 20 * width) * 4;
    r = data[original_rgb + 0];
    g = data[original_rgb + 1]
    b = data[original_rgb + 1]
    for(let i = 0; i < 20; i++){
        for (let j = 0; j < 20 + 20; j++){
            let pixelIndex = (i + j * width) * 4;
            data[pixelIndex + 0] = r;
            data[pixelIndex + 1] = g;
            data[pixelIndex + 2] = b;
        }
    }
    original_rgb = (a + 20 + c  * width) * 4;
    r = data[original_rgb + 0];
    g = data[original_rgb + 1]
    b = data[original_rgb + 1]
    for(let i = 0; i < 20 + 20; i++){
        for (let j = 0; j < 20; j++){
            let pixelIndex = (i + j * width) * 4;
            data[pixelIndex + 0] = r;
            data[pixelIndex + 1] = g;
            data[pixelIndex + 2] = b;
        }
    }

    original_rgb = (a + 20 + c + 20  * width) * 4;
    r = data[original_rgb + 0];
    g = data[original_rgb + 1]
    b = data[original_rgb + 1]
    for(let i = 0; i < 20 + 20; i++){
        for (let j = 0; j < 20 + 20; j++){
            let pixelIndex = (i + j * width) * 4;
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