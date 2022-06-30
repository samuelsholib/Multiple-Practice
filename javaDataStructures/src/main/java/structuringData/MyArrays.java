package structuringData;

import java.util.Arrays;

public class MyArrays {

    public static void main(String[] args) {
        String[] colors = new String[5];
        colors[0] = "Burgandi";
        colors[1] = "Red";
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

                    //  changing the value of array @ index 4
                colors[4] = "skyBlue";
                System.out.println(colors[4]);

                    // different way of looping 1
                for (String color: colors) {
                    System.out.println(colors);
                }

                    // different way of looping 2
                Arrays.stream(colors).forEach(System.out::println);

                Arrays.stream(numbers).forEach(System.out::println);

                    // Arrays.fill(numbers);
    }

}
