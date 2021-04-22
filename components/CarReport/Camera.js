import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,ImageBackground } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import {setCamera} from '../../redux/reducer/cameraReducer'


export default function Cameras() {
    const dispatch = useDispatch()
    
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    
   
    
    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        setPreviewVisible(true)
        setCapturedImage(photo)
      }
      const __savePhoto = (uri) => {
        MediaLibrary.saveToLibraryAsync(uri)
      }
      
      const __retakePicture = () => {!
        setCapturedImage(null)
        setPreviewVisible(false)
       dispatch(setCamera(false))
      }
    

      const CameraPreview = ({photo, retakePicture, savePhoto}) => {
        console.log('sdsfds', photo)
        return (
            <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              width: '100%',
              height: '100%'
            }}
          >
            <ImageBackground
              source={{uri: photo && photo.uri}}
              style={{
                flex: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  padding: 15,
                  justifyContent: 'flex-end'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableOpacity
                    onPress={retakePicture}
                    style={{
                      width: 130,
                      height: 40,
      
                      alignItems: 'center',
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20
                      }}
                    >
                      Send
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=> savePhoto(photo.uri)}
                    style={{
                      width: 130,
                      height: 40,
      
                      alignItems: 'center',
                      borderRadius: 4
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20
                      }}
                    >
                      save photo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        )
      }
    
let camera = Camera

    return (
        <>
       
       {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage}  savePhoto={__savePhoto} retakePicture={__retakePicture}/>
          ) : (
            <Camera
              style={{flex: 1}}
              ref={(r) => {
                camera = r
              }}
            >
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff'
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
          </>
    )

    
}