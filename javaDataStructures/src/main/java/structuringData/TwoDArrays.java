package structuringData;

import java.util.Arrays;

public class TwoDArrays {
    public static void main (String[] args) {
       char [] [] gamingBoard = new char [3] [3];
       for (int i = 0; i< 3; i++) {
           for (int j =0; j < 3; j++) {
               gamingBoard[i][j] = '-';
           }
       }
        gamingBoard[0][0] = '0';
        gamingBoard [1][0] = '0';
        gamingBoard [2][0] = '0';

        char [][] winningBoard = new char[][] {
                new char [] {'0', '-', '-'},
                new char [] {'-', '1', '-'},
                new char [] {'-', '-', '2'}
        };

       System.out.println(Arrays.deepToString(gamingBoard));

       System.out.println(Arrays.deepToString(winningBoard));
    }
}
