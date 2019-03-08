import styled from 'styled-components';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const StyledFridgeEntry = styled.div`
  background-image: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 667px;
`;

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: '#FFF',
  },
  container: {
    display: 'flex',
    margin: 24,
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    margin: 8,
    padding: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
  },
});

export {
  StyledFridgeEntry,
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
  Card,
  TextField,
  Typography,
  CardContent,
  Button,
  styles,
};
