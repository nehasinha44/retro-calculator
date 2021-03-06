export default function(state, key) {
  console.log("number",state);
  const { currentEntry, operation } = state;
  const isPending = currentEntry !== null && operation !== null;
  const entryKey = isPending ? "nextEntry" : "currentEntry";
  let result;

  if (state.float) {
    result = state[entryKey] === null ? key.value : state[entryKey] + key.value;
  } else {
    console.log("number", state[entryKey]);
    result = state[entryKey] === null ? key.value : state[entryKey] + key.value;
  }

  const newValue =
    Number(result) <= Number.MAX_SAFE_INTEGER
      ? Number(result)
      : state[entryKey];

  return {
    ...state,
    float: false,
    lastCalculation: {},
    [entryKey]: newValue
  };
}
