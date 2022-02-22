var recordButton1 = document.getElementById("recordButton1");
var stopButton1 = document.getElementById("stopButton1");

//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    const constraints = { audio: true };
    let chunks = [];
    let onSuccess = function(stream) {
        const mediaRecorder1 = new MediaRecorder(stream);
    
        //visualize(stream);

        recordButton1.onclick = function() {
          mediaRecorder1.start();
          console.log(mediaRecorder1.state);
          console.log("recorder started");
          
    
          stopButton1.disabled = false;
          recordButton1.disabled = true;
        }

        stopButton1.onclick = function() {
            mediaRecorder1.stop();
            console.log(mediaRecorder1.state);
            console.log("recorder stopped");
            stopButton1.disabled = true;
            recordButton1.disabled = false;
        }
        mediaRecorder1.onstop = function(e) {
            console.log("data available after MediaRecorder.stop() called.");
      
            var au = document.createElement('audio');
            var user_data = localStorage.getItem('data');

            var buttonRow1 = recordButton1.parentNode;
            var parentDivId1 = buttonRow1.parentNode.id;
            var text_num = localStorage.getItem(parentDivId1);

            var filename = user_data + "_" + text_num + ".wav";
            var li = document.createElement('li');
            au.controls = true;

            const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=MS_PCM'});
            chunks = [];
            var url = window.URL.createObjectURL(blob);
            au.src = url;
            li.appendChild(au);
            
            var upload = document.createElement('a'); // creating upload link
            upload.href="#";
            upload.innerHTML = "Hochladen";
    
            li.appendChild(document.createTextNode (" "))//add a space in between
            li.appendChild(upload)//add the upload link to li
            buttonRow1.appendChild(li);
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
                        buttonRow1.parentNode.appendChild(document.createTextNode ("OK"));
                    }
                })
                .catch((err) => ('Error occurred', err))
            }
            console.log("recorder stopped");
        }
        mediaRecorder1.ondataavailable = function(e) {
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


