import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    pagination: {
      borderRadius: 4,
      marginTop: '1rem',
      padding: '16px',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      borderWidth: 1,
      border: 'solid',
      borderColor: 'lightgrey',
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'grey'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    chipInput: {
      margin: '10px 0',
      width: '100%'
    },
    searchButton: {
      width: '100%'
    },
    searchContainer: {
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: 4
    },
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: 'column-reverse'
      }
    }
}))