import React from 'react';
import { withStyles, createToolkitTheme, ThemeProvider } from '@cib-jpm-ui-toolkit/theme';
import { TextField } from '@cib-jpm-ui-toolkit/text-field';
import { Button } from '@cib-jpm-ui-toolkit/button';
import '@cib-jpm-ui-toolkit/style/css/jpmuitk-base.css';
import '@cib-jpm-ui-toolkit/style/css/jpmuitk-sans-serif.css';

const styles = () => {
}

const LIGHT_THEME = createToolkitTheme('light');

const App = () => {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: ''
  });

  const handleOnChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  const handleOnClick = (e) => {
    console.log(credentials);
    //make an API call to the server passing the credentials
  }

  return (
    <div>
      <ThemeProvider theme={LIGHT_THEME}>
        <TextField id="username" inputProps={{name: 'username'}} type="text" placeholder="your SID" onChange={handleOnChange}/>
        <TextField id="password" inputProps={{name: 'password'}} type="password" placeholder="secret" onChange={handleOnChange}/>
        <Button type="submit" value="Submit" onClick={handleOnClick}>Submit</Button>
      </ThemeProvider>
    </div>
  )
}

export default withStyles(styles)(App);