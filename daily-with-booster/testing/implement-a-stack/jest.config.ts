import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.css$": "some-css-transformer",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
};

export default config;
