package Model;

public class Post {
    public static String username;
    public static int pid;
    public static String title;
    public static String body;
    public static String mdate;
    public static String cdate;

    public static void main(String[] args) {
        System.out.println("Hello");
    }

    public Post( String name,int id, String t, String b, String m, String c) {
        pid = id;
        username = name;
        title = t;
        body = b;
        mdate = m;
        cdate = c;
    }


}