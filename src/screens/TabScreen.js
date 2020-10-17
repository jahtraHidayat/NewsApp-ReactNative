import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  ScrollableTab,
} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import Tab6 from './tabs/tab6';
import Tab7 from './tabs/tab7';

export default class TabScreens extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.container}>
          <Left />
          <Body>
            <Title style={styles.labelTitle}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs
          tabBarUnderlineStyle={styles.tabs}
          renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading="General"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab1 />
          </Tab>
          <Tab
            heading="Business"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab2 />
          </Tab>
          <Tab
            heading="Tech"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab3 />
          </Tab>
          <Tab
            heading="Health"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab4 />
          </Tab>
          <Tab
            heading="Entertainment"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab5 />
          </Tab>
          <Tab
            heading="Sport"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab6 />
          </Tab>
          <Tab
            heading="Science"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={styles.activeTextStyle}>
            <Tab7 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009387',
  },
  labelTitle: {
    color: '#FFFFFF',
  },
  tabs: {
    backgroundColor: '#FFFFFF',
  },
  tabStyle: {
    backgroundColor: '#009387',
  },
  activeTabStyle: {
    backgroundColor: '#009387',
  },
  textStyle: {
    color: '#FFFFFF',
  },
  activeTextStyle: {
    color: '#FFFFFF',
  },
});
