// if given John Doe, it will return JD, if given just John, it will return JO

export function getInitials(name: string): string {
  const nameArray = name.split(" ");
  if (nameArray.length > 1) {
    return nameArray[0].charAt(0) + nameArray[1].charAt(0);
  }
  return nameArray[0].charAt(0);
}
