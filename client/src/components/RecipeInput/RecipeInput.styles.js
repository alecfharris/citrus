import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = () => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    background: '#FFF',
  },
  container: {
    display: 'flex',
    margin: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fullTextField: {
    margin: 8,
    width: '100%',
  },
  textField: {
    margin: 8,
  },
  title: {
    fontSize: 32,
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
  },
  button: {
    justifyContent: 'center',
    display: 'flex',
  },
});

export {
  styles,
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  TextField,
  Typography,
  CardContent,
  Button,
};
