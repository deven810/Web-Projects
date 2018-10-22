import java.awt.geom.FlatteningPathIterator;
import java.io.IOException;
import java.rmi.ServerException;
import java.sql.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.commonmark.node.*;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

import Model.Post;

/**
 * Servlet implementation class for Servlet: ConfigurationTest
 *
 */

public class Editor extends HttpServlet {

    private Connection c;
    private Statement  s;
    private ResultSet rs;
    private boolean flag = false;

    public Editor() {
        // u = new ArrayList<String>();
        // pid = new ArrayList<Integer>();
        c = null;
        s = null; 
        rs = null; 
    }

    public void init() throws ServletException {
        /* load the driver */
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            System.out.println(ex);
            return;
        }
        try {
            /* create an instance of a Connection object */
            c = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", "cs144", ""); 
            s = c.createStatement() ;

            // s.executeUpdate("DROP TABLE IF EXISTS Posts" ) ;
            // s.executeUpdate("CREATE TABLE Posts(username VARCHAR(40), postid INTEGER, title VARCHAR(100), body VARCHAR(100), PRIMARY KEY(username, postid))");
            // s.executeUpdate("INSERT INTO Posts VALUES('haejin', 1, 'this my first post', 'hullo bitches')");
            // s.executeUpdate("INSERT INTO Posts VALUES('deven', 1, 'this isn't my first post', 'up dog')");

        } catch (SQLException ex){
            System.out.println("SQLException caught");
            System.out.println("---");
            while ( ex != null ) {
                System.out.println("Message   : " + ex.getMessage());
                System.out.println("SQLState  : " + ex.getSQLState());
                System.out.println("ErrorCode : " + ex.getErrorCode());
                System.out.println("---");
                ex = ex.getNextException();
                flag = true;
            }
        } 
    }

    public void destroy() {
        try { rs.close(); } catch (Exception e) { /* ignored */ }
        try { s.close(); } catch (Exception e) { /* ignored */ }
        try { c.close(); } catch (Exception e) { /* ignored */ }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String actionType = request.getParameter("action");
        isWellFormedRequest(request, response);
        
        if (actionType.equals("save") || actionType.equals("delete")) { //Get requests shouldn't update the database, throw an error
            errorHandlingProcedure(400, request, response);
        }
        processRequest(actionType, request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        isWellFormedRequest(request, response);
        processRequest(request.getParameter("action"), request, response);
    }

    private void processRequest(String actionType, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String title = request.getParameter("title");
        String body = request.getParameter("body");
        String p = request.getParameter("postid");
        int postid = 0; 
        try {
            if (p != null) {
                postid = Integer.parseInt(p);   
            }
        }
        catch (NumberFormatException e1) {
            errorHandlingProcedure(400, request, response);
        }

        if (actionType.equals("open")) {
            request.getRequestDispatcher("/edit.jsp").forward(request, response);            
        } 
        else if (actionType.equals("save")) { 
            savePost(username, postid, title, body);
            getPostsOfUser(username, request, response);
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        } 
        else if (actionType.equals("delete")) {
            deletePost(username, postid);
            getPostsOfUser(username, request, response);
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        }
        else if (actionType.equals("preview")) {
            request.getRequestDispatcher("/preview.jsp").forward(request, response);            
        } 
        else if (actionType.equals("list")) {
            getPostsOfUser(username, request, response);
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        }
    }

    private void getPostsOfUser(String username, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {

            ArrayList<Post> postList = new ArrayList<Post>();
            rs = s.executeQuery("SELECT * FROM Posts") ;
            if (rs.first()) {

                Post p;
                
                while(rs.next()) {
                    p = new Post( rs.getString("username"), rs.getInt("postid"), rs.getString("title"), rs.getString("body"), rs.getString("modified"), rs.getString("created"));
                    postList.add(p);
                }

                request.setAttribute("postList", postList);
  
                // request.setAttribute("name", rs.getString("username"));  
                // request.setAttribute("mtime", rs.getString("modified"));
                // request.setAttribute("ctime", rs.getString("created"));              
            } else {
                request.setAttribute("name", "yeah basuddy");                
            }
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        }
        catch (ServletException | SQLException | IOException e) {
            errorHandlingProcedure(600, request, response);
        }
    }

    private void getPreviewOfPost(String username, int postid, String title, String body) throws ServletException {
        ; // DB retrival of particular post and change to HTML code
    }

    private void getRawPost(String username, int postid) {
        ; // DB retrival of particular post and display as is
    }

    private void deletePost(String username, int postid) {
        ; // delete user's particular post
    }

    private void savePost(String username, int postid, String title, String body) {
        ; // Save user's post, possibly update existing entry 
    }

    private boolean isWellFormedRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String action = request.getParameter("action");
        String postid = request.getParameter("postid");
        String title = request.getParameter("title");
        String body = request.getParameter("body");

        try {
            if (action == null) {
                errorHandlingProcedure(400, request, response);
            } 
            else if (action.equals("open") && 
            (username == null || postid == null)) {
                errorHandlingProcedure(400, request, response);
            } 
            else if (action.equals("save") && 
            (username == null || postid == null || title == null || body == null)) {
                errorHandlingProcedure(400, request, response);
            } 
            else if (action.equals("delete") && 
            (username == null || postid == null)) {
                errorHandlingProcedure(400, request, response);
            }
            else if (action.equals("preview") && 
            (username == null || postid == null || title == null || body == null)) {
                errorHandlingProcedure(400, request, response);
            } 
            else if (action.equals("list") && 
            (username == null)) {
                errorHandlingProcedure(400, request, response);
            }
            else if (!(action.equals("list") || 
            action.equals("preview") ||
            action.equals("delete") ||
            action.equals("save") ||
            action.equals("open"))) {
                errorHandlingProcedure(400, request, response);
            }
        }
        catch (ServletException | IOException e1) {
            errorHandlingProcedure(500, request, response);
        }
        return true;
    }

    private void errorHandlingProcedure(int errorCode, HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String errorMsg = "";
        if (errorCode == 400)
            errorMsg = "(Bad Request)";
        else if (errorCode == 404)
            errorMsg = "(Not found)";
        else if (errorCode >= 500)
            errorMsg = "Internal Server Error";
            
            // request.setAttribute("fu", request.getParameter("username")); 
            // request.getRequestDispatcher("/list.jsp").forward(request, response);            
        
        try {
            response.setStatus(errorCode);
            request.setAttribute("errorMsg", errorMsg);
            request.getRequestDispatcher("/error.jsp").forward(request, response);
        } catch (ServletException | IOException e1) {
            response.setStatus(500);
            errorMsg = "Internal Server Error";
            request.setAttribute("errorMsg", errorMsg);
            request.getRequestDispatcher("/error.jsp").forward(request, response);
        }
    }
}
