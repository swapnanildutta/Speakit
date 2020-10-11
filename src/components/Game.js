import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sentences from '../data/sentences.json';

import GameFinished from './GameFinished';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 1,
      score: 0,
      gameFinished: false,
    };

    this.updateScore = this.updateScore.bind(this);
    this.getTotalScore = this.getTotalScore.bind(this);
    this.getNextLevel = this.getNextLevel.bind(this);
  }

  getChildContext() {
    return {
      updateScore: this.updateScore,
      getTotalScore: this.getTotalScore,
      getNextLevel: this.getNextLevel,
    };
  }


Game.childContextTypes = {
  updateScore: PropTypes.func,
  getTotalScore: PropTypes.func,
};

Game.propTypes = {
  language: PropTypes.string.isRequired,
  speak: PropTypes.object.isRequired,
  recognition: PropTypes.object.isRequired,
};

export default Game;
