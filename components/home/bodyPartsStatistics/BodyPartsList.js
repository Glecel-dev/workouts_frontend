import React from 'react'
import { View, Text,ScrollView,StyleSheet } from 'react-native'
import { WORKOUTS } from '../../../data/Workouts';
import BodyPartsCards from './BodyPartsCards';

const BodyPartsList = () => {
    return (
        <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}
      > 
      {WORKOUTS.map((workoute,index)=>(
      <BodyPartsCards key={index}/>

      ))}           
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
    position:'absolute',
      top:300,
      backgroundColor: "transparent",
      width:'100%',
      height:480,
      
    },
  });
export default BodyPartsList
