import React, { Component, useState } from 'react'
import { StyleSheet, View, Alert, Text, Dimensions } from 'react-native'
import BarcodeMask from 'react-native-barcode-mask'
import { RNCamera } from 'react-native-camera'

const CamperaBarcodeScanner = () => {
  const [globalbarcodes, setGlobalBarcodes] = useState()
  const [isCamDisable, setIsCamDisable] = useState(false)
  const viewfinderHeight = 200
  const viewfinderWidth = 300

  const { height: windowHeight, width: windowWidth } = Dimensions.get('window')
  const viewFinderBounds = {
    height: viewfinderHeight,
    width: viewfinderWidth,
    x: (windowWidth - viewfinderWidth) / 2,
    y: (windowHeight - viewfinderHeight) / 2,
  }

  const barcodeRecognizedGoogle = (detectedBarcodes) => {
    if (detectedBarcodes.barcodes.length == 0) {
      return
    }
    const barcode = detectedBarcodes.barcodes[0]
    const collidingBarcodes = !aabb(viewFinderBounds, {
      height: barcode.bounds.size.height,
      width: barcode.bounds.size.width,
      x: barcode.bounds.origin.x,
      y: barcode.bounds.origin.y,
    })
    setGlobalBarcodes(`${barcode.data} / ${barcode.format} / ${barcode.type}`)
    console.warn('Camera is Disabled')
    setIsCamDisable(true)
  }

  const aabb = (obj1, obj2) =>
    obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y

  return (
    <View style={styles.container}>
      {isCamDisable ? (
        <Text>{globalbarcodes}</Text>
      ) : (
        <>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={(ref) => {
              this.camera = ref
            }}
            onGoogleVisionBarcodesDetected={barcodeRecognizedGoogle}
            captureAudio={false}
            autoFocus={'on'}
          />

          <BarcodeMask width={viewfinderWidth} height={viewfinderHeight} showAnimatedLine={false} transparency={0.8} />
        </>
      )}
    </View>
  )
}

export default CamperaBarcodeScanner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})
