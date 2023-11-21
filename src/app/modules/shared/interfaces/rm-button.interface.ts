export interface RmButton {
  text: string;
  size: ButtonSizeEnum;
  color: ButtonColorEnum ;

}

export enum ButtonSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big'
}

export enum ButtonColorEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
  DEFAULT = 'default'
}
