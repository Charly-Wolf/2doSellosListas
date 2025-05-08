import { League } from '@/models/League'
import { StyleSheet, Text, View } from 'react-native'
import PlayersList from './PlayersList'

interface LeagueCardProps {
  league: League
  onScoreUpdated: () => void
  onPlayerDeleted: (id: string) => void
}

const LeagueCard: React.FC<LeagueCardProps> = ({
  league,
  onScoreUpdated,
  onPlayerDeleted,
}) => {
  const backgroundColor = league.leagueNr % 2 === 0 ? '#1e2025' : '#25292e'
  const headerTextColor = league.players.length === 0 ? '#548f79' : '#0ecb86'

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.headerText, { color: headerTextColor }]}>
        Liga {league.leagueNr}
      </Text>
      <PlayersList
        players={league.players}
        onScoreUpdated={onScoreUpdated}
        onPlayerDeleted={onPlayerDeleted}
      />
    </View>
  )
}
export default LeagueCard

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomColor: '#0ecb8651',
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 16,
  },
  emptyContainer: {
    marginTop: 80,
  },
})
