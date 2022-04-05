import { l1py, l1chars, l1trans, l1sents } from "../data/l1/l1data";
import { l2py, l2chars, l2trans, l2sents } from "../data/l2/l2data";
import { l3py, l3chars, l3trans, l3sents } from "../data/l3/l3data";
import { l4py, l4chars, l4trans, l4sents } from "../data/l4/l4data";
import { l5py, l5chars, l5trans, l5sents } from "../data/l5/l5data";
import { l6py, l6chars, l6trans, l6sents } from "../data/l6/l6data";
import { l7py, l7chars, l7trans, l7sents } from "../data/l7/l7data";
import { l8py, l8chars, l8trans, l8sents } from "../data/l8/l8data";

export const lessonData = [
  [l1py, l1chars, l1trans, l1sents],
  [l2py, l2chars, l2trans, l2sents],
  [l3py, l3chars, l3trans, l3sents],
  [l4py, l4chars, l4trans, l4sents],
  [l5py, l5chars, l5trans, l5sents],
  [l6py, l6chars, l6trans, l6sents],
  [l7py, l7chars, l7trans, l7sents],
  [l8py, l8chars, l8trans, l8sents],
  // [l9py, l9chars, l9trans, l9sents],
  // [l10py, l10chars, l10trans, l10sents],
];
export const PY = 0;
export const CHARS = 1;
export const TRANS = 2;
export const SENTS = 3;

export const NUM_CHAPS = lessonData.length;
export const CHAP_TEXT = "Chapter";

export const TERM_DELIM = "{}";

export const ROW_DELIM = "||";