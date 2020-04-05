/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var TutorialToken = artifacts.require("TutorialToken");

module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
};


