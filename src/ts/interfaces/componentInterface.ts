export interface TabsInterface {
  children: any;
  // children:React.ReactNode | React.ReactElement,
  activeTab?: string;
  noBackground?: boolean;
  type?: "block" | "normal";
  isCollapse?: boolean;
  color?: string;
}

export interface TabInterface {
  children: React.ReactNode;
  isActive?: boolean;
  label?: string;
  name?: string;
  id?: string | number;
  onClick?: Function;
  setExpand?: Function;
  isBlock?: boolean;
  onTabClick?: Function;
  isDisabled?: boolean;
  disabledMessage?: string;
}

export interface ButtonProps {
  size?: "large" | "small";
  bg?:
    | "primary"
    | "primary-light"
    | "primary-dark"
    | "danger"
    | "danger-dark"
    | "danger-light"
    | "warning"
    | "green"
    | "green-dark"
    | "secondary-light"
    | "secondary"
    | "secondary-dark"
    | "highlight"
    | "white"
    | "success"
    | "subtle"
    | "subtle-error"
    | "black";

  roundValue?: number;
  buttonType?: "normal" | "drop-button" | "icon-button" | "link-button";
  type: "button" | "button-text" | "button-outline";
  withShadow?: boolean;
  isDisabled: boolean;
  buttonClass?: string;
  dropAbove?:boolean;
  icon?: any;
  justDrop?:boolean,
  to?:string,
  rightIcon?: any;
  leftIcon?: any;
  customDropIcon?: any;
  withDrop?: boolean;
  withIcon?: boolean;
  title?: string;
  onDropClick?:any;
  onClick?: any;
  dropClass?: string;
  dropComponent?: any;
  children?: React.ReactNode;
  handleButtonOutsideClick?: Function;
}
