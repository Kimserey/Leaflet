/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to change the default icon, just change the properties of `L.Icon.Default.options`
 * (which is a set of `Icon options`).
 */

L.Icon.Default = L.Icon.extend({

	options: {
		iconUrl:       'marker-icon.png',
		iconRetinaUrl: 'marker-icon-2x.png',
		shadowUrl:     'marker-shadow.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {

		// @option imagePath: String
		// `L.Icon.Default` will try to auto-detect the absolute location of the
		// blue icon images. If you are placing these images in a non-standard
		// way, set this option to point to the right absolute path.
		if (!('imagePath' in this.options)) {
			var el = L.DomUtil.create('div',  'leaflet-default-icon-path', document.body);
			this.options.imagePath = L.DomUtil.getStyle(el, 'background-image')
				.replace(/^url\([\"\']?/, '')
				.replace(/[\"\']?\)$/, '');

			console.log(this.options.imagePath);
			document.body.removeChild(el);
		}

		return this.options.imagePath + L.Icon.prototype._getIconUrl.call(this, name);
	}
});
