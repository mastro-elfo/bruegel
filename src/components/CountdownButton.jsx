import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, IconButton } from "@material-ui/core";

import AbsoluteCircularProgress from "./AbsoluteCircularProgress";

export default function CountdownButton({
  children,
  delay = 1000,
  disabled = false,
  isIcon = false,
  ...others
}) {
  // Display CircularProgress if innerLoading is true
  const [innerLoading, setInnerLoading] = useState(true);

  useEffect(() => {
    // Delay setting innerLoading
    const to = setTimeout(setInnerLoading, delay, false);
    return () => clearTimeout(to);
  }, [delay]);

  // Use Button or IconButton
  const Component = isIcon ? IconButton : Button;

  return (
    <Component color="inherit" disabled={innerLoading || disabled} {...others}>
      {children}
      {innerLoading && <AbsoluteCircularProgress />}
    </Component>
  );
}

CountdownButton.propTypes = {
  //
  delay: PropTypes.number,
  // Disable button
  disabled: PropTypes.bool,
  // If true, use IconButton; use Button otherwise
  isIcon: PropTypes.bool
};
