# Understanding Cross-Site Scripting (XSS)

## What is XSS?

**Cross-Site Scripting (XSS)** is a type of security vulnerability commonly found in web applications. XSS attacks occur when an attacker injects malicious scripts into content delivered to other users. This can happen when user input is not properly sanitized or escaped, allowing the attacker to execute scripts in the context of another user's browser session.

## Types of XSS

1. **Stored XSS (Persistent XSS)**: The malicious script is stored on the server and served to users whenever they request the affected content. This can happen in forums, comment sections, or any feature where users can submit content that gets saved and displayed to others.

2. **Reflected XSS (Non-Persistent XSS)**: The malicious script is reflected off a web server, usually in the form of a query parameter in a URL. The script is embedded in a link that a user has to click on, and the payload is executed when the link is accessed.

3. **DOM-based XSS**: The vulnerability exists in the client-side code rather than the server-side code. The malicious script is executed as a result of modifying the DOM environment in the browser.

## Example of an XSS Attack

### Scenario: A Comment Section with Stored XSS

Imagine a web application with a comment section where users can post comments on articles. The application fails to properly sanitize user input before storing it in the database and displaying it back to users.

### Steps of the Attack

1. **Attacker Posts a Malicious Comment**: The attacker submits a comment containing a malicious script.
   ```html
   <script>alert('XSS Attack!');</script>

2. **Malicious Script Stored**: The web application saves the comment, including the malicious script, in the database.

3. **Comment Displayed to Users**: Whenever any user views the article with the comments, the stored comment is retrieved from the database and rendered on the page. The malicious script is executed in the context of the user's browser.