const video = document.getElementById("video");
const toggleButton = document.getElementById("toggleButton");
const videoSource = document.getElementById("videoSource");

//재생, 정지버튼 토글
function toggle() {
    if (video.paused) {
        video.play();
        toggleButton.textContent = "정지";
    } else {
        video.pause();
        toggleButton.textContent = "재생";
    }
}

//동영상 데이터 저장
const videos = [
    { src: "assets/patty.mp4", name: "Patty" },
    { src: "assets/cloud.mp4", name: "Cloud" },
    { src: "assets/tiger.mp4", name: "Tiger" },
    { src: "assets/wall.mp4", name: "Wall" }
];

//동영상 데이터 중 초기 인덱스 설정
let currentVideoIndex = 0;  //const로 선언하면 안됨

//비디오 데이터 인덱스 참조하여 변경
function changeVideo(index) {
    const { src, name } = videos[index];  //name 없어도 됨 console.log용
    videoSource.src = src;
    video.load();
    toggleButton.textContent = "재생";
    //console.log(name);
}

// 초기 동영상 설정
changeVideo(currentVideoIndex);

// 다음 동영상으로 전환
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    changeVideo(currentVideoIndex);
}

// 이전 동영상으로 전환
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    changeVideo(currentVideoIndex);
}