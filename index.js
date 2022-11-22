/*
// 음악재생
document.querySelector('.btn1').addEventListener('click', function () {
  const audio1 = new Audio('#.mp3');
  audio1.loop = false; //반복재생하지않음
  audio1.volume = 0.5; //음량 설정
  audio1.play(); // "#.mp3 재생"
});
// 음악 클릭시 음악이름 출력
const btn1Click = document.getElementById('play-song-name');
function btn1Click(onclick) {
  console.log((document.getElementById('play-song-name').innerHTML = '200%'));
}
*/

// const musicName = songInfo(
// document.getElementsByClassName('songName').innerHTML,
// );

// 음악 리스트 클릭 시... 화면에 음악이름 표출
function buttonClick(id) {
  const selectedSongTitle = document.getElementById(id).innerHTML;
  const playSongNameSpan = (document.querySelector(
    '.playing-song-name',
  ).innerHTML = selectedSongTitle);
  const playSongNameHead = (document.querySelector('.playing-music').innerHTML =
    selectedSongTitle);
  console.log(playSongNameSpan);
  console.log(playSongNameHead);
}
