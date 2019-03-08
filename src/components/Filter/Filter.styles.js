import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    width: '75%',
    alignContent: 'center',
    margin: 'auto',
  },
  card: {
    alignContent: 'center',
    margin: '8px',
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
  },
  div: {
    margin: '8px',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export { styles, withStyles, Typography };
