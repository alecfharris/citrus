import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = () => ({
  image: {
    width: '100%',
    maxWidth: 500,
    background: '#FFF',
    borderRadius: '10px',
  },
  line: {
    color: '#c0c0c0',
    width: '75%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  details: {
    color: '#666',
    padding: '10px',
    display: 'table',
  },
  table: {
    display: 'table-row',
  },
  info: {
    display: 'table-cell',
    padding: '5px',
  },
  a: {
    color: 'red',
  },
  chip: {
    margin: '8px',
    backgroundColor: '#0097A7',
    color: 'white',
  },
});

const StyledRecipe = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 375px;
  width: 80%;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

export { StyledRecipe, styles, withStyles, Chip };
