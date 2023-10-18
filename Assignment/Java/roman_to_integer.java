import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        Map<Character, Integer> romanToInteger = new HashMap<>();
        romanToInteger.put('I', 1);
        romanToInteger.put('V', 5);
        romanToInteger.put('X', 10);
        romanToInteger.put('L', 50);
        romanToInteger.put('C', 100);
        romanToInteger.put('D', 500);
        romanToInteger.put('M', 1000);

        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        int su = 0;

        for (int i = 0; i < s.length() - 1; i++) {
            if (romanToInteger.get(s.charAt(i)) < romanToInteger.get(s.charAt(i + 1))) {
                su -= romanToInteger.get(s.charAt(i));
            } else {
                su += romanToInteger.get(s.charAt(i));
            }
        }
        su += romanToInteger.get(s.charAt(s.length() - 1));
        System.out.println(su);
    }
}
