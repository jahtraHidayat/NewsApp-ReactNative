import React, {Component} from 'react';
// import alert from react-native
import {Alert, View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
// import articles config API from service
import {getArticles} from '../../service/news';
// import DataItme from component/dataItem.js
import DataItem from '../../component/dataItem'; // without bracket / not {}
import Modal from '../../component/modal'; // import modal component without bracket/{}

export default class Tab3 extends Component {
  // define component with constructor
  constructor(props) {
    super(props);

    // define the state
    this.state = {
      // set item data
      isLoading: true,
      data: null,
      // set modal data
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  // handle modal show when press 'View'
  handleItemdataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true, // show the modal
      modalArticleData: articleData,
    });
  };

  // handle modal close
  handleModalClose = () => {
    this.setState({
      setModalVisible: false, // close the modal
      modalArticleData: {},
    });
  };

  // use LifeCycle Hooks -> for feth the data getArticles
  componentDidMount() {
    getArticles('science').then(
      (data) => {
        this.setState({
          // set item data
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }

  render() {
    //   console.log(this.state.data); // check the data from debug in simulator (cmd+D)
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#00f0ff"
          size="large"
          style={styles.iconLoading}
        />
        <Text style={styles.textLoading}>Please Wait...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem onPress={this.handleItemdataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose} // not handleModalClose() -> cause we not call while component loaded, so while func its called
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconLoading: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {
    marginTop: 10,
    textAlign: 'center',
  },
});
