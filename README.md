# Reflection Questions:

State updates: Used useState to track text and stats, updating both in the onChange handler so changes reflect instantly.

Reading time: Estimated using average reading speed (~200 words per minute) for realistic results.

Responsive UI: Kept calculations lightweight and synchronous so updates happen smoothly even during fast typing.

Challenges: Handling edge cases like empty or extra spaces and ensuring counts stayed accurate without slowing the app.

# Character Counter Application
Overview

This project is a React TypeScript application that demonstrates state management, event handling, and component communication using React hooks.
It allows users to input text and view real-time statistics such as character count, word count, and estimated reading time.

Components
1. TextInput

Purpose: Captures user input.

Props:

onTextChange: Callback function triggered when the text changes.

placeholder (optional): Placeholder text for the textarea.

initialValue (optional): Sets the initial text value.

Usage: Used by the parent component to receive live text updates.

2. StatsDisplay

Purpose: Displays calculated text statistics.

Props:

stats: Object containing characterCount, wordCount, and readingTime.

showReadingTime (optional): Controls whether reading time is displayed.

Usage: Receives statistics from the parent and renders them in a readable format.

3. CharacterCounter

Purpose: Combines TextInput and StatsDisplay, manages state, and performs calculations.

Props:

minWords (optional): Minimum word goal.

maxWords (optional): Maximum word goal.

targetReadingTime (optional): Target reading duration (in minutes).

Usage: Acts as the main container component responsible for state updates and rendering child components.

How It Works

The user types text in the TextInput component.

The onTextChange callback sends the text to the CharacterCounter.

The parent component calculates:

Number of characters

Number of words

Estimated reading time

Updated statistics are passed to the StatsDisplay, which renders them in real time.
