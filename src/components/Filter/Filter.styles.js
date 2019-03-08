import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 4fl)',
    margin: 8,
  },
  card: {
    width: 400,
    display: 'grid',
    gridTemplateRows: '1fr auto',
    minHeight: 375,
  },
});

export { styles, withStyles };
