export function getAge(birthDateString: string): number {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
