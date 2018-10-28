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
        <input type="hidden" name="postid" value="${param.postid}" />
        <input type="hidden" name="username" value="${param.username}" />
        <input type="hidden" name="title" value="${param.title}" />
        <input type="hidden" name="body" value="${param.body}" />
    </form>
    <h1>
        ${param.title}
    </h1>
    <p>
        ${md}
    </p>
</body>
        
</html>