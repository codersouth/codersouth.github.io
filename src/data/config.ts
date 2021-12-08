export const functions =
  process.env.NODE_ENV === 'production'
    ? 'https://us-central1-codersouth-rtc.cloudfunctions.net'
    : 'http://localhost:5001/codersouth-rtc/us-central1'
