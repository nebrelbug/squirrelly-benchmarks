module.exports=function anonymous(options,Sqrl
/*``*/) {
"use strict";var tmpltRes="";Sqrl.F=Sqrl.Filters;tmpltRes+="Hello ";tmpltRes+=Sqrl.F.d(options.name)||"";tmpltRes+="! <strong>You have ";tmpltRes+=Sqrl.F.d(options.messageCount)||"";tmpltRes+=" messages! ";tmpltRes+=Sqrl.F.d(options.colors)||"";return tmpltRes;
}