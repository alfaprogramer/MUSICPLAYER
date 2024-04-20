import React, {useState, useEffect} from 'react';

import type {PropsWithChildren} from 'react';
import { ActivityIndicator, SafeAreaView,StatusBar, StyleSheet, Text, View } from 'react-native';

import {setupPlayer, addTrack} from "../musicPlayerServies"
import MusicPlayer from './screens/MusicPlayer';


function App(): React.JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState(false)
  async function setup(){
    let isSetup = await setupPlayer()


    if (isSetup){
      await addTrack()
    }


    setIsPlayerReady(isSetup)
  }

  useEffect(() =>{
    setup()
  }, []
  )

  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
 
  return (
    <View style={styles.container}>
      <StatusBar  barStyle={"light-content"}/>
      <MusicPlayer />
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App;
