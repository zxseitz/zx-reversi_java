package reversi.game;

import reversi.bot.Bot;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by Claudio on 21.05.2017.
 */
public class Round {
    private static final AtomicInteger counter = new AtomicInteger(1);

    private int id;
    private Player player;
    private Token.Color playerColor;
    private Board board;
    private Bot bot;

    public Round(Player player, Board board, Token.Color color, Bot bot) {
        this.id = counter.getAndIncrement();
        this.player = player;
        this.board = board;
        this.playerColor = color;
        this.bot = bot;
    }

    public int getId() {
        return this.id;
    }

    public Board getBoard() {
        return board;
    }

    public Player getPlayer() {
        return player;
    }

    public Token.Color getPlayerColor() {
        return playerColor;
    }

    public Bot getBot() {
        return bot;
    }
}
