export function truncated(str: string, length: number) {
  const withoutBrTags = str.replace(/<br\s*\/?>/gi, '');
  if (withoutBrTags.length <= length) {
    return withoutBrTags;
  }
  return withoutBrTags.slice(0, length) + '...';
}

export function estimateReadingTime(text: string) {
  const wordCount = text.trim().split(/\s+/).length;

  let readingTime;
  let readingTimeText;

  if (wordCount < 60) {
    readingTime = wordCount / 3; // Anggap kecepatan membaca 3 kata per detik
    readingTimeText = Math.ceil(readingTime) + ' sec read';
  } else {
    readingTime = wordCount / 200; // Anggap kecepatan membaca 200 kata per menit
    readingTimeText = Math.ceil(readingTime) + ' min read';
  }

  return readingTimeText;
}
