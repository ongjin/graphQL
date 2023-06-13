# Nestjs GraphQL API

## 목차

- [Structure](#structure)
- [Function](#function)
- [Usage](#usage)
- [Starting the Server](#starting-the-server)

## Structure

<img src="static/images/Structure.jpg" alt="Node.js" width="250"/>

## Function

1. Common
   - 레파지토리 동적 생성 모듈
   - 암호화 모듈
2. Constants
   - enums Roles
3. Database
   - DB multiple connection
4. Decorators
   - 커스텀 데코레이터
5. Environments
   - 환경변수
6. Exceptions
   - 요청 에러 필터
   - GQL 에러 포맷 커스텀
   - GQL 에러 필터
7. Guards
   - 요청의 인증 및 권한 부여
   - 요청을 처리하기 전에 인증 또는 권한 검사를 수행
8. Interceptors
   - 로깅
   - 데이터 변환
   - 오류 처리
9. Pipes
    - 입력값 검증
    - 형식 변환

## Usage

1. Clone repository

```
  git clone http://[ID]:[giteaToken]@www.astems.co.kr:13000/SM_Dept/GQL_API.git
```

2. Cd into directory

```
  cd GQL_API/
```

3. Create .env

```
  touch .env
```

4. Add to .env

```
  PORT=<yourport>
```

5. Install dependencies using npm

```
  npm i
```

## Starting the Server

1. Start in development normal

```
  npm run start:dev
```

## Node.js Best Practices

### 1. 프로젝트 구조 관행

[✔️] 1.1 구성요소별 솔루션 구성

[✔️] 1.2 구성 요소를 계층화하고 Express를 경계 내에 유지

[❌] No neccessary - 1.3 Separate Express 'app' and 'server'

[✔️] 1.4 환경 인식, 보안 및 계층적 구성 사용

### 2. 오류 처리 관행

[✔️] 2.1 비동기 오류 처리를 위해 async-await 사용

[✔️] 2.2 내장 Error 객체만 사용

<!-- ![❔] 2.3 작동 오류와 개발자 오류 구분 -->

[✔️] 2.1 Express 미들웨어 내가 아닌 중앙 집중식으로 오류 처리

[✔️] 2.2 잘 꾸며진 logger를 사용하여 오류 가시성 향상

[✔️️] 2.3 Jest 사용 - 테스트 프레임워크를 사용하여 오류 흐름 테스트

![❔] 2.4 APM 제품을 사용하여 오류 및 다운타임 발견

[✔️] 2.5 Catch unhandled promise rejections

[✔️] 2.6 Fail fast, validate arguments using a dedicated library

### 3. 코드 스타일 관행

[✔️] 3.1 함수 이름 짓기

[✔️] 3.2 변수, 상수, 함수 및 클래스에 대한 명명 규칙 사용

[✔️] 3.3 "===" 연산자 사용

[✔️] 3.4 비동기 사용

[✔️] 3.5 화살표 함수 사용

### 4. 테스트 및 전반적인 품질 관행

[✔️] 4.1 최소한 API(구성요소) 테스트를 작성합니다

[✔️] 4.6 취약의존성 지속점검

![❔] 4.7 Tag your tests

[✔️] 4.8 Check your test coverage, it helps to identify wrong test patterns

[✔️] 4.9 오래된 패키지가 없는지 점검

[✔️] 4.10 e2e 테스트에 프로덕션 환경 사용

[✔️] 4.11 정적 분석 도구를 사용하여 정기적으로 리팩터링 실시

[✔️] 4.12 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

### 5. 운영 관행

![❔] 5.1. 모니터링

[✔️] 5.2. 스마트 로깅을 사용하여 투명성 향상

[✔️] 5.3. 종속성 잠금

![❔] 5.4. 적절한 툴을 사용하여 프로세스 가동 시간 보호

[✔️] 5.5. 모든 CPU 코어 활용

![❔] 5.6. 메모리 사용량 측정 및 보호

[✔️] 5.7. 취약점을 자동으로 탐지하는 도구 사용

[✔️] 5.8. NODE_ENV=production 설정

![❔] 5.9. 자동화된 무중단 서비스 구현 및 설계

### 6. 보안 모범 사례

[✔️] 6.1. linter security rules 사용

[✔️] 6.2. 미들웨어를 사용하여 동시 요청 제한
