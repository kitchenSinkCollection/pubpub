import React from 'react';
import {SimpleSelect} from 'react-selectize';
// import {openModal} from '../../actions/editor';


export const src = {
	title: 'src',
	default: '',
	defaultValue: '',
	defaultString: '',
	valueFunction: function(ref) {
		const val = ref.value();
		return (val) ? val.value : null;
	},
	component: function(pluginProp, value, props, styles) {
		const title = pluginProp.title;

		const assets = (props.assets) ? Object.values(props.assets).map( function(asset) { return {'value': asset.refName, 'label': asset.refName};}) : [];
		assets.push({'value': 'upload', 'label': 'Upload New'});

		const val = (value) ? {'value': value, 'label': value } : undefined;

		const onValueChange = function(changedValue, callback) {
			if (changedValue.value === 'upload') {
				console.log('Trying to upload!!!');
			}
			callback();
		};

		let elem;
		if (val) {
			elem = <SimpleSelect onValueChange={onValueChange} ref={'pluginInput-' + title} name={title} id={title} options={assets} value={val}/>;
		} else {
			elem = <SimpleSelect onValueChange={onValueChange} ref={'pluginInput-' + title} name={title} id={title} options={assets}/>;
		}
		return elem;
	}
};

export const width = {
	title: 'width',
	defaultValue: '100%',
	defaultString: '100%',
	value: '',
};


export const height = {
	title: 'height',
	defaultValue: 'auto',
	defaultString: 'auto',
	value: '',
};

export const align = {
	title: 'align',
	defaultValue: 'center',
	defaultString: 'center',
	value: '',
};