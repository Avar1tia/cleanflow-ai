export function generateLeadSummary({
  fullName,
  cleaningType,
  propertySize,
  preferredDate,
  message,
}) {
  const sizeText = propertySize ? `${propertySize} home` : 'property';

  const toneHint = message?.toLowerCase() || '';
  const wantsEco = toneHint.includes('eco') || toneHint.includes('green');
  const hasPets = toneHint.includes('pet') || toneHint.includes('dog');
  const timePressure =
    toneHint.includes('asap') ||
    toneHint.includes('urgent') ||
    toneHint.includes('tomorrow') ||
    toneHint.includes('this week');

  const extraDetails = [];
  if (wantsEco) extraDetails.push('prefers eco-friendly products');
  if (hasPets) extraDetails.push('has pets at home');
  if (timePressure) extraDetails.push('time-sensitive booking window');

  const extras =
    extraDetails.length > 0 ? ` Notes: ${extraDetails.join(', ')}.` : '';

  return `${fullName} is requesting a ${cleaningType.toLowerCase()} for a ${sizeText} around ${preferredDate}. Lead looks like a good fit for a standard residential package.${extras}`;
}

