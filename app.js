var video_player_div = document.getElementById('take_photo');
var video = document.getElementById('video');
var on_button = document.getElementById('on');
var off_button = document.getElementById('off');
var stream;
const width = 320;
const height = 320;


var take_picture = document.createElement('button');
take_picture.innerHTML = 'click';

var canvas = document.createElement('canvas');
canvas.width = 320;
canvas.height = 240; 

var photo = document.createElement('img');
on_button.addEventListener('click', async () =>{
	stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
	video.srcObject = stream;
	video.play();
	on_button.disabled = true;
	off_button.disabled = true;
	video_player_div.appendChild(take_picture);
})

take_picture.addEventListener('click', () =>{
	var context = canvas.getContext('2d');
	context.drawImage(video, 0, 0, width, height);
	var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
	take_picture.remove();
	stream.getVideoTracks()[0].stop();
	video.remove();
	on_button.remove();
	off_button.remove();
	document.getElementById('video_player').appendChild(canvas);
	var rect = canvas.getBoundingClientRect();
	// console.log(rect.top, rect.right, rect.bottom, rect.left);
	var image_data = context.getImageData(rect.left, rect.top, width, height).data;
	console.log(image_data);
	// for(let i = 0; i < width; i++){
	// 	for(let j = 0; j < height; j++){
	// 		const pixel_index = (i * j * width) * 4;
	// 		const r = image_data[pixel_index + 0];
	// 		const g = image_data[pixel_index + 1];
	// 		const b = image_data[pixel_index + 2];
	// 		const a = image_data[pixel_index + 3];
	// 		console.log(r, g, b, a);
	// 	}
	// }
	console.log(image_data);	
	// context.putImageData(image_data, 320, 240);

})

off_button.addEventListener('click', () => {

	stream.getVideoTracks()[0].stop();

})
