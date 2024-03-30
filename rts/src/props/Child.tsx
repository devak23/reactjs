import { FunctionComponent } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me (Child)</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
}: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}> Click Me (ChildAsFC) </button>
    </div>
  );
};

export const ChildFC: FunctionComponent<ChildProps> = ({
  color,
  onClick,
}: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me (ChildFC)</button>
    </div>
  );
};
