/**
 * Created by Claudio on 16.05.2017.
 */

function COM() {
}

/*
Message types
 */
COM.CLIENT_NEW_GAME = 0;
COM.SERVER_INIT = 2;
COM.SERVER_ERROR = 5;

COM.CLIENT_PLACE = 10;
COM.SERVER_PLACE_CLIENT = 11;
COM.SERVER_PLACE_OPPONENT = 12;

COM.CLIENT_PASS = 20;
COM.SERVER_PASS_CLIENT = 21;
COM.SERVER_PASS_OPPONENT = 22;

COM.SERVER_END = 50;

COM.ERROR = function () {
};
/*
Error types
 */
COM.ERROR.GENERAL_ERROR = 0;
COM.ERROR.CONNECTION_ERROR = 1;

COM.ERROR.INVALID_GAME = 10;
COM.ERROR.INVALID_ACTION = 11;

COM.ERROR.OPPONENT_DISCONNECTED = 20;
