import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Item from './Item';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);

        this.state = { listaitens: [] };
    }
    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then( response => { this.setState( { listaitens: response.data }); } )
            .catch( () => { console.log('Erro ao recuperar dos dados'); } );
        }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DDD' }}>
                { this.state.listaitens.map( 
                    item => 
                    ( <Item key={ item.titulo } item={ item } />) ) }
            </ScrollView>
        );
    }
}
