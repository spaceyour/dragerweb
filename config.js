//Javascript kısmında bulunan blokların yapısı

Blockly.Blocks['alert'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Uyarı_Göster");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['alert'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert('+value+');\n';
  return code;
};


Blockly.Blocks['style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("İD:")
        .appendField(new Blockly.FieldTextInput("Your_İd"), "NAME")
        .appendField("StyleChange")
        .appendField(new Blockly.FieldDropdown([["color","color"], ["background","background"], ["width","width"], ["height","height"], ["fontSize","fontSize"]]), "aa")
        .appendField("=");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['style'] = function(block) {
  var id = block.getFieldValue('NAME');
  var type = block.getFieldValue('aa');
  var value = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
console.log(type);
  // TODO: Assemble JavaScript into code variable.
  var code = "document.getElementById(\""+id+"\").style."+type+"="+value+"; \n ";
  return code;
};

Blockly.Blocks['click'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("String")
        .appendField("Click >> İD");
    this.appendStatementInput("stat")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['click'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var stat = Blockly.JavaScript.statementToCode(block, 'stat');
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.getElementById('+value+').onclick=function(){'+stat+'};\n';
  return code;
};

Blockly.Blocks['open'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Open")
        .appendField(new Blockly.FieldTextInput("url"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['open'] = function(block) {
  var text= block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open("'+text+'");\n';
  return code;
};


