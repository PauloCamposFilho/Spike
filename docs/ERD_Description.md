### Player
	* The basic user profile.
	* Contains personal information such as first and last names, an identifying image/avatar if they so wish, otherwise use default image
	* A brief description/bio (optional)
	* This entity is used to tie the user of the app to other entities, such as Teams, Match Records, Roster Records
	* Each player has a "virtual"/calculated columm containing their current ELO rating that is built based on their matches played and their results


 ## Team

	* Contains the basic information about a team, such as a name, a picture, and a description.
	* The team roster is saved on a different entity, Roster_Record, as teams can change their composition over time.


 ## Court

	* Information regarding a sports court.
	* A name, description, image, and geocoordinates are saved.
	* Further court information can be built from data saved in other entities that reference court_id, such as match history,
	  average rating of players/teams using the court lately.	


 ## Match

	* Information regarding individual match played between two teams.
	* One player that belongs to either team that is involved can create a match record.
	* The match record is not active after creation, and must be confirmed/validated by a player of the opposing team.

 ## Roster_Record
 	
 	* Keeps track of players joining/leaving teams.
 	* Is used to look up the current makeup of any given team.

 ## Match_Roster

 	* Keeps a snapshot of each team's roster when a given match was played.
 	* Used for historical purposes (show accurate team compositions when viewing previous matches)
 	* Used to calculate player ELO ratings.
