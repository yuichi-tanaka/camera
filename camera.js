(function(){
		window.addEventListener('DOMContentLoaded',function(){
			var video = document.querySelector('video');
			var canvas = document.querySelector('canvas');
			var context = canvas.getContext('2d');
			var output = document.querySelector('output');
			canvas.addEventListener('click',function(){
					var data = canvas.toDataURL('image/jpeg');
					var img = document.createElement('img');
					img.src = data;
					//opera:config camera :allow camera to canvas copy
					output.insertBefore(img,output.firstChild);
					img.addEventListener('click',function(){
						//jpeg->octet-streamにごまかすw
						window.location.href = data.replace('image/jpeg','image/octet-stream');	
						},false);
				},false);
			video.addEventListener('play',function(){
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				(function(){
				 setInterval(function(){
					context.drawImage(video,0,0);
					 },40);
				 })();
				},false);
			if(navigator.getUserMedia){
				navigator.getUserMedia('video',function(stream){
					video.src = stream;
					},function(){
						alert('やゔぁい');
					});
			}
		},false);
	
})();

