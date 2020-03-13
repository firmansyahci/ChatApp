import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import geolocation from '@react-native-community/geolocation'

export default class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null
        }
    }

    componentDidMount() {
        geolocation.getCurrentPosition((position) => this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: false,
        }))
    }

    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} >
                <Marker
                    coordinate={{latitude: this.state.latitude, longitude:this.state.longitude}}
                    title='MyLocation'
                />
            </MapView>

        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});