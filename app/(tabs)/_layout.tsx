import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0ecb86',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Ligas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'list-sharp' : 'list-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='newPlayer'
        options={{
          title: 'Agregar jugador',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person-add' : 'person-add-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  )
}
