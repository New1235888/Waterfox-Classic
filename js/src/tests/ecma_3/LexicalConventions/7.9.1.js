/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 402386;
var summary = 'Automatic Semicolon insertion in postfix expressions';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  var expr;
  var code;

  // LeftHandSideExpression [no LineTerminator here] ++  

  code   = 'expr ++';
  expr   = 0;
  expect = 1;

  try
  {
    eval(code);
    actual = expr;
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + ': ' + code);

  code   = 'expr\n++';
  expr   = 0;
  expect = 'SyntaxError: expected expression, got end of script';

  try
  {
    eval(code);
    actual = expr;
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + ': ' + code);

  // LeftHandSideExpression [no LineTerminator here] --

  code   = 'expr --';
  expr   = 0;
  expect = -1;

  try
  {
    eval(code);
    actual = expr;
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + ': ' + code);

  code   = 'expr\n--';
  expr   = 0;
  expect = 'SyntaxError: expected expression, got end of script';

  try
  {
    eval(code);
    actual = expr;
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + ': ' + code);

  //

  var x = 1;
  var y = 1;
  code   = '(x\n)-- y';
  expect = 'SyntaxError: unexpected token: identifier';

  try
  {
    eval(code);
    actual = expr;
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + ': ' + code);

  code   = '(x)-- y';
  expect = 'SyntaxError: unexpected token: identifier';

  try
  {
    eval(code);
    actual = expr;
  }
  catch(ex)
  {
    actual = ex + '';
  }
  reportCompare(expect, actual, summary + ': ' + code);

  exitFunc ('test');
}

