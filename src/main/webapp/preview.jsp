<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Preview Post</title>
</head>

<body>
    <form method="POST" action="post">
        <button type="submit" name="action" value="open">Close Preview</button>
    </form>
    <h1>
        <%= request.getParameter("title") %>
    </h1>
    <p>
        <%= request.getParameter("body") %>
    </p>
</body>

</html>