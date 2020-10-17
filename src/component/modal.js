import React, {Component} from 'react';
import {Text, View, Dimensions, Modal, Share, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  List,
  ListItem,
  Right,
  Title,
  Button,
} from 'native-base';
import {WebView} from 'react-native-webview'; // import WebView

const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {
  // create constructor
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  // share content
  handleShare = () => {
    const {url, title} = this.props.articleData;
    message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData; // get value url while call articleData

    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          <Container style={styles.container}>
            <Header style={styles.header}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{color: 'white', fontSize: 12}} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{color: 'white'}} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{color: 'white', fontSize: 12}} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{height: webViewHeight}}>
              <WebView
                source={{uri: url}}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{flex: 1}}
                onError={this.handleClose}
                startInLoadingState
                scalePageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#009387',
  },
});
