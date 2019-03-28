import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { white } from 'material-ui/styles/colors';

const StyledLoading = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 25vw;
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

export default StyledLoading;
