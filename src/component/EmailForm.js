import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import EmailIcon from "@material-ui/icons/Email";
import SubjectIcon from "@material-ui/icons/Subject";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export const EmailForm = () => {
  const [messageToSend, setMessageToSend] = useState({
    to: "",
    from: "",
    subject: "",
    text: ""
  });

  const classes = useStyles();
  return (
    <div>
      <div className={classes.margin}>
        {/* From */}
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <EmailIcon color="primary" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="input-with-icon-grid"
              label="From:"
              autoComplete
              type="email"
              name="from"
              placeholder="Sarah@gmail.com"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* To */}
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <EmailIcon color="secondary" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="input-with-icon-grid"
              label="To:"
              autoComplete
              type="email"
              name="to"
              placeholder="Aunt-Martha@gmail.com"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* subject */}
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <SubjectIcon color="action" />
          </Grid>
          <Grid item xs={9}>
            <TextField
              id="input-with-icon-grid"
              label="Subject:"
              autoComplete
              type="text"
              placeholder="Hi aunt it's your niece Sarah"
              name="subject"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* message */}
        <Grid container spacing={2} alignItems="flex-end" margin="normal">
          <Grid item>
            <MessageIcon color="action" />
          </Grid>
          <Grid item xs={9}>
            <TextField
              id="input-with-icon-grid"
              label="Message:"
              name="message"
              multiline
              rows="10"
              placeholder=""
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder={`Dear aunt Martha,\n\nEverything will be okay, we love you and we are all thinking of you during this time. Sending virtual hugs and love!\n\nSarah`}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
