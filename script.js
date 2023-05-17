const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById('typeDisplay')
/*
非同期処理
非同期でランダムな文章を取得する必要がある。
情報を同期して取ってくるのが大変だから。
*/

function GetRandomSentence(){
  //APIを叩くときはfetchを使う。
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) =>response.json())
  .then((data) => data.content);
}

/*
ランダムな文章を取得して表示する
非同期処理は待たないといけない。
*/
async function RanderNextSentence() {
  const sentence = await GetRandomSentence();
  console.log(sentence);

  typeDisplay.innerText = sentence;
}

RanderNextSentence();