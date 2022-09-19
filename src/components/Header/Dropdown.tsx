import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppState } from "state";
import { tUseAppState } from "state/types";

export const Dropdown = () => {
  const { changeView, view } = useAppState((state) => ({
    view: state.view,
    changeView: state.changeView
  }));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelectView = (event: MouseEvent) => {
    changeView(event.currentTarget.id as tUseAppState["view"]);
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {view}
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem id="day" onClick={onSelectView} disableRipple>
          Day
        </MenuItem>
        <MenuItem id="week" onClick={onSelectView} disableRipple>
          Week
        </MenuItem>
        <MenuItem id="month" onClick={onSelectView} disableRipple>
          Month
        </MenuItem>
        <MenuItem id="year" onClick={onSelectView} disableRipple>
          Year
        </MenuItem>
      </Menu>
    </div>
  );
};
