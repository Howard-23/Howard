declare module "framer-motion" {
  import * as React from "react";
  
  export interface MotionProps {
    className?: string;
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    onClick?: any;
    style?: React.CSSProperties;
  }
  
  export const motion: {
    div: React.FC<React.HTMLProps<HTMLDivElement> & MotionProps>;
    span: React.FC<React.HTMLProps<HTMLSpanElement> & MotionProps>;
    h1: React.FC<React.HTMLProps<HTMLHeadingElement> & MotionProps>;
    h2: React.FC<React.HTMLProps<HTMLHeadingElement> & MotionProps>;
    h3: React.FC<React.HTMLProps<HTMLHeadingElement> & MotionProps>;
    h4: React.FC<React.HTMLProps<HTMLHeadingElement> & MotionProps>;
    p: React.FC<React.HTMLProps<HTMLParagraphElement> & MotionProps>;
    a: React.FC<React.HTMLProps<HTMLAnchorElement> & MotionProps>;
    button: React.FC<React.HTMLProps<HTMLButtonElement> & MotionProps>;
    ul: React.FC<React.HTMLProps<HTMLUListElement> & MotionProps>;
    li: React.FC<React.HTMLProps<HTMLLIElement> & MotionProps>;
    img: React.FC<React.HTMLProps<HTMLImageElement> & MotionProps>;
    section: React.FC<React.HTMLProps<HTMLElement> & MotionProps>;
    article: React.FC<React.HTMLProps<HTMLElement> & MotionProps>;
    header: React.FC<React.HTMLProps<HTMLElement> & MotionProps>;
    footer: React.FC<React.HTMLProps<HTMLElement> & MotionProps>;
    nav: React.FC<React.HTMLProps<HTMLElement> & MotionProps>;
    main: React.FC<React.HTMLProps<HTMLElement> & MotionProps>;
  };
  
  export type Variants = {
    [key: string]: any;
  };
  
  export type HTMLMotionProps<T extends keyof JSX.IntrinsicElements> = React.HTMLProps<
    T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : any : any
  > & MotionProps;
  
  export function AnimatePresence(props: { children: React.ReactNode; mode?: string }): React.ReactElement;
}
