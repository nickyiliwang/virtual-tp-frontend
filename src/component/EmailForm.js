import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import EmailIcon from "@material-ui/icons/Email";
import SubjectIcon from "@material-ui/icons/Subject";
import MessageIcon from "@material-ui/icons/Message";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export const EmailForm = ({ messageToSend, updateMessageToSend }) => {
  const handleOnChange = e => {
    const { name, value } = e.target;
    const setNewMessageToSend = { ...messageToSend, [name]: value };

    updateMessageToSend(setNewMessageToSend);
  };

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
              label="From:"
              type="email"
              name="from"
              placeholder="Sarah@gmail.com"
              fullWidth
              onChange={handleOnChange}
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
              label="To:"
              type="email"
              name="to"
              placeholder="Aunt-Martha@gmail.com"
              fullWidth
              onChange={handleOnChange}
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
              label="Subject:"
              type="text"
              placeholder="Hi aunt it's your niece Sarah"
              name="subject"
              fullWidth
              onChange={handleOnChange}
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
              label="Message:"
              name="text"
              multiline
              rows="10"
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder={`Dear aunt Martha,\n\nEverything will be okay, we love you and we are all thinking of you during this time. Sending virtual hugs and love!\n\nSarah`}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        {/* Send */}
        <Grid container spacing={2} alignItems="flex-end" margin="normal">
          <Grid item>
            <SendIcon color="action" />
          </Grid>
          <Grid item xs={9}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
              fullWidth
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
