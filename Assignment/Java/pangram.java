import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        Set<Character> ad = new HashSet<>();

        for (char c : s.toCharArray()) {
            if (c != ' ') {
                ad.add(c);
            }
        }

        if (ad.size() == 26) {
            System.out.println("Pangram");
        } else {
            System.out.println("Not a Pangram");
        }

        System.out.println(ad);
    }
}
