/** Write a program that checks if a given integer is even or odd.
 If it is even, print "Even number", otherwise print "Odd number"**/
import java.util.Scanner;
public class Trywork2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Create a Scanner object

        // Asking the user for input
        System.out.print("Enter an integer: ");
        int num = scanner.nextInt();  // Read the integer input

        // Check if the number is even or odd
        if (num % 2 == 0) {
            System.out.println("Even number");
        } else {
            System.out.println("Odd number");
        }

        scanner.close();

    }
}
