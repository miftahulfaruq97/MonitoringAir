import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, H2, Content, Button, Body, Icon, Left, Right, Text, Thumbnail } from 'native-base';

export default class MonitoringPh extends Component<Props> {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="lightgrey" transparent noShadow>
            <Left>
                <Button onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon type="Ionicons" name='arrow-back' style={{color: 'black'}}/>
                </Button>
            </Left>
            <Body />
            <Right />
        </Header>
        <Content>
          <Body style={css.body}>
            <H2 style={{textAlign: "center", marginVertical: 10}}>Monitoring pH</H2>

            <Button style={css.btn} full info><Text> pH Air </Text></Button>
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
