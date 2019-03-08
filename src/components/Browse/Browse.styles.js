import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const StyledBrowse = styled.div`
  background-image: linear-gradient(#0097a7, #4fbf9e, #ccff90);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export { StyledBrowse, withStyles, Typography, Modal, Button };
