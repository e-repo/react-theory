import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {grey, indigo} from "@material-ui/core/es/colors/index";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const options = [
	'Phobos',
	'Pyxis',
	'Sedna',
];

const ITEM_HEIGHT = 48;

class ButtonAppBar extends React.Component {
	onLeftIconClick = this.props.onLeftIconClick;

	state = {
		anchorEl: null,
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

    render() {
	    const { classes } = this.props;
	    const { anchorEl } = this.state;
	    const open = Boolean(anchorEl);

        return (
            <div className={classes.root} >
                <AppBar position="static" style={{background: indigo[300]}}>
                    <Toolbar>
                        <IconButton
	                        className={classes.menuButton}
	                        color="inherit" aria-label="Menu"
	                        onClick={() => this.onLeftIconClick()}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            Material UI Приложение
                        </Typography>
                        <div>
                            <IconButton
                                aria-label="More"
                                aria-owns={open ? 'long-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <MoreVertIcon style={{color: grey[50]}} />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.handleClose}
                                PaperProps={{
				                    style: {
					                    maxHeight: ITEM_HEIGHT * 4.5,
					                    width: 200,
				                    },
			                    }}
                            >
			                    {options.map(option => (
                                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
					                    {option}
                                    </MenuItem>
			                    ))}
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
