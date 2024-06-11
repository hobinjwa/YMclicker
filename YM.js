let cnt = 0;
const images = [
  "images/normal.jpg",
  "images/hit.jpg"
];
const song = document.getElementById('song');
const hit_num = document.getElementById('hit_num');
const HitText = document.getElementById('hit_text');

song.addEventListener('click', function() {
  cnt++;
  hit_num.textContent = cnt;
  song.src = images[1];
  HitText.textContent = "여명: 아이고!";

  setTimeout(() => {
    song.src = images[0];
    HitText.textContent = "여명: ㄷ?";
  }, 200); 
});