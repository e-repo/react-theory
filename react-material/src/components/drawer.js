import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';

class AppDrawer extends React.Component {
	state = {
		open: false,
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		const { open } = this.props;
		console.log(open);

		const sideList = (
			<div style={
				{
					width: 260
				}
			}>
				<List component="nav">
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Drafts" />
					</ListItem>
				</List>
				<Divider />
				<List component="nav">
					<ListItem button>
						<ListItemText primary="Trash" />
					</ListItem>
					<ListItem button component="a" href="#simple-list">
						<ListItemText primary="Spam" />
					</ListItem>
				</List>
			</div>
		);

		return (
			<Drawer
				open={this.state.open}
				onClose={this.toggleDrawer('open', false)}
			>
				<div
					tabIndex={0}
					role="button"
					onClick={this.toggleDrawer('open', false)}
					onKeyDown={this.toggleDrawer('open', false)}
				>
					{sideList}
				</div>
			</Drawer>
		);
	}
}

// AppDrawer.propTypes = {
// 	classes: PropTypes.object.isRequired,
// };

export default AppDrawer;
