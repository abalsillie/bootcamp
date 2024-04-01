# Regular Expression for Matching an Email

This is a guide for explaining how we can use regular expressions to define patterns that validate input. In this instance we will look at a regular expression for email validation, which will ensure correct email input: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

## Summary

The regex `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/` matches the following validation for email addresses:
- A string of letters, digits, underscores, dots, or hyphens
- An `@`
- A string of letters, digits, underscores, dots, or hyphens
- A `.`
- A 2-6 letter domain name (.com)

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors
Anchors define the position of the input within a string. In email validation we have a start anchor `^` and an end anchor `$`. A few examples are below to detail what this looks like:
- The regex `^cat$` will only match the input "cat"
- The regex `^cat` will match any input where cat is at the beginning of the string, i.e. "cat is cute"
- The regex `cat$` will match any input where cat is at the end of the string, i.e. "cute cat"

### Quantifiers
Quantifiers tell us how many times a pattern should match:
- `+` means one or more, in this case, meaning that patterns `[a-z0-9_\.-]` and `[\da-z\.-]` should occur at least once
- `{2,6}` after `[a-z\.]` matches a sequence of 2-6 lowercase letters, and refers to the domain name .com, .org or .edu

### Grouping Constructs
Grouping constructs group together characters or sub-expressions inside a parentheses `()`, for a number of purposes, namely using quantifiers. In email matching there are 3 grouping constructs:
- Local `([a-z0-9_\.-]+)`: matches the username of the email, before the `@`
- Domain `([\da-z\.-]+)`: between the `@` and the `.`
- Top-level domain `([a-z\.]{2,6})`: after the `.`

### Bracket Expressions
Bracket expressions are used to define a set of characters that can be matched in a text string, denoted by square brackets. In email matching there are 3 bracket expressions:
- Local `[a-z0-9_\.-]`: matching letters `a` to `z`, digits `0` to `9`, and characters `_`, `.` and `-`
- Domain `[\da-z\.-]`: matching letters `a` to `z`, digits `0` to `9`, and characters `.` and `-`
- Top-level domain `[a-z\.]`: matching letters `a` to `z` and character `.`

### Character Classes
Character classes represent sets of characters that simplify regex patterns, making them easier to read. Email matching uses:
- `character sets`: defined in square brackets such as `[a-z]` or `[0-9]`
- `metacharacters`: characters with special meanings such as the dot `(.)` and the hyphen `(-)`
- `repeating character classes`: the `+` and `{2,6}` quantifiers indicate repeating character classes. In the case of `{2,6}`, the curly brackets define the range of repetition for the preceding character class

### The OR Operator
The OR operator in regex is `|`, and means that we can match for a OR b conditions:
- a|b accepts strings "a" or "b"
- Using a bracket list `[ab]` would accept any one of the characters within the square bracket, i.e. a or b

### Flags
Regex flags are parameters that can be added to a pattern to modify how it works:
- i flag (case-insensitivity): when used, the regex pattern becomes case insensitive, we could add `i` to the end of the regex to make it case insensitive, if we wanted: `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i`
- g flag (global): when used, finds all matches within a given string, rather than stopping after the first match

### Character Escapes
Character escapes suppress the special meaning of metacharacters and representing characters, and treat them as literals:
- Backslash `\.`: refers to a literal `.` within the email address. If the dot is not escaped, it denotes a wildcard character
- Metacharacters: the dot `.`, plus sign `+`, caret `^`, hyphen `-`
- Escape sequences: characters that can not be directly typed or represented in a string, starting with a backslash `\` and followed by a letter

## Author
Alex Balsillie is a Monash University Coding Bootcamp student, with experience in both front-end and back-end development. A link to her GitHub profile is here: https://github.com/abalsillie
