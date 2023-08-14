import { NEW_MATCH_ACTIONS } from "../constants/NEW_MATCH_ACTIONS";

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_MATCH_ACTIONS.UPDATE_ALL_TEAMS_DATA:
      const allTeamsDataAfterUpdate = {
        ... state, 
        allTeams: action.data
      }
      return allTeamsDataAfterUpdate;

    case NEW_MATCH_ACTIONS.UPDATE_ALL_COURTS_DATA:
      const allCourtsAfterUpdate = {
        ... state, 
        allCourts: action.data
      }
      return allCourtsAfterUpdate;
    
    case NEW_MATCH_ACTIONS.SELECT_HOME_TEAM:
      const homeTeamAfterSelection = {
        ... state,
        homeTeamSelection: action.data
      }
      return homeTeamAfterSelection

      case NEW_MATCH_ACTIONS.SELECT_AWAY_TEAM:
      const awayTeamAfterSelection = {
        ... state,
        awayTeamSelection: action.data
      }
      return awayTeamAfterSelection

      case NEW_MATCH_ACTIONS.SELECT_RESULT:
      const resultAfterSelection = {
        ... state,
        resultSelection: action.data
      }
      return resultAfterSelection
      
      case NEW_MATCH_ACTIONS.SELECT_COURT:
      const courtAfterSelection = {
        ... state,
        courtSelection: action.data
      }
      return courtAfterSelection

    default:
      return state;
  }
}

export { reducer };