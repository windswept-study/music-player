// 음악 리스트 클릭 시... 화면에 음악이름 및 앨범사진 표출
const mp3Array = [
  '/music/200percent.mp3',
  '/music/오랜날오랜밤.mp3',
  '/music/낙하.mp3',
  '/music/RE-BYE.mp3',
];
var i = 0;

const playButton = document.querySelector('.fa-circle-play');
//const stopButton = document.querySelector('.fa-circle-stop');
const nextSongButton = document.querySelector('.fa-backward-step');
const beforeSongButton = document.querySelector('.fa-forward-step');
playButton.addEventListener('click', playAudio);
//play stop swap 기능 추가해야함...
//stopButton.addEventListener('click', stopAudio);
nextSongButton.addEventListener('click', nextAudio);
beforeSongButton.addEventListener('click', beforeAudio);

function playAudio() {
  const musicSource = document.querySelector('#audioSource');
  console.log(musicSource);
  musicSource.src = mp3Array[i];
  musicSource.play();
}
function handleSongCardClick(songName, imgSrc, i) {
  // 음악 이름 변경
  document.querySelector('.playing-music').innerHTML = songName;
  document.querySelector('.playing-song-name').innerHTML = songName;
  // 음악 사진 변경
  document.querySelector('#playing-album').src = imgSrc;
  // 음악 실행
  playAudio(mp3Array[i]);
}

function nextAudio() {
  document.getElementById('next-song-button');
  if (mp3Array.length - 1 <= i) {
    i = 0;
  } else {
    i++;
  }
  playAudio();
}

function beforeAudio() {
  document.getElementById('before-song-button');
  if (i <= 0) {
    i = 2;
  } else {
    i--;
  }
}

//좋아요클릭
function handleHeartClick() {
  const heartButton = document.getElementById('hearts');
  heartButton.classList = heartButton.className === 'black' ? 'red' : 'black';
}
