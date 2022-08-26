import { FC } from "react";
import { StyledCell, StyledCellHeader, StyledCellBody } from "./styled";

interface iCellProps {
  data: Date;
  events: any[];
}

export const Cell: FC<iCellProps> = ({ data, events }) => {
  return (
    <StyledCell>
      <StyledCellHeader></StyledCellHeader>
      <StyledCellBody></StyledCellBody>
    </StyledCell>
  );
};
