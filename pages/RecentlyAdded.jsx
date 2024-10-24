import React, { useContext } from 'react'
import { View,Text,TouchableOpacity,Pressable,StyleSheet } from 'react-native'
import { GlobalContext } from '../Context/Context1';
import { FlatList } from 'react-native-web';

const RecentlyAdded = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);
  const navigateToEditTask = (index) => {
    navigation.navigate('editTask', { taskIndex: index });
  };
  const renderTaskItem = ({ item, index }) => (
    <Pressable onPress={() => navigateToEditTask(index)}>
      <View style={styles.addTaskBox}>
        <View stye={styles.boxFlex}>
            <Text style={styles.addText}>{item.taskName}</Text>
            <Text style={styles.addDesc}>{item.description}</Text>
        </View>
        <View style={styles.dateDel}>
            <Text style={styles.addDate}>{item.date.toDateString()}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
            <Text style={{ color: 'red' , fontSize:24,}}>🚮</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList data={tasks} renderItem={renderTaskItem} keyExtractor={(item, index) => index.toString()} ></FlatList>
  )
}
const styles = StyleSheet.create({
  addTaskBox:{
      margin:10,
      flex:1,
      justifyContent:"space-around",
      backgroundColor:"lightgrey",
      borderRadius:10,
      padding:10,
  },
  boxFlex:{
      flexDirection:"column"
  },
  dateDel:{
      flexDirection:"row",
      justifyContent:"space-around"
  },
  addText:{
      paddingVertical:12,
      paddingHorizontal:24,
      borderWidth: 1,
      borderRadius:12,
      margin:5,
      color: "#000", 
      fontSize: 20,
      fontWeight: '400',
      borderColor:"gray",
  },
  addDesc:{
      paddingVertical:12,
      paddingHorizontal:24,
      borderWidth: 1,
      borderRadius:12,
      margin:5,
      color: "#000", 
      fontSize: 20,
      fontWeight: '400',
      borderColor:"gray",
  }
});

export default RecentlyAdded
