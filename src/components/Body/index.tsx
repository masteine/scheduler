import { FC } from "react";
import { Cell } from "ui/Cell";

interface iBodyProps {}

export const Body: FC<iBodyProps> = () => {
  return (
    <div className="Body">
      <Cell></Cell>
    </div>
  );
};
