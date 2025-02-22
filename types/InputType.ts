export interface Iinput {
    name: string;
    email: string;
    company: string;
    message: string;
  }

 export interface IinputProps {
    placeholder: string;
    id: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }