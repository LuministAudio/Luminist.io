
 //sfx
 
 function playHoverSound(){
 const a = document.getElementById('hoverSound'); 
    a.currentTime = 0; 
    a.play();
    }

        function playHover2Sound(){
 const a = document.getElementById('hoverSound2'); 
    a.currentTime = 0; 
    a.play();
    }


//songs


        function playbreakcore(){
 const a = document.getElementById('breakcore'); 
    a.currentTime = 0; 
    a.play();
    }

        function playdarksynth(){
 const a = document.getElementById('darksynth'); 
    a.currentTime = 0; 
    a.play();
    }

        function playdnb(){
 const a = document.getElementById('dnb'); 
    a.currentTime = 0; 
    a.play();
    }

        function playdubstep(){
 const a = document.getElementById('dubstep'); 
    a.currentTime = 0; 
    a.play();
    }

            function playtrappy(){
 const a = document.getElementById('trappy'); 
    a.currentTime = 0; 
    a.play();
    }

function pause(){
document.querySelectorAll('audio, video').forEach(el => { el.pause(); el.currentTime = 0; });
}



