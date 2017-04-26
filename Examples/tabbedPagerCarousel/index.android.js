/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

/*
 * IMPORTANT
 * ---------
 * in live version import like follows:
 * >>> import { TabbedPager } from 'react-native-viewpager-carousel' <<<
 * 
 * the following import is only to improve the developer experience
 */
import TabbedPager from './react-native-viewpager-carousel/TabbedPager'

import ExamplePage from './ExamplePage'

export default class RnViewPager extends Component {

  constructor(props) {
    super(props)

    this.dataSource = []

    for (let i = 0; i < 100; i++) {
      this.dataSource = [...this.dataSource, {
        title: 'Title Seite ' + i,
      }]
    }
  }

  _renderTabbarRow = (item, performPageSwitch) => (
    <TouchableHighlight
      key={'tb' + item.key}
      underlayColor={'#ccc'}
      onPress={() => {
        performPageSwitch()
      }}
    >
      <Text style={styles.text}>{item.data}</Text>
    </TouchableHighlight>
  )

  _renderContentContainerRow = item => (
    <View style={styles.contentContainer}>
      <ExamplePage
        title={item.title}
      />
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <TabbedPager
          ref={tabbarPager => {
            this.tabbarPager = tabbarPager
          }}
          
          data={this.dataSource}
          thresholdPages={2}
          renderTabbarRow={this._renderTabbarRow}
          renderContentContainerRow={this._renderContentContainerRow}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#ccc',
  },
})

AppRegistry.registerComponent('tabbedPagerCarousel', () => RnViewPager)
