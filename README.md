# React로 블로그 만들기

[sejun3278님의 블로그][https://m.blog.naver.com/sejun3278/221569414455]를 보고 따라 만들어 보았습니다.

실습환경

- mac
- yarn 1.21.1
- vscode
- node v12.14.0

0. React 설치

   ```zsh
   cd ~/설치하고싶은경로
   yarn create react-app <디렉토리명>

   // 리액트 실행
   cd <디렉토리명>
   yarn start
   ```

1. React 서버 구축하기

   1-1. express 모듈 설치
   1-2. 포트 할당하기

   ```javascript
   const PORT = process.env.PORT || 4000;
   ```

   1-3. 서버 응답 출력하기

   ```javascript
   // 해당 경로로 들어갔을 경우 응답을 렌더링
   app.get("/", (req, res) => {
     res.send("Response Complete");
     // localhost:4000/ 에 들어가면 화면에 응답이 출력한 것을 볼 수 있다.
   });
   ```

   1-4. 서버 실행하기

   ```javascript
   // app의 listen 메소드를 사용해서 서버를 읽어올 수 있습니다.
   app.listen(PORT, () => {
     console.log(`server on : http://localhost:${PORT}/`);
   });
   ```

   ```zsh
   node server.js
   ```

1. 서버와 클라이언트 연동하기
   2-1. 서버와 클라이언트를 연동하기 위해서는 'Webpack'을 기본적으로 사용하게 되는데 'Webpack'은 의존 관계에 있는 모듈들을 하나의 자바스크립트 파일로 만들어주는 역할을 합니다.

   yarn eject라는 명령어를 통해 webpack을 사용할 수 있는데 그 전에 자동으로 설치된 git의 변동사항들을 commit 하고 명령어를 실행해주어야 합니다.

   ```zsh
   git add .
   git commit -m "first commit"
   yarn eject
   ```

   config폴더 안에 있는 webpack.config.dev.js로 들어가서 수정을 해주어야 합니다.
   만약 webpack.config.dev.js 가 없다면 (저도 없었습니다.)
   http://blogattach.naver.net/f96ce5504c7273c5e3096b536581f28a277486bd/20190624_141_blogfile/sejun3278_1561359470930_1ZjI6B_js/webpack.config.dev.js
   링크를 누르셔서 다운 받으시면 되겠습니다.

   138번 줄에 있는 plugins : [
   .... 위에 다음 코드를 추가해주시면 됩니다.
   ]

   ```javascript
   devServer : {
       port : 4000,
       open : true,
       proxy : {
           "/" : "http://localhost"
       }
   },
   plugins : [
       new webpack ....
   ]
   ```

3) 서버와 클라이언트 동시에
