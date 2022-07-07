package structuringData;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class JavaStreams {

    public static void main(String[] args) throws IOException {
        // 1 Integer Stream
        IntStream
                .range(1, 10)
                .forEach(System.out::println);

        // 2 Stream Integers skip some numbers using Lambda expression
        IntStream
                .range(1, 20)
                .skip(10)
                .forEach(num -> System.out.println(num));

        // 3 Using sum function to add a stream of numbers
        System.out.println(
                IntStream
                        .range(10, 20)
                        .sum());
        System.out.println();

        // 4 Stream.of function
        Stream.of("Yacob", "Samuel", "Ermiyas", "Ammanuel", "Dinku")
                .sorted()
                .findFirst()
                .ifPresent(System.out::println);

        // 5 Stream From Array , sort, filter and print
        String[] courses = {"mBios404", "mBios401", "CHEM345", "mBios497"};
        Arrays.stream(courses)
                .filter(course -> course.startsWith("m"))
                .sorted()
                .forEach(System.out::println);

        // Average of Squares of an int array
        Arrays.stream(new int[]{3, 5, 7, 9, 11})
                .map(ints -> ints * ints)
                .average()
                .ifPresent(System.out::println);

        // 7 Stream from List, filter them and display.
        List<String> students = Arrays.asList("Meseret", "Mihret", "Debalke", "Desalegn", "Tamirat", "Abebaw", "Hizkiel");
        students
                .stream()
                .map(String::toUpperCase)
//                .filter(student -> student.endsWith("T"))
                .forEach(System.out::println);
    }
}
