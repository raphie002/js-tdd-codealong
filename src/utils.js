// Your code here
export function currentAgeForBirthYear(birthYear) {
  // Get the current full year dynamically
  const currentYear = new Date().getFullYear();

  // Calculate the age
  const age = currentYear - birthYear;

  return age;
}
