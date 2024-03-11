const url =
  "https://hadeethenc.com/api/v1/hadeeths/list/?language=en&category_id=1&page=1&per_page=100";

const hadith = document.getElementById("hadith");
const newHadith = document.getElementById("new");
const authorName = document.getElementById("author");

let hadithData = [];

async function fetchHadith() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  hadithData = data.data;
  console.log(hadithData);

  displayRandomHadith();
}

function displayRandomHadith() {
  const randomIndex = Math.floor(Math.random() * hadithData.length);
  const randomHadith = hadithData[randomIndex].title;
  hadith.innerHTML = randomHadith;
}

newHadith.addEventListener("click", (e) => {
  e.preventDefault();
  fetchHadith();
});

fetchHadith();

function face() {
  var fbUrl = "https://github.com/404annas/Hadiths/tree/main";
  window.open(
    "http://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(fbUrl),
    "Facebook Window",
    "width=600,height=300,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
  );
}
