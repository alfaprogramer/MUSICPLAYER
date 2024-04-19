import React, {useState, useEffect} from 'react';

import type {PropsWithChildren} from 'react';
import { ActivityIndicator, SafeAreaView,StatusBar, StyleSheet, Text } from 'react-native';

import {setupPlayer, addTrack} from "../musicPlayerServies"


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
    <SafeAreaView >
      <StatusBar
      />
      <Text>Testing seems ok </Text>
     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App;
