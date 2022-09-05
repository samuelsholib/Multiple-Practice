package hackerRank;

public class DiagonalDifference {
   int[] numsArray = new int[]{1, 2, 3};
//                    {4, 5, 6;},
//                    {7, 8, 9;}
         int leftToRight = 0;
         int rightToLeft = 0;
         int rows = numsArray.length;
         int columns = numsArray[0].length;
         int i =0;
         int j = 0;
         int k = 0;
         int l = numsArray.length -1;

         while ( i < rows && j < columns && k < rows && l > = 0) {
             leftToRight += numsArray[i][j];
             rightToLeft += numsArray[k][l];
             i += l;
             j +=l;
             k += l;
             l -= l;

       return (leftToRight - rightToLeft);

    }

    }

