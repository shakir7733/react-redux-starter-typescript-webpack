// declare module '*.scss' {
//     const content: {[className: string]: string};
//     export default content;
// }

declare module '*.scss' {
    export const content: {[className: string]: string};
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
   
  declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
   
  declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
  }