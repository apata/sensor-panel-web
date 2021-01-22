const getTimeRangeToNow = (timeToPrevious: number) => {
  const now = new Date();
  const previous = new Date(now.getTime() - timeToPrevious);
  return { startTime: previous.toISOString(), endTime: now.toISOString() };
};

export default getTimeRangeToNow;