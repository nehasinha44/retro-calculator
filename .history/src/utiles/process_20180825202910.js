import processors from "./processors/index";

export default function processKey(state, key) {
  console.log(key.value);
  return processors[key.type](state, key);
}
