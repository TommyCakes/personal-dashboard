import countryFlagEmoji from "country-flag-emoji";

// All country flag emojis keyed by country code
console.log(countryFlagEmoji.data);

// Array of all country flag emojis
console.log(countryFlagEmoji.list);

// Array of country codes
console.log(countryFlagEmoji.countryCodes);

// Get country flag emoji for the given country code
console.log(countryFlagEmoji.get("US"));
// US: {
//  code: "US",
//  unicode: "U+1F1FA U+1F1F8",
//  name: "United States",
//  emoji: "🇺🇸"
// }

export default function countryFlag(country) {
    return countryFlagEmoji.get(country).emoji;
}