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
    <form method="GET" action="post">
        <div>
            <button type="submit" name="action" value="save">Save</button>
            <button type="submit" name="action" value="list">Close</button>
            <button type="submit" name="action" value="preview">Preview</button>
            <button type="submit" name="action" value="delete">Delete</button>
        </div>
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" value="${param.title}" />
        </div>
        <div>
            <label for="body">Body</label>
            <textarea id="body" style="height: 20rem;" name="body">${param.body}</textarea>
        </div>
        <div>
            ${param.postid}
            ${param.username}
            ${param.title}
            ${param.body}
            <input type="hidden" name="postid" value="${param.postid}" />
            <input type="hidden" name="username" value="${param.username}" />
        </div>
    </form>
</body>

</html>