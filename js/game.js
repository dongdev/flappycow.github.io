var STATE = {
    init: init,
    preload: preload,
    create: create
    // update: update,
};

var dgame;

function startGame(FBInstant) {
    dgame = new Phaser.Game(
        GAME_WIDTH,
        GAME_HEIGHT,
        Phaser.CANVAS, // Phaser.AUTO,
        GAME_ID,
        STATE
    );
    dgame.FBInstant = FBInstant;
    //dgame.state.add(SCENE_PRELOAD, Preload);
    dgame.state.add(SCENE_MENU, Menu);
    dgame.state.add(SCENE_GAME, SceneGame);
    dgame.state.start(SCENE_PRELOAD);


}
function preload() {
    loadResoure();
}
function init() {
    log("load plugin");
}
function create() {
    if (isFNInstant && dgame.FBInstant != null) {
        dgame.FBInstant.startGameAsync().then(function () {
            var contextId = FBInstant.context.getID();
            var contextType = FBInstant.context.getType();
            playerName = FBInstant.player.getName();
            playerPic = FBInstant.player.getPhoto();
            playerId = FBInstant.player.getID();
            log(contextId + "/" + playerName + "/" + playerPic);
            dgame.state.start(SCENE_MENU);
            game.start();
        });
    }
    else {
        dgame.state.start(SCENE_MENU);
    }
}



