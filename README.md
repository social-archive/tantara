
마크다운과 html 같이 쓸 수 있는 플랫폼입니다

## 1. 개발 시 `/astro.config.mjs` 의 설정 중 프로젝트 루트를 변경해야 합니다

> base: '/tantara/',        // 루트 경로에서 배포 (또는 '/레포명/'으로 수정)  
> 이부분을 base: '/' 으로 하면 개발용이 됩니다


메인페이지 뷰 템플릿
```
/src/component/WELCOME.mdx
```

## 배포 시

npm run build
>> 빌드 완료되면 바로 푸시하면 배포 됩니다

