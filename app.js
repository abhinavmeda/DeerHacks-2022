// https://usefulangle.com/post/352/javascript-capture-image-from-camera

let width = 300;
let height = 300;

let file = document.getElementById("image");
let canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
let ctx  = canvas.getContext("2d");

let data;

console.log(data);
file.addEventListener("change", handleFiles, false);

function handleFiles() {
console.log(data);
  const fileList = this.files;
  const uploaded_file = fileList[0];
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
		console.log(data);

	};
	console.log(data);
	document.body.appendChild(canvas);
	console.log(data);

  };
  console.log(data);
}	
console.log(data);

