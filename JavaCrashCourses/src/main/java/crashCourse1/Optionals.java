package crashCourse1;

import java.util.Optional;

public class Optionals {

    public static void main (String args[]) {
        Optional<String> OptionalUser = Optional.of("Hello" + "Optional users");
        System.out.println(OptionalUser.isPresent());

    }
}
