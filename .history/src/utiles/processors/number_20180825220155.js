export default function(state, key) {
  const { currentEntry, operation } = state;
  const isPending = currentEntry !== null && operation !== null;
  const entryKey = isPending ? "nextEntry" : "currentEntry";
  let result;
  // console.log(state);
  // console.log(state[entryKey],"state[entryKey]");
  // console.log(key.value ,"key.value ");
 result = state[entryKey] === null ? key.value : state[entryKey] + key.value;
  const newValue = Number(result) <= Number.MAX_SAFE_INTEGER ? Number(result) : state[entryKey];
  
      // console.log(newValue ,"newValue");
  return {
    ...state,
    float: false,
    lastCalculation: {},
    [entryKey]: newValue
  };
}
