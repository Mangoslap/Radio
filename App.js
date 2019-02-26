import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert } from 'react-native';
import {
  Container, Header, Button, CheckBox, Title, Card, CardItem, Left,
  Right, Icon, Content, ListItem
} from 'native-base';

var myImage = require('./assets/goldy.png');
var myImage2 = require('./assets/pug.png');
var myImage3 = require('./assets/chihuahua.png');
export default class App extends React.Component {

  state = {
    one: false,
    two: false,
    three: false,
    message: 'Nothing selected.'
  }
  onePressed(message) {
    this.setState({ one: true, two: false, three: false, message: message })
  }
  twoPressed(message) {
    this.setState({ one: false, two: true, three: false, message: message })
  }
  threePressed(message) {
    this.setState({ one: false, two: false, three: true, message: message })
  }
  buttonPressed() {
    Alert.alert("Success", "Thank you for submitting your response!");
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#efefef" }}>
        <Header style={{ backgroundColor: '#529FF3' }}>
          <Text style={styles.textStyle}>Mini Survey</Text>
        </Header>

        <Content>
          <Card>
            <CardItem header>
              <Text style={styles.messageStyle}>What is your favorite dog?</Text>
            </CardItem>

            {/* First option plus golden retriever image*/}
            <CardItem>
              <CheckBox checked={this.state.one}
                onPress={() => this.onePressed('Yes I agree. They are good dogs.')}
                style={{ marginRight: 20 }}
              />
              <Text style={styles.messageStyle}>
                Golden Retriever
            </Text>
              <Image
                source={myImage}
                style={{ width: 64, height: 64 }} />
            </CardItem>

            {/* Second option plus pug image*/}
            <CardItem>
              <CheckBox checked={this.state.two}
                onPress={() => this.twoPressed('Not my first choice, but you do you.')}
                style={{ marginRight: 20 }}
              />
              <Text style={styles.messageStyle}>Pug</Text>
              <Image
                source={myImage2}
                style={{ width: 64, height: 64 }} />
            </CardItem>

            <CardItem>
              <CheckBox checked={this.state.three}
                onPress={() => this.threePressed('Ay caramba')}
                style={{ marginRight: 20 }}
              />
              {/* Third option plus chihuahua image */}
              <Text style={styles.messageStyle}>Chihuahua</Text>
              <Image
                source={myImage3}
                style={{ width: 64, height: 64 }} />
            </CardItem>
            <CardItem footer>
              <Text style={styles.messageStyle}>{this.state.message}</Text>
            </CardItem>
          </Card>

          {/* Submit Button */}
          <Button iconRight block info
            onPress={() => this.buttonPressed()}>
            <Icon name='beer' />
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageStyle: {
    color: '#263238',
    fontSize: 21,
  },
  textStyle: {
    color: '#263238',
    fontSize: 22,
  }
});
