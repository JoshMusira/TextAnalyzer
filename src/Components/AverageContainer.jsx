import React from 'react'
import Average from './Average'
import '../Styles/average.css'

const AverageContainer = ({ text }) => {
    const word = text;
    function calculateReadingTime(word) {
        // Remove leading and trailing white spaces
        let paragraph = word.trim();

        // Split the paragraph into words based on white spaces
        let words = paragraph.split(/\s+/);

        // Calculate the number of  words
        let numWords = words.length;

        // Calculate the reading time in minutes
        let readingTime = numWords / 100; // Assuming 1 minute per 100 words

        // Return the reading time rounded to the nearest whole number
        return Math.round(readingTime);
    }

    // Example usage
    // var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus eleifend, iaculis odio ac, euismod urna. Mauris varius metus a enim eleifend, et aliquam lorem hendrerit.";
    let averageReadingTime = calculateReadingTime(word);
    // console.log("Average reading time:", averageReadingTime, "minutes");

    function findLongestWord(word) {
        // Remove punctuation marks and special characters
        let cleanText = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

        // Split the text into an array of words
        let words = cleanText.split(" ");

        // Initialize the longest word variable
        let longestWord = "";

        // Iterate through the array of words
        for (let i = 0; i < words.length; i++) {
            let currentWord = words[i];
            // Compare the current word's length with the longest word's length
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
        }

        return longestWord;
    }

    // Example usage
    // var paragraph = "This is a sample paragraph to demonstrate finding the longest word.";
    let longestWord = findLongestWord(word);
    // console.log("Longest word:", longestWord);



    return (
        <div className='larger-container'>
            <Average time="Average Reading Time: " longest={averageReadingTime} />
            <Average time="Longeast Word: " longest={longestWord} />
        </div>
    )
}

export default AverageContainer