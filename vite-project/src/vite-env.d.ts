/// <reference types="vite/client" />
// vite-env.d.ts
declare module '*.svg' {
    const content: string;
    export default content;
  }
  declare module '*.png' {
    const content: string;
    export default content;
  }
  
// vite-env.d.ts
declare module '*.css' {
    const content: string;
    export default content;
  }
  