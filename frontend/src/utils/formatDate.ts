export const formatDate = (dateString: string | undefined): string | undefined => {
  if (!dateString) return undefined;

  const parts = dateString.split("/");
  const year = parts[2];
  const month = parts[0];
  const day = parts[1];

  return `${year}-${month}-${day}`;
};
