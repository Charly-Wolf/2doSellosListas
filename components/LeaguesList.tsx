import { League } from '@/models/League'
import { FlatList, StyleSheet, View } from 'react-native'
import LeagueCard from './LeagueCard'

interface LeaguesListProps {
  leagues: League[]
  onScoreUpdated: () => void
  onPlayerDeleted: (id: string) => void
}

const LeaguesList: React.FC<LeaguesListProps> = ({
  leagues,
  onScoreUpdated,
  onPlayerDeleted,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={leagues}
        keyExtractor={league => league.leagueNr.toString()}
        renderItem={({ item }) => (
          <LeagueCard
            league={item}
            onScoreUpdated={onScoreUpdated}
            onPlayerDeleted={onPlayerDeleted}
          />
        )}
      />
    </View>
  )
}
export default LeaguesList

const styles = StyleSheet.create({
  container: { width: '100%' },
})
