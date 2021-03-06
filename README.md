# password-generator


## Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password

THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
Mock-Up

## Input
- Character Types to include
    -Lowercase 
    -Uppercase 
    -Numeric
    -Symbols
- Prompts
    -Lowercase
    -Uppercase
    -Numeric
    -Symbols
- Data Length (8-128 characters)
- Password must be randomized
- My input should be validated and at least one character type should be selected

## Output
- Generated Password

## Challenges
- setting the conditions
- setting up the for loop
- combining the array to set the password

## Password options T = TRUE, F = FALSE
3 options
- TTTF
- TTFT
- TFTT
- FTTT

2 options
- TTFF
- TFFT
- TFTF
- FTTF
- FFTT
- FTFT

1 option
- TFFF
- FTFF
- FFTF
- FFFT

## Contributors
Miguel Osorio