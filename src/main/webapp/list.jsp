<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import = "Model.Post"%>
<%@page import = "java.util.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>


<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Edit Post</title>

    <style>
        button {
            background-color: teal;
            color: white;
            width: 150px;
            height: 50px;
        }

        table {
            border: solid black 1px;
            width: 50%;
        }
    </style>
</head>

<body>
    <form method="GET" action="post">
        <button type="submit" name="body">
            <%= request.getParameter("action") %>
        </button>
    </form>

    <% List<Post> posts = (ArrayList<Post>)request.getAttribute("postList"); %>
    <table>
        <tr>
            <th>Title</th>
            <th>Created</th>
            <th>Modified</th>
        </tr>
        <% for(int i = 0; i < posts.size(); i++) { %>
        <tr>
            <td>
                <%= posts.get(i).title %>
            </td>
            <td>
                <%= posts.get(i).cdate %>
            </td>
            <td>
                <%= posts.get(i).mdate %>
            </td>
        </tr>
        <% } %>
    </table>

</body>

</html>