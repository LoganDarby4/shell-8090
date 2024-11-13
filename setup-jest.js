import "jest-preset-angular/setup-jest";
import HC_Accessibility from "highcharts/modules/accessibility";
import * as Highcharts from "highcharts";

HC_Accessibility(Highcharts);

// Removes unnecessary warnings from the jest console
let consoleSpy;
beforeAll(() => {
  consoleSpy = jest
    .spyOn(global.console, "error")
    .mockImplementation((message) => {
      if (!message?.message?.includes("Could not parse CSS stylesheet")) {
        global.console.warn(message);
      }
    });
});
