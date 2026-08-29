export const assertExactRuntime = ({ actualNode, actualNpm, expectedNode, expectedNpm }) => {
  const failures = [];
  if (actualNode !== expectedNode) failures.push(`Node ${expectedNode} is required; found ${actualNode}.`);
  if (actualNpm !== expectedNpm) failures.push(`npm ${expectedNpm} is required; found ${actualNpm}.`);
  if (failures.length) throw new Error(failures.join(' '));
};
