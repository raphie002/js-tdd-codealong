// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange: Set up test data and dynamically calculate the expected answer
    const currentYear = new Date().getFullYear(); // Get the current year at test execution time
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear; // Calculate the expected age dynamically

    // Act: Call the function being tested
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert: Compare the actual result with the expected result
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns the current year for a person born in year 0", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 0;
    const expectedAge = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });

  // You can add more test cases here to cover different scenarios
  it("returns 0 for a person born in the current year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear;
    const expectedAge = 0;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns a positive age for a birth year before the current year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - 5; // Born 5 years ago
    const expectedAge = 5;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });
});
