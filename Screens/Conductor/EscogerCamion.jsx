import React from 'react'
import { Text, View } from 'react-native';
import { general } from '../../Styles/general';

export function EscogerCamion(){
    return(
        <View style={general.container}>
            <Text>Escane el codigo QR</Text>
        </View>
    );
}