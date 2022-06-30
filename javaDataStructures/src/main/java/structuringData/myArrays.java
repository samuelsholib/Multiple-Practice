package structuringData;

import java.util.Arrays;

public class myArrays {

    public static void main(String[] args) {
        String[] colors = new String[5];
        colors[0] = "Burgandi";
        colors[1] = "White";
        colors[2] = "Purple";
        colors[3] = "Blue";
        colors[4] = "White";
        System.out.println(colors[0]);
        System.out.println(colors[1]);
        System.out.println(colors[2]);
        System.out.println(colors[3]);
        System.out.println(colors[4]);


        int[] numbers = {404, 405, 406, 407,408};

                for (int i = 0; i < numbers.length; i++ ) {
                    System.out.println(numbers[i]);
                }

            // for loop for reverse counting

                for (int i = colors.length -1; i >= 0; i--) {
                    System.out.println(colors[i]);
                }
                // to print out the number of colors
                System.out.println(colors.length);
    }

}
