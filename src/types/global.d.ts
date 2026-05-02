declare module '*.css';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';

export {};
