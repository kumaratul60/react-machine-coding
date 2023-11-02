How does a RegEx work?

RegEx operates by defining a pattern that represents a specific set of characters or sequences. This pattern is then applied to a target text to identify matches or perform transformations. Here’s a brief overview of regex syntax, with the basic components and operations most frequently used:

**Literals**: Regular expressions can consist of literal characters that match themselves exactly. For example, the pattern “hello” would match the string “hello” in the target text.

**Metacharacters**: Metacharacters are special characters with a special meaning within a regular expression. Examples include:

- **.**(dot): Matches any character except a newline character.
- *(**asterisk**): matches one or more instances of any character.
- **+**(plus): Matches one or more occurrences of the preceding character.
- **?**(question mark): Matches zero or one occurrence of the preceding character.
- **[]** (square brackets): Define a character class, matching any character within the brackets.
- **()** (parentheses): Creates a capture group for capturing matched subpatterns.
- **Modifiers**: Modifiers specify additional rules for matching. Common modifiers include:
- **i:** Case-insensitive matching.
- **g:** Global matching (matches all occurrences rather than stopping at the first match).
- **m:** Multiline matching.
- **s:** Dot matches all characters including newline characters.
- **Anchors**: Anchors are used to specify the position of a match within the text. Examples include:
- **^** (**caret**): Matches the start of a line.
- **$**: Matches the end of a line.
- **\b**: Matches a word boundary.
- **\d**: Matches any digit character.
- **\D**: Matches any non-digit character.
- **\w**: Matches any word character (alphanumeric plus \_).
- **\s**: Matches any whitespace character.
- **\S**: Matches any non-whitespace character.
- **\A**: Matches the start of the string.
- **\z**: Matches the end of the string.

### Sample regex to match a phone number with optional country code

```javascript
/^\+?(\d{1,3})?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
```

### Sample regex to validate an email address

```javascript
/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
```

Combining these components and operations allows you to create intricate and powerful patterns to search, validate, and transform text data using regular expressions.
