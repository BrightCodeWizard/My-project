/**  Write a program that checks whether a person is eligible to vote based on their age.
 * A person must be at least 18 years old to vote. Print "Eligible to vote"
 if the person is 18 or older, otherwise print "Not eligible to vote".**/

import java.util.Scanner;  // Import Scanner for user input

public class Trywork3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Create a Scanner object

        // Asking the user for input
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();  // Read the integer input

        // Check if the person is eligible to vote
        if (age >= 18) {
            System.out.println("Eligible to vote");
        } else {
            System.out.println("Not eligible to vote");
        }

        scanner.close();  // Close the scanner
    }
}
