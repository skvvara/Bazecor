// fixme: eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import { Neuron } from "./neurons";

export interface StorageType {
  neurons: Neuron[];
}
