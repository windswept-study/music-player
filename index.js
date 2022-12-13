const songNameList = ['200%', '오랜 날 오랜 밤', '낙하', 'Re-Bye'];
const albumImageList = [
  '/img/album1.jpeg',
  'img/album4.jpeg',
  'img/album3.jpeg',
  'img/album2.jpeg',
];
const mp3Array = [
  '/music/200percent.mp3',
  '/music/오랜날오랜밤.mp3',
  '/music/낙하.mp3',
  '/music/RE-BYE.mp3',
];
const i = 0;

const playButton = document.querySelector('.fa-circle-play');
//const stopButton = document.querySelector('.fa-circle-stop');
const nextSongButton = document.querySelector('.fa-backward-step');
const beforeSongButton = document.querySelector('.fa-forward-step');
const handleSongCardClick = document.querySelector('.song-card');

//클릭 시 함수 실행
playButton.addEventListener('click', playAudio);
//play stop swap 기능 추가해야함...
//stopButton.addEventListener('click', stopAudio);
nextSongButton.addEventListener('click', nextAudio);
beforeSongButton.addEventListener('click', beforeAudio);
handleSongCardClick.addEventListener('click', selectAudio);

function playAudio() {
  const musicSource = document.querySelector('#audioSource');
  console.log(musicSource);
  musicSource.src = mp3Array[i];
  musicSource.play();
}
function selectAudio() {
  document.querySelector('.playing-music').innerHTML = songNameList[i];
  document.querySelector('.playing-song-name').innerHTML = songNameList[i];
  document.querySelector('#playing-album').src = albumImageList[i];
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
