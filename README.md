# 프로젝트 이름

![프로젝트 로고](로고 이미지 링크)


## 🥔 프로젝트 이름

> 프로젝트 요약</br>
> 프로젝트 요약</br>
> 프로젝트 요약

## 🎯 프로젝트의 목적(Purpose)

> 주관</br>
> 주제</br>
> 아이디어</br>
>
> 프로젝트 기간 : 2025/01/24 ~ 2025/02/26

## 🤩 팀원들(Team Members)

|                                      FE developer                                       |                                  FE Developer                                   |
|:-------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|
|                       [강신영](https://github.com/sinyoung6491)                        |                      [오태준](https://github.com/taejun0)                          |
| <img src="https://avatars.githubusercontent.com/u/138271153?v=4" width="300" /> | <img src="https://avatars.githubusercontent.com/u/164321668?v=4" width="300" /> |

## 🛠️ 기술 스택(Tech)
![React](https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD700?style=for-the-badge&logo=javascript&logoColor=black)

### 협업 툴 (Tools)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

## GitHub Flow
![github-flow](https://i.ibb.co/p3Gfnvs/Kakao-Talk-20241115-230442579-01.png)

# 🎯 Branch Convention & Git Convention

## 🎯 Git Convention

- 🎉 **Start:** Start New Project [:tada:]
- ✨ **Feat:** 새로운 기능을 추가 [:sparkles:]
- 🐛 **Fix:** 버그 수정 [:bug:]
- 🎨 **Design:** CSS 등 사용자 UI 디자인 변경 [:art:]
- ♻️ **Refactor:** 코드 리팩토링 [:recycle:]
- 🔧 **Settings:** Changing configuration files [:wrench:]
- 🗃️ **Comment:** 필요한 주석 추가 및 변경 [:card_file_box:]
- ➕ **Dependency/Plugin:** Add a dependency/plugin [:heavy_plus_sign:]
- 📝 **Docs:** 문서 수정 [:memo:]
- 🔀 **Merge:** Merge branches [:twisted_rightwards_arrows:]
- 🚀 **Deploy:** Deploying stuff [:rocket:]
- 🚚 **Rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck:]
- 🔥 **Remove:** 파일을 삭제하는 작업만 수행한 경우 [:fire:]
- ⏪️ **Revert:** 전 버전으로 롤백 [:rewind:]

## 🪴 Branch Convention (GitHub Flow) (추후 수정)

- `main`: 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- `develop`: 기능 개발 후 배포 전 최종 테스트를 위한 브랜치
- `feature/{description}`: 새로운 기능을 개발하는 브랜치
    - 예: `feature/social-login`

### Flow

1. `main` 브랜치에서 새로운 브랜치를 생성.
2. 작업을 완료하고 커밋 메시지에 맞게 커밋.
3. Pull Request를 생성 / 팀원들의 리뷰.
4. 리뷰가 완료되면 `main` 브랜치로 병합.
5. 병합 후, 필요시 배포.

**예시**:

```bash
# 새로운 기능 개발
git checkout -b feature/social-login

# 작업 완료 후, main 브랜치로 병합
git checkout main
git pull origin main
git merge feature/social-login
git push origin main
```
