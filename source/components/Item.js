import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Item extends Component {
    render() {
        return (
            <View style={styles.vwItem}>
                <View style={styles.vwFoto}>
                    <Image style={styles.img} source={{ uri: this.props.item.foto }} />
                </View>
                <View style={styles.vwTexto}>
                    <Text style={styles.txtTitulo}>{ this.props.item.titulo }</Text>
                    <Text style={styles.txtValor}>R$ { this.props.item.valor }</Text>
                    <Text>Local: { this.props.item.local_anuncio }</Text>
                    <Text>Publicação: { this.props.item.data_publicacao }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    vwItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        margin: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#999',
        backgroundColor: '#FFF'
    },
    vwTexto: {
        flex: 1,
        marginLeft: 20,
    },
    vwFoto: {
        height: 102, 
        width: 102,
    },
    img: {
        height: 100, 
        width: 100,
    },
    txtTitulo: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5
    },
    txtValor: {
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    txtDet: {
        fontSize: 16,
        fontStyle: 'normal',
    },
  });
