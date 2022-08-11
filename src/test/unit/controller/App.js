/*global QUnit*/

sap.ui.define(
  ["cpro/ui5/__kunde__/__projekt__/controller/Home.controller"],
  function (oController) {
    "use strict";

    QUnit.module("App Controller");

    QUnit.test("I should test the controller", function (assert) {
      var oAppController = new oController();

      oAppController.onInit();
      assert.ok(oAppController);
    });
  }
);
