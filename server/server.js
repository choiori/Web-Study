// 1-1 express 불러오기
// express 모듈을 불러와서
const express = require("express");
const app = express();
// 이제 app 이라는 변수를 통해 서버를 관리할 수 있게 됩니다.

// 1-2 포트 할당하기
// 포트는 해당 서버가 가지고 있고 접속할 수 있게 해주는 일종의 주소이며
// 반드시 해당 서버에 적용되어 있는 포트로 접근해야만 올바르게 접속할 수 있습니다.
const PORT = process.env.PORT || 4000;

// 1-3 서버 응답 출력하기
// 만약 서버를 실행했을 땨, 서버 응답을 출력하고 싶다면 'app.get' 함수를 이용합니다.
// 2-2 연동확인 -> /api/host 의 경로로 요청을 받으면 sejun이라는 값을 응답하는 라우터
// 즉, 이제 클라이언트에서 서버에 /api/host로 보내는 모든 요청은 minsoo라는 값으로 응답을 받을 수 있게 됩니다. 
app.get("/api/host", (req, res) => {
  res.send({ host: "minsoo" });
});

// 1-4 서버 실행하기
app.listen(PORT, () => {
  console.log(`sever On : http://localhost:${PORT}/`);
});
