import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: '10px',
    marginBottom: '10px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '95%',
    margin: '10px 0',
    color: '#3f51b5'
  },
  buttonSubmit: {
    marginRight: '10px',
  }
}))