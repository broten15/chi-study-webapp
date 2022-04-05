import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class Parser {
    public static final String VOCAB_DELIM = "%";
    public static final String TERM_DELIM = "<>";
    public static final int CHI_POS = 1;
    public static final int DEF_POS = 0;
    public static final int CHAP = 7;


    public static void printResults(ArrayList<String> defs, ArrayList<String> chis, int chap) {
        System.out.println();

        System.out.println("export const l" + chap + "chars = [");
        for (String chi : chis) {
            System.out.println("  `" + chi + "`,");
        }
        System.out.println("];");


        System.out.println("export const l" + chap + "trans = [");
        for (String def : defs) {
            System.out.println("  `" + def + "`,");
        }
        System.out.println("];");

        System.out.println("\n");
        for (String chi : chis) {
            System.out.println(chi);
        }


        if (chis.size() != defs.size()) {
            System.out.println("NOT THE SAME SIZE");
        }
    }

    public static void main(String[] args) throws IOException {
        // File path is passed as parameter
        File file = new File("in" + CHAP + ".txt");
 
        BufferedReader br = new BufferedReader(new FileReader(file));
 
        String line;
        StringBuilder sb = new StringBuilder();

        while ((line = br.readLine()) != null) {
            sb.append(line);
        }
        br.close();

        // take new lines out
        for (int i = 0; i < sb.length(); i++) {
            if (sb.charAt(i) == '\n') {
                sb.deleteCharAt(i);
            }
        }

        // System.out.println("READ TEXT FILE\n");
        // have all text
        String text = sb.toString();

        String[] terms = text.split(TERM_DELIM);

        ArrayList<String> chis = new ArrayList<>();
        ArrayList<String> defs = new ArrayList<>();

        for (String term : terms) {
            String[] termParts = term.split(VOCAB_DELIM);
            assert(termParts.length == 2);
            chis.add(termParts[CHI_POS]);
            defs.add(termParts[DEF_POS]);
        }

        printResults(chis, defs, CHAP);
    }
}