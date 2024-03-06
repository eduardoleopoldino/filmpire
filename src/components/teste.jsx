import Typography from '@material-ui/core/Typography';
import { styled } from '@mui/material/styles';
const PREFIX = 'MyCard';

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  menuButton: `${PREFIX}-menuButton`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  linkButton: `${PREFIX}-linkButton`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.toolbar}`]: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },

  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  [`& .${classes.drawer}`]: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
  },

  [`& .${classes.linkButton}`]: {
    '&:hover': {
      color: '#fff !important',
      textDecoration: 'none',
    },
  }
}));

export const MyCard = () => {

  return (
    <Root className={classes.root}>
      <Typography className={classes.content}>...</Typography>
      <Button className={classes.cta}>Go</Button>
    </Root>
  );
};
