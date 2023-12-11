  import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
  import { Dimensions, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';

  export default function App() {
    interface ButtonProps extends TouchableOpacityProps{
      text: string;
      style?: StyleProp<ViewStyle>;
      textStyle?: StyleProp<TextStyle>;
    };
    const [numb, setNumb] = useState(0);
    const addNumb = (number:number) => {
      setNumb(numb*10+number)
    }
    function Button(props:ButtonProps) {
      return(
        <TouchableOpacity style={[styles.bt, props.style]} onPress={props.onPress}>
              <Text style={[styles.textbt, props.textStyle]}>{props.text}</Text>
            </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.txcontainer}>
        <Text style={styles.text}>{numb}</Text>
        </View>
        <View style={styles.btcontainer}>
          <View style={styles.btrow}>
            <Button text="AC" style={styles.btlightgray} textStyle={styles.textbt} />
            <Button text="+/-" style={styles.btlightgray} textStyle={styles.textbt} />
            <Button text="%" style={styles.btlightgray} textStyle={styles.textbt} />
            <Button text=":" style={styles.btyellow} textStyle={styles.textbt} />
          </View>
          <View style={styles.btrow}>
            <Button text="7" onPress={()=> addNumb(7)} />
            <Button text="8" />
            <Button text="9" />
            <Button text="x" style={styles.btyellow} textStyle={styles.textbt} />
        </View>
          <View style={styles.btrow}>
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="-" style={styles.btyellow} textStyle={styles.textbt} />
        </View>
        <View style={styles.btrow}>
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="+" style={styles.btyellow} textStyle={styles.textbt} />
          </View>
          <View style={[styles.btrow, {marginBottom:80}]}>
            <TouchableOpacity style={[styles.bt, {width:195, alignItems:'flex-start'}]}>
              <Text style={[styles.textbt, {marginLeft:30, color:'white'}]}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bt]}>
              <Text style={[styles.textbt, {color:'white'}]}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bt, {backgroundColor:'#FF9500'}]}>
              <Text style={[styles.textbt, {color:'white'}]}>=</Text>
            </TouchableOpacity>
        </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    );
  }

const screen = Dimensions.get("window");
const BTN_MARGIN = 5;
const BTN_WIDTH = screen.width / 4 - 2 * BTN_MARGIN;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent:'center',
    
    },
    txcontainer:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-end',
      margin: BTN_MARGIN
      
    },
    btrow:{
      // margin:BTN_MARGIN,
      flexDirection:'row',
    },
    text:{
      fontSize:100,
      color:'#F5F5F5'

    },
    btcontainer:{
      justifyContent:'center',
      // margin:BTN_MARGIN,
      width:"100%"

    },
    bt:{
      width:BTN_WIDTH,
      height:BTN_WIDTH,
      borderRadius:90,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#313131',
      margin:BTN_MARGIN
    },
    btlightgray:{
      backgroundColor:'#D4D4D4D2',
    },
    btyellow:{
      backgroundColor:'#FF9500',
    },
    textbt:{
      fontSize:37,
      color:'#F5F5F5'

    }
  });
