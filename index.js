// 음악 리스트 클릭 시... 화면에 음악이름 및 앨범사진 표출

function handleSongCardClick(songName, imgSrc, audioId) {
  // 음악 이름 변경
  document.querySelector('.playing-music').innerHTML = songName;
  document.querySelector('.playing-song-name').innerHTML = songName;
  // 음악 사진 변경
  document.querySelector('#playing-album').src = imgSrc;
  // 음악 실행
  const playAudio = document.getElementById(audioId);
  playAudio.play();
}

//좋아요클릭
function handleHeartClick() {
  const heartButton = document.getElementById('hearts');
  heartButton.classList = heartButton.className === 'black' ? 'red' : 'black';
}
