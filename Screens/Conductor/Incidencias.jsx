import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { general } from '../../Styles/general';
import { Card, Icon } from 'react-native-elements'; // Asegúrate de importar los componentes correctos

export function Incidencias(){
    const incidenciaNoRevisada = true; // Cambia esto a false para una incidencia revisada

    return(
        <View style={general.container}>
            <Text>Incidencias del vehiculo</Text>
            <ScrollView>


            <Card>
                <View style={{ width: 300 }}>
                    {incidenciaNoRevisada ? (
                        <Icon
                            name="dot-circle-o" // Puedes cambiar el ícono aquí
                            type="font-awesome" // Asegúrate de usar el tipo correcto de ícono
                            size={20}
                            color="red" // Color del indicador
                            containerStyle={{ position: 'absolute', top: 10, left: 10 }}
                        />
                    ) : null}

                    <Text style={general.centerText}>Incidencia sin revisar</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    <Text style={general.centerText}>Incidencia revisada</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    {incidenciaNoRevisada ? (
                        <Icon
                            name="dot-circle-o" // Puedes cambiar el ícono aquí
                            type="font-awesome" // Asegúrate de usar el tipo correcto de ícono
                            size={20}
                            color="red" // Color del indicador
                            containerStyle={{ position: 'absolute', top: 10, left: 10 }}
                        />
                    ) : null}

                    <Text style={general.centerText}>Incidencia sin revisar</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    <Text style={general.centerText}>Incidencia revisada</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    {incidenciaNoRevisada ? (
                        <Icon
                            name="dot-circle-o" // Puedes cambiar el ícono aquí
                            type="font-awesome" // Asegúrate de usar el tipo correcto de ícono
                            size={20}
                            color="red" // Color del indicador
                            containerStyle={{ position: 'absolute', top: 10, left: 10 }}
                        />
                    ) : null}

                    <Text style={general.centerText}>Incidencia sin revisar</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    <Text style={general.centerText}>Incidencia revisada</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    {incidenciaNoRevisada ? (
                        <Icon
                            name="dot-circle-o" // Puedes cambiar el ícono aquí
                            type="font-awesome" // Asegúrate de usar el tipo correcto de ícono
                            size={20}
                            color="red" // Color del indicador
                            containerStyle={{ position: 'absolute', top: 10, left: 10 }}
                        />
                    ) : null}

                    <Text style={general.centerText}>Incidencia sin revisar</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>

            <Card>
                <View style={{ width: 300 }}>
                    <Text style={general.centerText}>Incidencia revisada</Text>
                    <Text style={general.centerText}>Voltaje excedido</Text>
                    <Text style={general.centerText}>Carga: 22 v</Text>
                    <Text style={general.centerText}>Corriente: 22 v</Text>
                </View>
            </Card>
            </ScrollView>
        </View>
    );
}
