<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Edit Post</title>
</head>

<body>
    <form method="GET" action="post">
        <button type="submit" name="body">
            <%= request.getParameter("action") %> </button>
    </form>
    <%= request.getAttribute("name") %>
</body>

</html>