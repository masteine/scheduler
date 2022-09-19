import { FC } from "react";
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useAppState } from "state";

interface iNavigationProps {}

export const Navigation: FC<iNavigationProps> = () => {
  const { nextDate, prevDate, setTodayDate } = useAppState((state) => state);

  return (
    <>
      <IconButton color="primary" aria-label="previous" onClick={prevDate}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={setTodayDate}
      >
        Today
      </Button>
      <IconButton color="primary" aria-label="next" onClick={nextDate}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </>
  );
};
