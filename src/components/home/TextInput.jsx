import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  Input: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "background-color 0.25s ease"
  },
  InputFocused: { backgroundColor: "rgba(255, 255, 255, 1)" }
}));

export default function TextInput({ onSubmit = () => {}, answers }) {
  // TODO: Only once, show a tooltip over the TextField
  // TODO: Add 'send' button

  const [value, setValue] = useState("");
  const classes = useStyles();
  const theme = useTheme();

  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <Box
      position="fixed"
      bottom={theme.spacing(1)}
      left={0}
      right={0}
      px={1}
      mx="auto"
    >
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={6} lg={4} xl={3}>
          <TextField
            fullWidth
            label="Proverbio"
            variant="outlined"
            value={value}
            onChange={({ target: { value } }) => setValue(value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              classes: { root: classes.Input, focused: classes.InputFocused }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
