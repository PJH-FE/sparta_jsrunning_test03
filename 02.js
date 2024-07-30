// 2. Async / Await 다뤄보기
// 위 1번 문제에서 다루었던 비동기 처리를 async, await 키워드를 사용하여 코드를 수정해서 작성해주세요.

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    return new Promise((resolve, reject) => {
        setTimeout(() => (url === API_URL ? resolve("성공") : reject("실패")), 3000);
    });
}

async function callGetData(url){
    try {
        const result = await getData(url);
        console.log(result)
    } catch(e){
        console.log(e)
    }
}
callGetData(API_URL)
callGetData(WRONG_URL)