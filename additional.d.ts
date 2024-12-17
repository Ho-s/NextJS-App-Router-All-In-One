import '@testing-library/jest-dom';

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_NAVER_SITE_VERIFICATION: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}
