import LeaguesList from '@/components/LeaguesList'
import { League } from '@/models/League'
import { Player } from '@/models/Player'
import { getAllPlayers } from '@/storage/playerStorage'
import { Link, useFocusEffect } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([])
  const [leagues, setLeagues] = useState<League[]>([])

  const loadPlayers = async () => {
    try {
      const allPlayers = await getAllPlayers()
      const sortedPlayers = allPlayers.sort((a, b) => {
        if (a.league === b.league) {
          return a.name.localeCompare(b.name)
        }
        return a.league - b.league
      })
      setPlayers(sortedPlayers)
    } catch (error) {
      console.error('Error loading players:', error)
    }
  }

  const handlePlayerDeleted = (id: string) => {
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== id))

    setLeagues(prevLeagues =>
      prevLeagues.map(league => ({
        ...league,
        players: league.players.filter(player => player.id !== id),
      }))
    )
  }

  useEffect(() => {
    loadPlayers()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadPlayers()
    }, [])
  )

  useEffect(() => {
    const updatedLeagues: League[] = []

    for (let i = 1; i <= 9; i++) {
      updatedLeagues.push({
        leagueNr: i,
        players: players.filter(player => player.league === i),
      })
    }

    setLeagues(updatedLeagues)
  }, [players])

  if (players.length === 0) {
    return (
      <View style={[styles.container, { paddingTop: 80 }]}>
        <Text style={styles.text}>No hay jugadores 🙁</Text>
        <Link href='/newPlayer' style={styles.link}>
          Agregar jugador
        </Link>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <LeaguesList
          leagues={leagues}
          onScoreUpdated={loadPlayers}
          onPlayerDeleted={handlePlayerDeleted}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  text: { color: 'white', textAlign: 'center', fontSize: 30 },
  link: {
    color: '#0ecb86',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 40,
    textDecorationLine: 'underline',
  },
})
