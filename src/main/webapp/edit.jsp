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
            <button type="submit" value="save">Save</button>
            <button type="submit" value="list">Close</button>
            <button type="submit" value="preview">Preview</button>
            <button type="submit" value="delete">Delete</button>
        </div>
        <div>
            <label for="text">Title</label>
            <input type="text" name="text" id="text">
        </div>
        <div>
            <label for="body">Body</label>
            <textarea style="height: 20rem;" name="body" id="body"></textarea>
        </div>
    </form>
</body>

</html>