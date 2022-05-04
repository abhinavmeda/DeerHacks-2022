// https://usefulangle.com/post/352/javascript-capture-image-from-camera

let width = 500;
let height = 500;

let file = document.getElementById("image");
let canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = width;
let button_div = document.getElementById("buttons");
let ctx  = canvas.getContext("2d");
let data;
let original_image_data; 

// custom event to trigger when canvas is filled with image
const event = new Event('filled');
canvas.addEventListener('filled', function (e) { 
	console.log(data);
	button_div.appendChild(original_button);
	button_div.appendChild(pixelate_button);
	button_div.appendChild(invert_button);
	button_div.appendChild(greyscale_button);
}, false);


file.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files;
  const uploaded_file = fileList[0];
  document.getElementById("text").innerHTML = uploaded_file.name;

  const reader = new FileReader();
  
  reader.readAsDataURL(uploaded_file);
  reader.onload = function(){

	let dataURL = reader.result;
	let img = document.createElement("img");
	img.src = dataURL;
	img.width = width;
	img.height = height;
	img.onload = function() {
		ctx .drawImage(img, 0, 0, canvas.width, canvas.height);
		data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
		original_image_data = structuredClone(data)
		canvas.dispatchEvent(event);
	};
	document.getElementById("display").appendChild(canvas);
  };
}	


