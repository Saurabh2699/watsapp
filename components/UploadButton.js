import React, { Component } from 'react'
import { View, StyleSheet, Alert, Image, TouchableOpacity, Animated } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import camera from '../assets/camera.png'
import contacts from '../assets/contacts.png'
import gallery from '../assets/gallery.png'
import location from '../assets/location.png'
import documents from '../assets/doc.png'
import audio from '../assets/music.png'

export class UploadButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            animation: new Animated.Value(0)
        }
    }

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.state.animation, {
            toValue,
            friction: 5
        }).start()

        this.open = !this.open
    }

    render() {
        return (
            <View>
                <Animated.View style={{ opacity: this.state.animation }}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => Alert.alert('Documents clicked')} >
                                <Image style={styles.img} source={documents} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alert.alert('Camera clicked')} >
                                <Image style={styles.img} source={camera} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alert.alert('Gallery clicked')} >
                                <Image style={styles.img} source={gallery} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => Alert.alert('Audio clicked')} >
                                <Image style={styles.img} source={audio} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alert.alert('Location clicked')} >
                                <Image style={styles.img} source={location} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Alert.alert('Contacts clicked')} >
                                <Image style={styles.img} source={contacts} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>

                <TouchableOpacity onPress={() => this.toggleMenu()}>
                    <Fontisto name='link' size={20} />
                </TouchableOpacity>

            </View>

        )
    }
}

export default UploadButton

const styles = StyleSheet.create({
    container: {
        width: 210,
        marginTop: 190,
        marginLeft: 15,
        backgroundColor: '#f0f2f0',
        padding: 15,
        borderRadius: 10
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: 5
    },

})
