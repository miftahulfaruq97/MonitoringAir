import React, {Component} from 'react';
import {Platform, StyleSheet, View, BackHandler} from 'react-native';
import { Container, Header, H2, Content, Button, Body, Icon, Text, Thumbnail } from 'native-base';

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="lightgrey" transparent noShadow/>
        <Content>
          <Body style={css.body}>
            <Thumbnail style={{marginVertical: 10, width: 130, height: 130}} square source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
            <H2 style={{textAlign: "center", marginVertical: 10}}>Aplikasi Monitoring Kualitas Air</H2>

            <Button style={css.btn} full info onPress={() => this.props.navigation.navigate('Monitoring')}><Text> Monitoring Air </Text></Button>
            <Button style={css.btn} full warning><Text> Ambang Batas </Text></Button>
            <Button style={css.btn} full success><Text> Tentang </Text></Button>
            <Button style={css.btn} full danger onPress={() => BackHandler.exitApp()}><Text> Keluar </Text></Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const css = {
  body: {
    padding: 20,
    flex: 1
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 20
  }
}
