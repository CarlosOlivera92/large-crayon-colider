import { InputType } from "@data/types/Input";

export interface IInputsProps {
    label: string;
    id: string;
    type?: InputType;
    accept?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}