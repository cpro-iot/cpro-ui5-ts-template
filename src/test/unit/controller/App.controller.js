/*global QUnit*/

sap.ui.define(
  ["cpro/ui5/__kunde__/__projekt__/controller/App.controller"],
  function (Controller) {
    "use strict";

    QUnit.module("App Controller");

    QUnit.test("I should test the app controller", function (assert) {
      var oAppController = new Controller();
      oAppController.onInit();
      assert.ok(oAppController);
    });
  }
);
