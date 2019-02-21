import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const StyledList = styled.div`
  background-image: linear-gradient(#0097a7, #4fbf9e, #ccff90);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { StyledList, withStyles, List };
