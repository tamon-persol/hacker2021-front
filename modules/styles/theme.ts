export interface IColor {
  primary: string;
  secondary: string;
  persolGray: string;
  border: string;
  darkGray: string;
  background: string;
  background2: string;
  background3: string;
  error: string;
  strong: string;
  basic: string;
}

export interface ITheme {
  theme: {
    color: IColor;
  };
}

export const theme = {
  color: {
    primary: '#3F60EB',
    secondary: '#392FD4',
    persolGray: '#97999B',
    border: '#E8E4E4',
    darkGray: '#56595F',
    background: '#F8F8F8',
    background2: '#E1E8F4',
    background3: '#B9C4EF',
    error: '#FF1834',
    strong: '#23252D',
    basic: '#56595F'
  }
};
