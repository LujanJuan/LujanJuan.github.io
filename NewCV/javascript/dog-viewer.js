const main = document.getElementById("dog-viewer-main");
const loader = document.getElementById("dog-viewer-loader");
const breedSelect = document.getElementById("dog-viewer-breed");

async function init() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const resJson = await res.json();

  let breedOptions = "<option></option>";

  let breedList = Object.keys(resJson.message);

  for (let i = 0; i < breedList.length; i++) {
    breedOptions += `<option value=${breedList[i]}>${breedList[i]}</option>`;
  }

  breedSelect.innerHTML = breedOptions;

  const randomRes = await fetch("https://dog.ceo/api/breeds/image/random");
  const randomResJson = await randomRes.json();

  main.src = randomResJson.message;

  breedSelect.addEventListener("change", handleBreedChange);

  main.addEventListener("load", function() {
    main.classList.add("dog-viewer-show");
    loader.classList.remove("dog-viewer-show");
  });
}

async function handleBreedChange(event) {
  const breed = event.target.value;

  main.classList.remove("dog-viewer-show");
  loader.classList.add("dog-viewer-show");

  const res = await fetch(` https://dog.ceo/api/breed/${breed}/images/random`);
  const resJson = await res.json();

  main.src = resJson.message;
}

init();