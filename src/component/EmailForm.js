import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SubjectIcon from "@material-ui/icons/Subject";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export const EmailForm = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        {/* From */}
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <AccountCircle color="primary" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="input-with-icon-grid"
              label="Email from:"
              autoComplete
              type="email"
              name="from" 
              fullWidth
            />
          </Grid>
        </Grid>
        {/* To */}
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <AccountCircle color="secondary" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="input-with-icon-grid"
              label="Email to:"
              autoComplete
              type="email"
              name="to"
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
              name="subject"
              fullWidth
            />
          </Grid>
        </Grid>
        {/* subject */}
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
              placeholder=''
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
