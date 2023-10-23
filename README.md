# Home Quiz - Manage Reservations

## 최종 구현 화면

![conclusions](https://github.com/Real-Bird/home-quiz-manage-reservations/assets/83404864/3cea84df-8b1a-43f0-9c30-a20843adda2c)

## 데모

<https://manage-reservations.netlify.app/>

## 사용 패키지

```
React, Vite, TypeScript, Tailwind CSS, React Router, React Datepicker
```

## 주안점

### 1. 페이지 분할

`React Router`를 이용해 `예약 리스트`, `예약 만들기`, `날짜 고르기`, `예약 수정하기` 페이지로 분할했습니다.

루트 컴포넌트의 하위 route로 구성하여 상대 경로로 페이지 전환이 일어나도록 구현했습니다. 모달을 오픈하면 경로에 해당하는 페이지가 열립니다.

### 2. 상태 관리

`Context API`와 `useReducer`를 조합하여 페이지 간의 상태를 공유하며 관리했습니다.

새로운 예약을 추가하거나 기존 예약을 수정하면 변경 사항이 `예약 리스트 context`에 반영되어 상태가 유지됩니다.

예약 카드를 삭제하면 예약 리스트 수가 줄어들어 메인 타이틀 옆의 숫자가 줄어듭니다.

`Seated`를 틀릭하면 화면에는 보이지 않지만 context에는 남아 있어 숫자가 줄어들지 않습니다.

`예약 만들기`나 `예약 수정` 역시 context로 관리하지만 페이지를 벗어나면 초깃값으로 재할당됩니다.

### 3. React Datepicker 라이브러리 사용

`input`의 속성만으로 스타일링과 기능 구현이 원활하지 않아 `React Datepicker` 라이브러리를 사용했습니다.

선택의 이유는 주간 다운로드 수가 일정하고 문서만 보고도 커스텀이 쉬웠기 때문입니다.

## 느낀점

1. 스타일링에 많은 시간을 할애해 코드 정리가 되지 않은 부분이 아쉽습니다. 제출 이후 복기하면서 정리할 예정입니다.
2. 몇 가지 기능을 처음 사용해 보면서 시야가 확장되는 즐거움을 얻었습니다. 재미있는 과제를 내주셔서 감사합니다.
