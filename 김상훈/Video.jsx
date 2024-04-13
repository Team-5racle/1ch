const toggleButton = document.getElementById("toggleButton");  //button id="toggleButton"을 찾아 변수 할당
const carouselSlide = document.getElementById("carouselExampleDark");  //캐러셀 div에서 
const videos = document.querySelectorAll(".video");  //video class="video"인 모든 요소를 선택하여 NodeList 형식으로 만들어 변수 할당

// 재생, 정지버튼 토글
toggleButton.addEventListener("click", () => {
        const activeVideo = document.querySelector(".carousel-item.active video");

        if (activeVideo.paused) {  //정지 상태일 때 재생을 할 수 있음
            activeVideo.play();
            toggleButton.textContent = "정지";  //재생상태일 땐 UI/UX적으로 버튼에 정지 문구가 보여야함
        } else {  //위와 동일
            activeVideo.pause();
            toggleButton.textContent = "재생";
        }
    }
);

carouselSlide.addEventListener("slide.bs.carousel", () => {
        const prevVideo = document.querySelector(".carousel-item.active video");     // 이전 비디오를 멈춥니다.

        prevVideo.pause();  //이전 영상 정지
        prevVideo.currentTime = 0;
        toggleButton.textContent = "재생";
    }
);