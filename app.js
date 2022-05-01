
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");

camera_button.addEventListener('click', async function() {
	const camera_constraints = { video: true, audio: false };
   	stream = await navigator.mediaDevices.getUserMedia(camera_constraints);
	video.srcObject = stream;

	const newButton = document.createElement("button");
	newButton.innerHTML = "click";
	const canvas = document.createElement("canvas");
	canvas.height = 240;
	canvas.width = 320;
	document.getElementById('display').appendChild(newButton);
	newButton.addEventListener('click', () => {
		canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
		video.remove();
		newButton.remove();
		stream.getTracks().forEach(function(track) {
			track.stop();
		});
		document.getElementById('display').appendChild(canvas);
		var img = canvas.toDataURL("image/png");
		console.log(img);
		camera_button.remove();
	})
});
