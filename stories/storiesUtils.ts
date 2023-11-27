export function getRandomElement(array: any) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export function getRandomNumber(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateDummyCompanies(numCompanies: any) {
  const companyNames = [
    "Tech Corp",
    "Innovate LLC",
    "BuildIt Inc.",
    "CodeWare",
    "NextGen Solutions",
  ];
  const locations = [
    "New York, NY",
    "San Francisco, CA",
    "Los Angeles, CA",
    "Seattle, WA",
    "Austin, TX",
  ];
  const websites = [
    "techcorp.com",
    "innovatellc.com",
    "builditinc.com",
    "codeware.com",
    "nextgensol.com",
  ];

  let generatedData = [];

  for (let i = 0; i < numCompanies; i++) {
    const company = {
      name: i.toString(),
      // name: getRandomElement(companyNames),
      location: getRandomElement(locations),
      website: getRandomElement(websites),
      employees: getRandomNumber(50, 1000),
      share_price: getRandomNumber(10, 200),
    };
    generatedData.push(company);
  }

  return generatedData;
}

export function generateFeaturesArray(length: number) {
  const features = [];
  for (let i = 0; i < length; i++) {
    features.push({
      soon: Math.random() > 0.5, // Randomly assign true or false
      included: Math.random() > 0.5, // Randomly assign true or false
      text: `Feature ${i + 1}`, // Unique text for each feature
    });
  }
  return features;
}
