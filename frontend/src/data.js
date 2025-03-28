import titles from "./titles.json";
import content from "./content.json";

const sections = titles.map((book) => ({
    title: book.title, // Get title from JSON
    content: content[book.id] || "content not available", // Content will be added later
}));

export default sections;

