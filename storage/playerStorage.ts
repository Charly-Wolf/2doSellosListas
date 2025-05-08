import AsyncStorage from '@react-native-async-storage/async-storage'
import { Player } from '../models/Player'

const STORAGE_KEY = 'players'

const leagueCaps = [3, 6, 9, 12, 15, 18, 21, 24, Infinity]

const getPlayers = async (): Promise<Player[]> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY)
  return json ? JSON.parse(json) : []
}

const savePlayers = async (players: Player[]) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(players))
}

const generateUUID = (): string => {
  return `${(Math.random() * 1e8).toString(16)}-${(
    Math.random() * 1e8
  ).toString(16)}`
}

export const addPlayer = async (player: Omit<Player, 'id'>) => {
  const id = generateUUID()
  const newPlayer: Player = { ...player, id }

  const players = await getPlayers()
  players.push(newPlayer)
  await savePlayers(players)
}

export const updateScore = async (id: string, scoreChange: number) => {
  const players = await getPlayers()
  const playerIndex = players.findIndex(p => p.id === id)

  if (playerIndex === -1) return

  let player = players[playerIndex]
  let newScore = player.score + scoreChange

  if (newScore < 0 && player.league === 1) return

  if (newScore < 0) {
    player.league = Math.max(1, player.league - 1) as Player['league']
    newScore = leagueCaps[player.league - 1]
  }

  if (newScore > leagueCaps[player.league - 1] && player.league < 9) {
    player.league = (player.league + 1) as Player['league']
    newScore = 0
  }

  player.score = newScore
  players[playerIndex] = player
  await savePlayers(players)

  return player
}

export const deletePlayer = async (id: string) => {
  const players = await getPlayers()
  const updatedPlayers = players.filter(p => p.id !== id)
  await savePlayers(updatedPlayers)
}

export const getPlayer = async (id: string): Promise<Player | undefined> => {
  const players = await getPlayers()
  return players.find(p => p.id === id)
}

export const getAllPlayers = async (): Promise<Player[]> => {
  return await getPlayers()
}
