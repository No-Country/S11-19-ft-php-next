type Plant = {
	id: number;
	name: string;
	environment_id: number;
	light_id: number;
	date: string;
	description: string;
	user_id: number;
	created_at: string;
	updated_at: string;
}
export type reminderType = {
  id: number;
  name: string;
  frequency: string;
  date: string;
  time: string;
  type: string;
  repeat: boolean;
  plant_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  plant: Plant;
}

export interface remindersInterface { 
	reminders:Array<reminderType>|null
	additionalStyles?:string
	handleEditReminder?: () => void
}

export type remindersType = Array<reminderType> 
