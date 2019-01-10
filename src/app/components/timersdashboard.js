import React from "react";
import ReactDOM from "react-dom";
import { EditableTimerList } from "./editabletimerlist";
import { ToggleableTimerForm } from "./toggleabletimerform";

export class TimersDashboard extends React.Component {
	render(){
		return(
			<div>
			  <div>
				  <EditableTimerList />
				  <ToggleableTimerForm
				  isOpen = {true}
				  />
			  </div>
			</div>
		);
	}
}