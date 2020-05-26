import React, { useEffect } from 'react';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flex: '1 0 auto',
  },
  searchText: {
    flex: '0.8 0',
  },
  icon: {
    color: '#c4c4c4'
  },
}));

const CustomSearch = (props) => {
  const { options, onHide, searchText } = props;
  const classes = useStyles();

  const handleTextChange = event => {
    props.onSearch(event.target.value);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
  });

  useEffect(() => {
    document.removeEventListener('keydown', onKeyDown, false);
  });

  const onKeyDown = event => {
    if (event.keyCode === 27) {
      props.onHide();
    }
  };

  return (
    <Grow appear in={true} timeout={300}>
      <div className={classes.main} ref={el => (el)}>
        <TextField
          variant="outlined"
          placeholder={'Pretraži'}
          className={classes.searchText}
          InputProps={{
            'aria-label': options.textLabels.toolbar.search
          }}
          value={searchText || ''}
          onChange={handleTextChange}
          fullWidth={true}
          inputRef={el => (el)}

        />
        
      </div>
    </Grow>
  );
}


export default CustomSearch;