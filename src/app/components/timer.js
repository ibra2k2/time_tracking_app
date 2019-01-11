
import React from "react";
import ReactDOM from "react-dom";
import { clients } from "./clients";
import { helpers } from "./helpers";
import { renderElapsedString } from './helpers'

 export class Timer extends React.Component {
    componentDidMount() {
      this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }
  
    componentWillUnmount() {
      clearInterval(this.forceUpdateInterval);
    }

    handleStartClick = () => {
      this.props.onStartClick(this.props.id);
    };
  
    handleStopClick = () => {
      this.props.onStopClick(this.props.id);
    };

    handleTrashClick = () => {
      this.props.onTrashClick(this.props.id)
    }

    render() {
      const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='header'>
              {this.props.title}
            </div>
            <div className='meta'>
              {this.props.project}
            </div>
            <div className='center aligned description'>
              <h2>
                {elapsedString}
              </h2>
            </div>
            <div className='extra content'>
              <span 
                className='right floated edit icon'
                onClick={this.props.onEditClick}
              >
                <i className='edit icon' />
              </span>
              <span 
                className='right floated trash icon'
                onClick={this.handleTrashClick}
              >
                <i className='trash icon' />
              </span>
            </div>
          </div>
          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
        </div>
      );
    }
  }

  class TimerActionButton extends React.Component {
    render() {
      if (this.props.timerIsRunning) {
        return (
          <div
            className='ui bottom attached red basic button'
            onClick={this.props.onStopClick}
          >
            Stop
          </div>
        );
      } else {
        return (
          <div
            className='ui bottom attached green basic button'
            onClick={this.props.onStartClick}
          >
            Start
          </div>
        );
      }
    }
  }