import React, { Component } from 'react';
import { AppRegistry,
        asset,
        Pano,
        View,
        Text,
        StyleSheet } from 'react-vr';

const places = [
  {
    title: 'Brooklyn Bridge',
    image: 'brooklyn-bridge-vr.jpg'
  },
  {
    title: 'Central Park',
    image: 'central-park-vr.jpg'
  },
  {
    title: 'Eldwayen Ocean Park',
    image: 'eldwayen-ocean-park-vr.jpg'
  },
  {
    title: 'Grand Central Station',
    image: 'grand-central-vr.jpg'
  },
  {
    title: 'Liberty Island',
    image: 'liberty-island-vr.jpg'
  },
  {
    title: 'Mono Lake',
    image: 'mono-lake-vr.jpg'
  },
  {
    title: 'Old Rag Mt.',
    image: 'old-rag-mountain-vr.jpg'
  },
  {
    title: 'Pier 39',
    image: 'pier-39-vr.jpg'
  },
  {
    title: 'Red Rock Canyon',
    image: 'red-rock-canyon-vr.jpg'
  },
  {
    title: 'Rock Creek Park',
    image: 'rock-creek-park-vr.jpg'
  },
  {
    title: 'Silver Falls',
    image: 'silver-falls-vr.jpg'
  },
  {
    title: 'Sonoma County',
    image: 'sonoma-county-vr.jpg'
  },
  {
    title: 'Times Square',
    image: 'times-square-vr.jpg'
  },
  {
    title: 'Island Garden',
    image: 'island-garden-vr.jpg'
  },
  {
    title: 'Golden Gate Bridge',
    image: 'golden-gate-bridge-vr.jpg'
  },
  {
    title: 'Lombard Street',
    image: 'lombard-vr.jpg'
  }
]

class VRview extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      place: 'red-rock-canyon-vr.jpg'
    }
  }

  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu})
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.place)}></Pano>
        <View
          style={styles.menuButton}
          onEnter={() => this.toggleMenu()}
        >
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
        {
          this.state.showMenu ?
            <View style={styles.menu}>
              {
                places.map( (place, index) => {
                  return (
                    <View
                      style={styles.menuItem}
                      key={index}
                      onEnter={() => this.setState({place: place.image})}
                    >
                      <Text style={styles.menuItemText}>{place.title}</Text>
                    </View>
                  )
                })
              }
            </View>
          :
            <View style={styles.menu}></View>
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  menu: {
    width: 20,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      {translate: [-10, 0, -7.5]}
    ]
  },
  menuButton: {
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    transform: [
      {translate: [-0.3, 1, -5]}
    ]
  },
  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: '#000'
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    borderRadius: 0.5,
    borderWidth: 0.02,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#000'
  }
})

AppRegistry.registerComponent('VRview', () => VRview);
