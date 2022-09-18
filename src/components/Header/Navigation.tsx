import { FC } from "react";
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

interface iNavigationProps {}

export const Navigation: FC<iNavigationProps> = () => {
  return (
    <>
      <IconButton aria-label="previous">
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton aria-label="next">
        <KeyboardArrowRightIcon />
      </IconButton>
    </>
  );
};
