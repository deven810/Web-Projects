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
        isWellFormedRequest(request, response);
        request.getRequestDispatcher("/edit.jsp").forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/list.jsp").forward(request, response);
    }

    private boolean isWellFormedRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String action = request.getParameter("action");
        String postid = request.getParameter("postid");
        String title = request.getParameter("title");
        String body = request.getParameter("body");

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
        return true;
    }

    private void errorHandlingProcedure(int errorCode, HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String errorMsg = "";
        if (errorCode == 400)
            errorMsg = "(Bad Request)";
        else if (errorCode == 404)
            errorMsg = "(Not found)";

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
