const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDogo(){
    fetch(BREEDS_URL)
        .then(function(response){
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(data) {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Cute doggo';
            img.classList.add("added-doggo");
    
            document.querySelector('.doggos')
                .appendChild(img);
        })
}

document.querySelector('.add-doggo').addEventListener("click", addDogo)

