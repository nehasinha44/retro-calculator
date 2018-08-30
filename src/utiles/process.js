import processors from "./processors/index";

export default function processKey(state, key) {
  return processors[key.type](state, key);
}
