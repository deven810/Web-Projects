<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %><!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Edit Post</title>
</head>
<body>
    <%= request.getParameter("body") %>
    <%= request.getAttribute("bod") %>

    <form method="GET" action="post">
        <button type="submit" name="body" value="<%= request.getParameter("body") %>"> Send </button>
    </form>
</body>
</html>
