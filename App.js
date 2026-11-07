import React, {useState} from 'react';
import {View,Text,Image,ScrollView,TextInput,Pressable,StyleSheet} from 'react-native';

const places = [
  {name:'Restaurants',type:'Food & Dining',photo:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900'},
  {name:'Food Specials',type:'Local Deals',photo:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900'},
  {name:'Live Music',type:'Entertainment',photo:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900'},
  {name:'Weekly Happenings',type:'What’s On',photo:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900'}
];

export default function App(){
 const [search,setSearch]=useState('');
 return <ScrollView style={{backgroundColor:'#f5f3eb'}}>
  <View style={s.hero}>
   <Text style={s.small}>YOUR LOCAL COASTAL GUIDE</Text>
   <Text style={s.title}>Treasure Coast{"\n"}Happenings</Text>
   <Text style={s.sub}>Eat well. Listen local. Explore more.</Text>
  </View>
  <TextInput style={s.search} placeholder="Search restaurants, music and events..." value={search} onChangeText={setSearch}/>
  <Text style={s.heading}>Discover the Coast</Text>
  {places.filter(p=>p.name.toLowerCase().includes(search.toLowerCase())).map(p=>
   <Pressable key={p.name} style={s.card}>
    <Image source={{uri:p.photo}} style={s.image}/>
    <View style={{padding:16}}>
     <Text style={s.type}>{p.type}</Text>
     <Text style={s.name}>{p.name}</Text>
     <Text style={s.link}>EXPLORE →</Text>
    </View>
   </Pressable>
  )}
  <Text style={s.footer}>SEBASTIAN • VERO BEACH • MELBOURNE</Text>
 </ScrollView>
}
const s=StyleSheet.create({
 hero:{backgroundColor:'#dce9df',padding:28,paddingTop:65},
 small:{letterSpacing:2,color:'#41665a',fontWeight:'bold'},
 title:{fontSize:39,fontWeight:'900',color:'#173e35',marginTop:15},
 sub:{fontSize:15,color:'#41665a',marginTop:12},
 search:{backgroundColor:'white',margin:18,padding:16,borderRadius:12},
 heading:{fontSize:24,fontWeight:'bold',color:'#173e35',margin:18},
 card:{backgroundColor:'white',marginHorizontal:18,marginBottom:18,borderRadius:16,overflow:'hidden'},
 image:{width:'100%',height:190},
 type:{color:'#638276',fontWeight:'bold',fontSize:12},
 name:{fontSize:23,fontWeight:'bold',color:'#173e35',marginTop:5},
 link:{color:'#a66b37',fontWeight:'bold',marginTop:12},
 footer:{textAlign:'center',padding:25,color:'#527166',fontWeight:'bold'}
});
