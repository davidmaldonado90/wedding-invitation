
const audio = document.getElementById("myAudio"),
      ceremonia = document.getElementById("ceremony"),
      house = document.getElementById("casa"),
      inicio = document.getElementById("begin"),
      modal = document.getElementById("myModal"),
      close = document.getElementsByClassName("close")[0],
      regalo = document.getElementById("modalGift"),
      openGift = document.getElementById("gift"),
      copyAlias = document.querySelector(".alias");
      copyCbu = document.querySelector(".cbu")


// Show the modal

modal.style.display = "block"
      
// When the user clicks on the close button, close the modal
close.onclick = function() {
    modal.classList.add('animate__animated', 'animate__zoomOut');
    modal.style.setProperty('--animate-duration', '2s');
    setTimeout(() => {
        modal.style.display = "none";
        audio.play()
    }, 1000);
}


//modal regalo
openGift.onclick = (event) => {
        regalo.style.display = "block";
        event.preventDefault();
        window.onclick = function(event) {
            if (event.target == regalo) {                
              regalo.style.display = "none";              
            }
          }
}

// When the user clicks on the close button, close the modal
close.onclick = function() {
    modal.classList.add('animate__animated', 'animate__zoomOut');
    modal.style.setProperty('--animate-duration', '2s');
    setTimeout(() => {
        modal.style.display = "none";
        audio.play()
    }, 1000);
}

ceremonia.onclick = () => {
    // check if the paragraph has already been added
    if (!house.querySelector(".new-paragraph")) {
      const newParagraph = document.createElement('p');
      newParagraph.innerHTML = ' "Amor Incondicional"<br>Ceremonia a cargo de Maria Jose Cardia';      
      newParagraph.classList.add("new-paragraph");
      house.insertBefore(newParagraph, house.querySelector(".over"));
    }
  };

function copyToClipboard() {
    const copyText = document.querySelector(".copy-text");
    const tempInput = document.createElement("input");
    tempInput.value = copyText.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
        copyText.innerHTML = "Copiado"        
        setTimeout(() => {
            regalo.style.display = "none"
            copyAlias.style.display = "block"
            copyText.innerHTML = " DORIS.COCCO.MARU"
        }, 1000);  
            
    } 

copyAlias.onclick = ()=>{
    copyToClipboard ()
    copyAlias.style.display= "none"
}

function copyToClip() {
    const copyText = document.querySelector(".copy-cbu");
    const tempInput = document.createElement("input");
    tempInput.value = copyText.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
        copyText.innerHTML = "Copiado"
        setTimeout(() => {
            regalo.style.display = "none"
            copyCbu.style.display = "block"
            copyText.innerHTML = " 0070078830004055941573"
        }, 1000);
    }
    

copyCbu.onclick = () => {
    copyToClip()
    copyCbu.style.display= "none"
}


function countdown() {
    const countDownDate = new Date("Apr 22, 2023 18:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }
  
  countdown();
  setInterval(countdown, 1000);
  