export const COLORS = {
  TABLE_HEADER: '#ACCDF7',
  TABLE_FOOTER: '#DDEBFD'
};

export const extractIdFromUrl = (url: string): number | null => {
  const pattern = /(\d+)/g;

  const match = url.match(pattern);
  if (match) {
    const id = match[match.length - 1];
    if (id) {
      return Number(id);
    }
  }
  return null;
};

export const capitalizeWord = (text?: string): string | undefined => {
  if (!text) {
    return text;
  }
  const split = text.split('');
  const firstChar = split[0].toUpperCase();

  return firstChar + split.slice(1).join('');
};
