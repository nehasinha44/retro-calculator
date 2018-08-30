import processors from "./processors/index";

export default function processKey(state, key) {
  console.log(processors[key.type]);
  return processors[key.type](state, key);
}
