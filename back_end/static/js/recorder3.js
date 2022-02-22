var recordButton3 = document.getElementById("recordButton3");
var stopButton3 = document.getElementById("stopButton3");

//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    const constraints = { audio: true };
    let chunks = [];
    let onSuccess = function(stream) {
        const mediaRecorder3 = new MediaRecorder(stream);
    
        //visualize(stream);

        recordButton3.onclick = function() {
          mediaRecorder3.start();
          console.log(mediaRecorder3.state);
          console.log("recorder started");
          
    
          stopButton3.disabled = false;
          recordButton3.disabled = true;
        }

        stopButton3.onclick = function() {
            mediaRecorder3.stop();
            console.log(mediaRecorder3.state);
            console.log("recorder stopped");
            stopButton3.disabled = true;
            recordButton3.disabled = false;
        }
        mediaRecorder3.onstop = function(e) {
            console.log("data available after MediaRecorder.stop() called.");
      
            var au = document.createElement('audio');
            var user_data = localStorage.getItem('data');

            var buttonRow3 = recordButton3.parentNode;
            var parentDivId3 = buttonRow3.parentNode.id;
            var text_num = localStorage.getItem(parentDivId3);

            var filename = user_data + "_" + text_num + ".wav";
            var li = document.createElement('li');
            au.controls = true;

            const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=MS_PCM'});
            chunks = [];
            var url = window.URL.createObjectURL(blob);
            au.src = url;
            li.appendChild(au);
            buttonRow3.appendChild(au);
            
            var upload = document.createElement('a'); // creating upload link
            upload.href="#";
            upload.innerHTML = "Hochladen";
    
            li.appendChild(document.createTextNode (" "))//add a space in between
            li.appendChild(upload)//add the upload link to li
            buttonRow3.appendChild(li);
            upload.onclick = e => {
                var fd=new FormData();
                fd.append("audio_data",blob, filename);
                console.log(fd);
                fetch('https://wavreceiver-bogdankha.pitunnel.com',  {
                method: 'POST',
                body: fd,
                })
                .then((resp) => {
                    if(resp.status === 200){
                        buttonRow3.parentNode.appendChild(document.createTextNode ("OK"));
                    }
                })
                .catch((err) => ('Error occurred', err))
            }
            console.log("recorder stopped");
        }
        mediaRecorder3.ondataavailable = function(e) {
            chunks.push(e.data);
        }
    }
    let onError = function(err) {
        console.log('The following error occured: ' + err);
    }
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
} else {
    console.log('getUserMedia not supported on your browser!');
}


