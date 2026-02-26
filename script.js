import java.util.Scanner;
import java.io.*;

public class CryptoTree {
    private static int coins = 0;
    private static int level = 1;

    public static void tap() {
        coins += level;
        System.out.println("Монеты: " + coins);
    }

    public static void upgrade() {
        if (coins >= 10) {
            coins -= 10;
            level++;
            System.out.println("Уровень дерева: " + level);
        } else {
            System.out.println("Недостаточно монет!");
        }
    }

    public static void boost() {
        System.out.println("Вы посмотрели рекламу! 10 кликов дают x2.");
        for (int i = 0; i < 10; i++) {
            coins += level * 2;
        }
        System.out.println("Монеты: " + coins);
    }

    public static void save() {
        try (PrintWriter out = new PrintWriter(new FileWriter("crypto_tree.txt"))) {
            out.println(coins);
            out.println(level);
            System.out.println("Прогресс сохранён!");
        } catch (IOException e) {
            System.out.println("Ошибка сохранения: " + e.getMessage());
        }
    }

    public static void load() {
        try (BufferedReader br = new BufferedReader(new FileReader("crypto_tree.txt"))) {
            coins = Integer.parseInt(br.readLine());
            level = Integer.parseInt(br.readLine());
            System.out.println("Прогресс загружен!");
        } catch (IOException | NumberFormatException e) {
            System.out.println("Нет сохранений или ошибка загрузки.");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("🌳 Crypto Tree Clicker");
        while (true) {
            System.out.print("Введите команду (tap/upgrade/boost/save/load/exit): ");
            String cmd = sc.nextLine().trim().toLowerCase();
            switch (cmd) {
                case "tap": tap(); break;
                case "upgrade": upgrade(); break;
                case "boost": boost(); break;
                case "save": save(); break;
                case "load": load(); break;
                case "exit": 
                    System.out.println("Выход из игры...");
                    sc.close();
                    return;
                default:
                    System.out.println("Неизвестная команда!");
            }
        }
    }
}