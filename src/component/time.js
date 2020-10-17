import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
  }

  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <View>
        <Text note style={styles.labelTime}>
          {time}
        </Text>
      </View>
    );
  }
}

export default Time;

const styles = StyleSheet.create({
  labelTime: {
    marginHorizontal: 5,
  },
});
