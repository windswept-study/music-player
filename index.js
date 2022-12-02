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

// 음악 리스트 클릭 시... 화면에 음악이름 및 앨범사진 표출
function handleSongCardClick(songName, imgSrc) {
  // 음악 이름 변경
  const selectedSongTitle = (document.getElementsByTagName(songName).innerHTML =
    songName);
  document.querySelector('.playing-music').innerHTML = selectedSongTitle;
  document.querySelector('.playing-song-name').innerHTML = selectedSongTitle;
  // 음악 사진 변경
  const selectedSongPicture = (document.getElementsByTagName(imgSrc).src =
    imgSrc);
  document.querySelector('#playing-album').src = selectedSongPicture;
}

//좋아요클릭

const heartCount = document.getElementById('hearts');
function heartClick() {
  for (var i = 0; i < heartCount.classList.length; i++) {
    if (heartCount.classList[i].indexOf('black') >= 0) {
      heartCount.classList.remove('black');
      heartCount.classList.add('red');
    } else {
      heartCount.classList.remove('red');
      heartCount.classList.add('black');
    }
  }
}
