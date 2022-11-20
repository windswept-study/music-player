/*
// 음악재생
document.querySelector('.btn1').addEventListener('click', function () {
  const audio1 = new Audio('#.mp3');
  audio1.loop = false; //반복재생하지않음
  audio1.volume = 0.5; //음량 설정
  audio1.play(); // "#.mp3 재생"
});
// 음악 클릭시 음악이름 출력
const btn1Click = document.getElementById('playSongName');
function btn1Click(onclick) {
  console.log((document.getElementById('playSongName').innerHTML = '200%'));
}
*/

// const musicName = songInfo(
// document.getElementsByClassName('songName').innerHTML,
// );

// 음악 리스트 클릭 시... 화면에 음악이름 표출
function btnClick(btnClicked) {
  btnClicked = document.getElementById('songName').innerHTML;
  console.log(songName);
}
function insertSong(songName) {
  if (btnClick(btnClicked) === true);
  console.log(songName);
  return;
}
