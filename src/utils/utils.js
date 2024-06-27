export const formatDate = (createdAt) => {

  // Friday, 21 June 2024

  const date = new Date(createdAt);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const monthsOfYear = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${monthsOfYear[date.getMonth()]} ${date.getFullYear()}`;

}