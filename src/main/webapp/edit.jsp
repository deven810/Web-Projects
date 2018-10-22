<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Edit Post</title>
</head>

<body>
    <div>
        <h1>Edit Post</h1>
    </div>
    <form method="POST" action="post">
        <div>
            <button type="submit" name="action" value="save">Save</button>
            <button type="submit" name="action" value="list">Close</button>
            <button type="submit" name="action" value="preview">Preview</button>
            <button type="submit" name="action" value="delete">Delete</button>
        </div>
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" value="<%= request.getParameter(\" title\") %>">
        </div>
        <div>
            <label for="body">Body</label>
            <textarea style="height: 20rem;" name="body" id="body" value="<%= request.getParameter(\" body\") %>"></textarea>
        </div>
        <div>
            <input type="hidden" id="postid" name="postid" value="<%= request.getAttribute(\" postid\") %>">
            <input type="hidden" id="username" name="username" value="<%= request.getAttribute(\" username\") %>">
        </div>
    </form>
</body>

</html>