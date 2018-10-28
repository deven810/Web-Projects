package Model;

public class Post {
    public String username;
    public int pid;
    public String title;
    public String body;
    public String mdate;
    public String cdate;

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