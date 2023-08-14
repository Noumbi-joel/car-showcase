type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "submit" | "button";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

type SearchManuFacturerProps = {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
};

interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: ICar;
};

type FilterProps = {
  manuFacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};
