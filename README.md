# React + Kakao Map

api doc: https://apis.map.kakao.com/web/guide/

## Requirements

### 1. Kakao 지도 JavaScript API는 키 발급을 받아야 사용할 수 있다

### 2. Kakao account가 필요하다. (한국인은 이미 있을것이라고 생각)

### 3. [카카오 개발자 사이트](https://developers.kakao.com)로 이동

![스크린샷 2024-01-01 오후 3 40 10](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/843656e0-97ac-49a6-9e57-7593c29da308)

### 4. 내 애플리케이션 등록 (앱 이름에 kakao 라는 단어가 들어가면 안되는듯함)

![스크린샷 2024-01-01 오후 3 40 42](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/cee7f674-7a9b-4f23-92cc-8d5bbb410066)

### 5. 웹 플랫폼 추가: 앱 선택 - [플랫폼] - [Web 플랫폼 등록] - 사이트 도메인 등록 (ex: localhost:3000)

![스크린샷 2024-01-01 오후 3 45 41](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/c674ed04-eef5-43f2-9c6c-fe7403684d2b)
![스크린샷 2024-01-01 오후 3 46 47](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/f6f84e45-b27a-4009-a4c1-a6e3bedb33a9)

### 6. 앱 키 기억하기

![스크린샷 2024-01-01 오후 3 48 51](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/08c68003-79bb-4e1a-badb-138816eaf198)

### 7. 지도를 담을 Component 생성

```JS
<Center w="100%" h="100vh">
    <Box w="500px" h="500px" border="1px solid teal" />
</Center>
```

### 8. `public/index.html` 파일에 JavaScript Key와 함께 선언

`<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>`
추가적으로 html 파일에서 환경변수를 사용할때는 % 사이에 환경변수를 넣어 호출한다. `%환경변수%`

```JS
<script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%REACT_APP_JAVASCRIPT_KEY%&libraries=services,clusterer"
></script>
```

# https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro

# https://github.com/JaeSeoKim/react-kakao-maps-sdk

# https://github.com/JaeSeoKim/kakao.maps.d.ts

1. `npm install kakao.maps.d.ts --save-dev`
2. tsconfig.json의 `compilerOptions.typescript`에 kakao.maps.d.ts 추가
   ![스크린샷 2024-01-01 오후 5 19 45](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/6e2f80be-b68e-429b-9b59-26399bf5ca1a)

3. `npm install react-kakao-maps-sdk`
4. 지도 그리기

```JS
<Map
    center={{ lat: 33.5563, lng: 126.79581 }}
    style={{ width: "100%", height: "500px" }}
    level={3}
>
    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Not easy</div>
    </MapMarker>
</Map>
```
![스크린샷 2024-01-01 오후 6 01 25](https://github.com/jh0152park/React-Kakao-Map/assets/118165975/af772c8d-b630-46ce-b2d6-f2cabcc1b613)
