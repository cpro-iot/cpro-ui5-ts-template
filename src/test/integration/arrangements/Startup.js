sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
  "use strict";

  return Opa5.extend(
    "cpro.ui5.__kunde__.__projekt__.test.integration.arrangements.Startup",
    {
      iStartMyApp: function (oOptions) {
        oOptions = oOptions || {};

        // start the app with a minimal delay to make tests fast but still async to discover basic timing issues
        oOptions.delay = oOptions.delay || 50;

        // start the app UI component
        this.iStartMyUIComponent({
          componentConfig: {
            name: "cpro.ui5.__kunde__.__projekt__",
            async: true,
          },
          hash: oOptions.hash,
          autoWait: oOptions.autoWait,
        });
      },
    }
  );
});
