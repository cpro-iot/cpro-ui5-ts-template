/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(
    ["cpro/ui5/__kunde__/__projekt__/test/integration/AllJourneys"],
    function () {
      QUnit.start();
    }
  );
});
