import * as React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, Text, View, Pressable } from 'react-native';

import BottomSheet from "@gorhom/bottom-sheet";
import { RootTabScreenProps } from '../types';
import TeamStats from "../components/TeamStats";
import Field from '../components/Field';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const viewPlayers = () => {
    console.warn('View player');

  };

  const snapPoints = [0, '50%', '100%']

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />

      <Pressable 
        onPress={viewPlayers} 
        style={styles.buttonCOntainer}
      > 
        <Text>View Players</Text>
      </Pressable>

      <View style={styles.container}>
      <BottomSheet

        index={1}
        snapPoints={snapPoints}

      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#72CC5E",
    
  },
  buttonCOntainer: {
    backgroundColor: "orange", 
    width:"90%", 
    margin:20, 
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto"

  },

  contentContainer: {
    
  }
});
