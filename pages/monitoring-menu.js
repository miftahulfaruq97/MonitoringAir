import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, H2, Content, Button, Body, Icon, Text, Thumbnail } from 'native-base';

export default class MonitoringMenu extends Component<Props> {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="lightgrey" transparent noShadow/>
        <Content>
          <Body style={css.body}>
            <H2 style={{textAlign: "center", marginVertical: 10}}>Monitoring Air</H2>

            <Button style={css.btn} full info onPress={() => this.props.navigation.navigate('MonitoringPh')}><Text> pH Air </Text></Button>
            <Button style={css.btn} full info><Text> Salinitas Air </Text></Button>
            <Button style={css.btn} full info><Text> Suhu Air </Text></Button>
            <Button style={css.btn} full info><Text> Ketinggian Air </Text></Button>
            <Button style={css.btn} full info onPress={() => this.props.navigation.goBack()}><Text> Kembali </Text></Button>
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
