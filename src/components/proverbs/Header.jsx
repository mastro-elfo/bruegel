import React, { Fragment } from "react";

import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, IconButton } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import GrowTypography from "../GrowTypography";

export default function ProverbsHeader({
  answers,
  loading,
  visible = false,
  onVisibileToggle = () => {}
}) {
  const { goBack } = useHistory();
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" title="Go Back" onClick={() => goBack()}>
            <ArrowBackIcon />
          </IconButton>
          <GrowTypography variant="h6" color="inherit">
            {loading ? "…" : answers.length} Proverbi
          </GrowTypography>
          <IconButton
            color="inherit"
            title={visible ? "Nascondi" : "Mostra"}
            onClick={onVisibileToggle}
          >
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
