const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    let isUrl = new Promise((resolve, reject) => {
        setTimeout(() => (url === API_URL ? resolve("성공") : reject("실패")), 3000);
    });

    return isUrl
}

getData(API_URL).then(result => console.log(result)).catch(error => console.error(error));
getData(WRONG_URL).then(result => console.log(result)).catch(error => console.error(error));