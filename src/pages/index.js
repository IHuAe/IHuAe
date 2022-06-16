// 다른 페이지에서 각 페이지들을 한꺼번에 가져올 수 있도록 index.js추가
// 사용 예시: import { Main, Login, Register } from "./pages";
export { default as Main } from '~/pages/Main';
export { default as FeelingCalendar } from '~/pages/FeelingCalendar';
export { default as Diary } from '~/pages/Diary';
export { default as EmotionSuppressor } from '~/pages/EmotionSuppressor';