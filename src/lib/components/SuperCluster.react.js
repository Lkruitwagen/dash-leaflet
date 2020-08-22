import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withLeaflet} from "react-leaflet";
// import LeafletSuperCluster from '../LeafletSuperCluster';
import GeoJSON from './GeoJSON.react';

/**
 * LayerGroup is a wrapper of LayerGroup in react-leaflet.
 * It takes similar properties to its react-leaflet counterpart.
 */
class SuperCluster extends GeoJSON {

    render() {
        let obj = super.render();
        console.log(obj)
        return obj
    }

}

SuperCluster.defaultProps = {
    // Dash event props.
    n_clicks: 0,
    // Simple props.
    format: "geojson",
    zoomToBoundsOnClick: true,
    spiderfyOnMaxZoom: true,
    // Options props.
    clusterOptions: {
        iconSize: 40,
        classNames: [
            {minCount: 0, className: "marker-cluster marker-cluster-small"},
            {minCount: 100, className: "marker-cluster marker-cluster-medium"},
            {minCount: 1000, className: "marker-cluster marker-cluster-large"},
        ]
    },
    spiderfyOptions: {
        spiderfyDistanceMultiplier: 1,
        spiderLegPolylineOptions: {weight: 1.5, color: '#222', opacity: 0.5},
    }
};

SuperCluster.propTypes = {

    /**
     * Data (consider using url for better performance).
     */
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    /**
     * Url to data (use instead of data for better performance).
     */
    url: PropTypes.string,

    /**
     * Data format.
     */
    format: PropTypes.oneOf(["geojson", "geobuf"]),

    /**
     * If true, zoom on cluster click.
     */
    zoomToBoundsOnClick: PropTypes.bool,

    /**
     * If true, marker that are not resolved at max zoom level will be spiderfied on click.
     */
    spiderfyOnMaxZoom: PropTypes.bool,

    /**
     * Options passed to SuperCluster, https://github.com/mapbox/supercluster.
     */
    spiderfyOptions: PropTypes.shape({
        spiderfyDistanceMultiplier: PropTypes.number,
        spiderLegPolylineOptions: PropTypes.object,
    }),

    /**
     * Options passed to SuperCluster, https://github.com/mapbox/supercluster.
     */
    superclusterOptions: PropTypes.object,

    /**
     * Option for customization of the clusters.
     */
    clusterOptions: PropTypes.shape({
        iconSize: PropTypes.number,
        classNames: PropTypes.arrayOf(PropTypes.shape({
            minCount: PropTypes.number,
            className: PropTypes.string
        }))
    }),

    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    // Events
    setProps: PropTypes.func,

    /**
     * Dash callback property. Number of times the marker has been clicked
     */
    n_clicks: PropTypes.number,

    /**
     * Last feature clicked.
     */
    featureClick: PropTypes.object,

    /**
     * Last feature hover.
     */
    featureHover: PropTypes.object

};

export default withLeaflet(SuperCluster);