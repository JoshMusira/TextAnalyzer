import React from 'react'
import Counter from './Counter'
import '../Styles/section.css'


const Section = ({ text }) => {
    let my_text = text;

    const word_split = my_text.split(" ");
    const words = word_split.length - 1;

    // let words;
    // !word_split[0] ? words = 0 : words = word_split.length;


    const character_split = my_text.split("");
    const chars = character_split.length;

    function countSentences(my_text) {
        // Regular expression to match sentences
        let sentenceRegex = /[.?!]+/g;

        // Remove abbreviations (e.g., Mr., Mrs., etc.) to avoid false positives
        let withoutAbbreviations = my_text.replace(/\b(?:[A-Z]\.)+/g, '');

        // Remove multiple spaces between sentences to avoid counting empty sentences
        let withoutExtraSpaces = withoutAbbreviations.replace(/\s{2,}/g, ' ');

        // Count the number of matches
        let matches = withoutExtraSpaces.match(sentenceRegex);

        // Return the count of sentences
        return matches ? matches.length : 0;
    }

    // Example usage
    // var paragraph = "This is a sample paragraph. It has multiple sentences. E.g., Mr. John Doe Jr. lives in the U.S.A. The sentences have various punctuation marks!";
    let sentenceCount = countSentences(my_text);
    // console.log("Number of sentences:", sentenceCount);


    // const paragraph_split = my_text.split(".");
    // const Paragraphs = (my_text.match(/[.?!]/g) || []).length;

    // console.log(my_text_split)
    // let no_texts = my_text.length
    // console.log(no_texts)
    function countParagraphs(my_text) {
        // Split the essay text into paragraphs based on the newline character
        var paragraphs = my_text.split('\n');

        // Remove empty paragraphs
        paragraphs = paragraphs.filter(function (paragraph) {
            return paragraph.trim() !== '';
        });

        // Return the number of paragraphs
        return paragraphs.length;
    }

    // Example usage
    // var essay = "This is the first paragraph.\n\nThis is the second paragraph.\n\nAnd this is the third paragraph.";
    let numParagraphs = countParagraphs(my_text);
    // console.log("Number of paragraphs:", numParagraphs);
    function countPronouns(my_text) {
        // Define a regular expression to match pronouns
        let pronounRegex = /\b(he|she|it|they|we|you|I|me|him|her|us|them|myself|yourself|himself|herself|itself|themselves|ourselves|yourself)\b/gi;

        // Use match() to find all occurrences of pronouns in the paragraph
        let pronouns = my_text.match(pronounRegex);

        // Return the number of pronouns
        return pronouns ? pronouns.length : 0;
    }

    // Example usage
    // var paragraph = "He said that he would do it, but she didn't believe him.";
    let numPronouns = countPronouns(my_text);
    // console.log("Number of pronouns:", numPronouns);





    return (
        <div className='section-container'>
            <Counter property="Words" total={words} />
            <Counter property="Characters" total={chars} />
            <Counter property="Sentences" total={sentenceCount} />
            <Counter property="Paragraphs" total={numParagraphs} />
            <Counter property="Pronouns" total={numPronouns} />

        </div>
    )
}

export default Section