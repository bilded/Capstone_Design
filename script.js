/*
window.onload = function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading header:', error));
};
*/
window.location.href = `contest.html?id=${comp.id}`;



let competitionIndex = 0;
let extracurricularIndex = 0;

function changeImage(type, direction) {
    const images = type === 'competition' 
        ? document.querySelectorAll('#competition-images img') 
        : document.querySelectorAll('#extracurricular-images img');

    // 인덱스 업데이트 (순환)
    if (type === 'competition') {
        competitionIndex = (competitionIndex + direction + images.length) % images.length;
        updateCarouselPosition('competition', competitionIndex);
    } else {
        extracurricularIndex = (extracurricularIndex + direction + images.length) % images.length;
        updateCarouselPosition('extracurricular', extracurricularIndex);
    }
}

function updateCarouselPosition(type, index) {
    const imagesContainer = type === 'competition' 
        ? document.getElementById('competition-images') 
        : document.getElementById('extracurricular-images');

    const imageWidth = 200; // 이미지의 너비
    const margin = 20; // 이미지 사이 여백
    const offset = -index * (imageWidth + margin); // 현재 인덱스에 따른 오프셋 계산
    imagesContainer.style.transform = `translateX(${offset}px)`;
    imagesContainer.style.transition = 'transform 0.5s ease'; // 부드러운 전환 효과
}

document.addEventListener('DOMContentLoaded', () => {
    // header.html 파일을 동적으로 불러와서 삽입하는 부분
    const headerElement = document.getElementById('header');
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerElement.innerHTML = data;
        });

    // 공모전 이미지와 상세 정보 처리
    const selectedImage = localStorage.getItem('selectedCompetitionImage');
    const competitionImage = document.getElementById('competition-image');
    const detailsElement = document.getElementById('competition-details');
    if (selectedImage) {
        competitionImage.src = selectedImage;
        detailsElement.textContent = `선택된 공모전의 상세 정보가 여기에 표시됩니다.`;
    }
});

