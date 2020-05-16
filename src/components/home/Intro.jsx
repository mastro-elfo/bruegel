import React, { Fragment, useEffect, useState } from "react";

import { Box, Button } from "@material-ui/core";

import ConfirmDialog from "../ConfirmDialog";

import { get as getSetting, set as setSetting } from "../actions/settings";

export default function HomeContent({ onSubmit = () => {}, answers }) {
  const [open, setOpen] = useState(getSetting("intro", v => v !== "false"));

  useEffect(() => {
    if (!open) setSetting("intro", false);
  }, [open]);

  return (
    <ConfirmDialog
      open={open}
      onClose={() => setOpen(false)}
      title=""
      confirm="Iniziamo"
      onConfirm={() => setOpen(false)}
      content={[
        <Fragment>
          <Box component="span" fontWeight="fontWeightBold">
            Pieter Bruegel
          </Box>{" "}
          è stato un pittore olandese. È generalmente indicato come il Vecchio
          per distinguerlo dal figlio primogenito, Pieter Bruegel il Giovane.
          Anche il secondogenito Jan Bruegel il Vecchio seguì le orme paterne e
          così pure il nipote Jan Bruegel il Giovane.{" "}
          <Button
            size="small"
            href="https://it.wikipedia.org/wiki/Pieter_Bruegel_il_Vecchio"
            target="_blank"
          >
            Leggi l'articolo su Wikipedia
          </Button>
        </Fragment>,
        <Fragment>
          I{" "}
          <Box component="span" fontWeight="fontWeightBold">
            Proverbi fiamminghi
          </Box>{" "}
          è un dipinto a olio su tavola (117x163 cm) di Pieter Bruegel il
          Vecchio, datato 1559 e conservato nella Gemäldegalerie di Berlino. È
          firmato in basso a destra "BRVEGEL 1559".{" "}
          <Button
            size="small"
            href="https://it.wikipedia.org/wiki/Proverbi_fiamminghi"
            target="_blank"
          >
            Leggi l'articolo su Wikipedia
          </Button>
        </Fragment>,
        <Fragment>
          Lo scopo di questo gioco è di trovare i proverbi nascosti in questo
          dipinto. Sono risposte valide sia la traduzione in italiano del
          proverbio originale, sia la versione italiana.
        </Fragment>
      ]}
    />
  );
}
