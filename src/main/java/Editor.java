import java.awt.geom.FlatteningPathIterator;
import java.io.IOException;
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

/**
 * Servlet implementation class for Servlet: ConfigurationTest
 *
 */
public class Editor extends HttpServlet {

    public Editor() {
    }

    public void init() throws ServletException {
        /* write any servlet initialization code here or remove this function */
    }

    public void destroy() {
        /* write any servlet cleanup code here or remove this function */
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
        int postid; 
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
            getPostsOfUser(username);
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        } 
        else if (actionType.equals("delete")) {
            deletePost(username, postid);
            getPostsOfUser(username);
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        }
        else if (actionType.equals("preview")) {
            request.getRequestDispatcher("/preview.jsp").forward(request, response);            
        } 
        else if (actionType.equals("list")) {
            getPostsOfUser(username);
            request.getRequestDispatcher("/list.jsp").forward(request, response);            
        }
    }

    private void getPostsOfUser(String username) {
        ; // DB retrival of all the posts fo the user
    }

    private void getPreviewOfPost(String username, int postid, String title, String body) {
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
