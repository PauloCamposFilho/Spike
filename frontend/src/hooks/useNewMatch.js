import { useEffect } from "react"
import { useReducer } from "react"
import { reducer } from "../helpers/newMatchReducer"
import { NEW_MATCH_ACTIONS } from "../constants/NEW_MATCH_ACTIONS"

const initialNewMatchState = {
  allTeams: [],
  allCourts: [],
  homeTeamSelection: '',
  awayTeamSelection: '',
  resultSelection: '',
  courtSelection: '',
}

const useNewMatch = () => {
  const [newMatchState, dispatch] = useReducer(reducer, initialNewMatchState)

  useEffect(() => {
    const fetchAllTeamsData = async () => {
      try {
        const allTeamsRes = await fetch('/api/teams')
        const allTeamsData = await allTeamsRes.json()
        dispatch({ type: NEW_MATCH_ACTIONS.UPDATE_ALL_TEAMS_DATA, data: allTeamsData})
      } catch (error) {
        console.error('Error fetching all teams data in modal:', error)
      }
    }
    const fetchAllCourtsData = async () => {
      try {
        const allCourtsRes = await fetch('/api/play_areas')
        const allCourtsData = await allCourtsRes.json()
        dispatch({ type: NEW_MATCH_ACTIONS.UPDATE_ALL_COURTS_DATA, data: allCourtsData})
      } catch (error) {
        console.error('Error fetching all teams data in modal:', error)
      }
    }
    fetchAllTeamsData();
    fetchAllCourtsData();
  }, [])
  
  return {
    newMatchState,
    dispatch
  }
}

export { useNewMatch }