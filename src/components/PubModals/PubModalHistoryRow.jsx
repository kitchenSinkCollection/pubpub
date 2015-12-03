import React, { PropTypes } from 'react';
import Radium from 'radium';
import dateFormat from 'dateformat';
// import {globalStyles} from '../../utils/styleConstants';

let styles = {};

const PubModalHistoryRow = React.createClass({
	propTypes: {
		historyItem: PropTypes.object,
		diffItem: PropTypes.object,
		index: PropTypes.number,
		setDiffViewer: PropTypes.func,
	},

	getDefaultProps: function() {
		return {
			historyItem: {},
		};
	},

	render: function() {
		// const diffObject = this.props.historyItem.diffObject || {diffMarkdown: []};
		// console.log('diffObject.diffMarkdown', diffObject.diffMarkdown);
		return (
			<div style={[styles.container, this.props.index === 0 && styles.noBottomBorder]}>

				<div style={styles.versionDetails}>
					<div style={styles.versionTitleLine}>
						<span style={styles.versionNumber}>{this.props.index + 1}.</span>
						<span style={styles.versionStatus}>{this.props.historyItem.status === 'Draft' ? 'Draft Version' : 'Peer-Review Ready'}</span>
						<span style={styles.versionDate}>{dateFormat(this.props.historyItem.publishDate, 'mm/dd/yy, h:MMTT')}</span>
					</div>

					<div style={styles.versionChangesLine}>
						<span style={styles.additions}>{this.props.historyItem.diffObject.additions} additions</span> 
						<span style={styles.changeCountSeparator}>|</span> 
						<span style={styles.deletions}>{this.props.historyItem.diffObject.deletions} deletions</span>
					</div>

					<div style={styles.versionMessage}>
						{this.props.historyItem.publishNote}
					</div>
				</div>

				<div style={styles.versionButtons}>
					<div style={styles.versionButtons}>
						<div key={'historyRowViewButton-' + this.props.index} style={styles.historyButton} onClick={this.props.setDiffViewer(this.props.index)}>View Changes</div>
						<div key={'historyRowReadButton-' + this.props.index} style={styles.historyButton}>Read pub at this point</div>
					</div>
				</div>
					
					
				<div style={styles.clearFix}></div>
							
			</div>
		);
	}
});

export default Radium(PubModalHistoryRow);

styles = {
	container: {
		paddingBottom: 30,
		marginBottom: 30,
		borderBottom: '1px solid #ccc',
	},
	noBottomBorder: {
		borderBottom: '0px solid #ccc',
		marginBottom: 0,
	},
	clearFix: {
		display: 'table',
		clear: 'both',
	},

	versionDetails: {
		width: 'calc(100% - 175px)',
		float: 'left',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			float: 'none',
			width: '100%',
		}
	},
	versionButtons: {
		width: 175,
		float: 'left',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			float: 'none',
			width: '100%',
		}
	},

	versionTitleLine: {
		fontFamily: 'Courier',
		color: '#555',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			fontSize: '20px',
		}
	},
	versionChangesLine: {
		paddingLeft: 40
	},
	versionMessage: {
	
		padding: '15px 15px 0px 40px',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			padding: '15px 15px 30px 40px',
			fontSize: '20px',
		}
	},
	versionNumber: {
		width: 40,
		display: 'inline-block',
		fontSize: '16px',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			fontSize: '20px',
		}
	},
	versionStatus: {
		paddingRight: 10,
		fontSize: '16px',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			fontSize: '20px',
		}
	},
	versionDate: {
		fontSize: '14px',
		color: '#666',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			display: 'block',
			paddingLeft: 40,
			fontSize: '18px',
		}
	},
	additions: {
		fontSize: '14px',
		color: 'green',
		fontFamily: 'Courier',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			display: 'block',
			fontSize: '18px',
		}
	},
	deletions: {
		fontSize: '14px',
		color: 'red',
		fontFamily: 'Courier',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			display: 'block',
			fontSize: '18px',
		}
	},
	additionsText: {
		backgroundColor: 'green',
	},
	deletionsText: {
		backgroundColor: 'red',
	},
	changeCountSeparator: {
		display: 'inline-block',
		width: 20,
		textAlign: 'center',
		color: '#ccc',
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			display: 'none',
		}
	},
	historyButton: {
		textAlign: 'right',
		fontSize: '14px',
		color: '#888',
		paddingTop: 5,
		':hover': {
			cursor: 'pointer',
			color: 'black',
		},
		'@media screen and (min-resolution: 3dppx), (max-width: 767px)': {
			display: 'block',
			paddingTop: 15,
			fontSize: '18px',
		}
	}

};
