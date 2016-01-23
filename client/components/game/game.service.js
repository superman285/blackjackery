/* global io */
'use strict';

angular.module('blackjackeryApp')
  .factory('Game', function() {

    // VARS

    let currentPlayer = {};

    let gameState = {
      activePlayerPosition: -1,
      dealer: {},
      players: []
    };

    // METHODS

    function getCurrentPlayer() {
      return currentPlayer;
    }

    function setCurrentPlayer(p) {
      currentPlayer = p;
    }

    function getGameState() {
      return gameState;
    }

    function refresh(gs) {
      gameState.activePlayerPosition = gs.activePlayerPosition;
      gameState.dealer = gs.dealer;
      gameState.players = gs.players;

      // check position
      var i;
      for (i in gameState.players) {
        if (gameState.players[i].id === currentPlayer.id) {
          currentPlayer.position = gameState.players[i].position;
        }
      }
    }

    // PUBLIC API

    return {
      getCurrentPlayer: getCurrentPlayer,
      setCurrentPlayer: setCurrentPlayer,
      getGameState: getGameState,
      refresh: refresh
    };

  });
