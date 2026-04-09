import { useState } from "react";
import { Linking, View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";

export default function App() {
  const [value, setValue] = useState('');
  const applications = [
    { id: '1', company: "google", status: 'interview' },
    { id: '2', company: 'Microsoft', status: 'Applied' },
    { id: '3', company: 'Samsung', status: 'Accepted' }
  ];
  const [company, setCompany] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: 60, backgroundColor: '#007AFF' }} />
      <View style={{ flex: 1, padding: 8 }}>
        <Text style={{ color: '#ff1493', fontSize: 24, fontWeight: 100 }}>Hello Sam</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/1200x/3b/0b/d7/3b0bd766c24069bb5f4580b02d2e8b54.jpg' }}
          style={{ width: 200, height: 100, borderRadius: 30 }} />
        <Text numberOfLines={2} ellipsizeMode="tail">This is a very very long text which will get cut off after two lines do you stilll realise how fast i am right now how long will it get cut off</Text>
        <Text style={{ color: 'green', fontWeight: '200' }}>
          Status:<Text style={{ color: 'black', fontWeight: '300' }}>Accepted</Text>
        </Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Enter name"
          placeholderTextColor='green'
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 12,
            padding: 12,
            fontSize: 16
          }}
        />
        <Text onPress={() => Linking.openURL('https://google.com')}
          style={{ color: '#007AFF', textDecorationLine: 'underline' }}>
          Click me
        </Text>
        <TextInput
          value={company}
          onChangeText={setCompany}
          placeholder="Company name"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          returnKeyType="next"
          onFocus={() => setFocused('company')}
          onBlur={() => setFocused(null)}
        />
        <ScrollView>
          <Text>Item 1</Text>
          <Text>Item 2</Text>

        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={{ width: 60, height: 60, marginRight: 12 }}>
            <Text> Card 1</Text>
          </View>
          <View style={{ width: 60, height: 60, marginRight: 12 }}>
            <Text>Card 2</Text>
          </View>
        </ScrollView>

        <FlatList
          data={applications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 16, borderBottomWidth: 0.5, borderColor: '#eee' }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.company}</Text>
              <Text style={{ color: '#666' }}>{item.status}</Text>
            </View>
          )}
        />
        <Pressable
          onPress={() => console.log('tapped')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#005ecb' : '#007AFF',
            padding: 14,
            borderRadius: 10,
            alignItems: 'center'
          })}>
          <Text style={{ color: 'pink', fontWeight: '600' }}>Add Application</Text>
        </Pressable>



      </View>
    </View>
  );
}
