module.exports=function anonymous(options,Sqrl
/*``*/) {
var tmpltRes='';for(var key in options.accounts){if(!options.accounts.hasOwnProperty(key)) continue;tmpltRes+=(function(hvals){var tmpltRes='';var hvals0=hvals;tmpltRes+='\r\n<div>\r\n';if(hvals.this.status === 'closed'){tmpltRes+='\r\n    <div>\r\n    Your account has been closed!\r\n    </div>\r\n';}else{tmpltRes+='\r\n    ';if(hvals.this.status === 'suspended'){tmpltRes+='\r\n    <div>\r\n    Your account has been temporarily suspended\r\n    </div>\r\n    ';}else{tmpltRes+='\r\n    <div>\r\n        Bank balance:\r\n        <span class=';if(hvals.this.balance < 0){tmpltRes+='\'negative\'';}else{tmpltRes+='\'positive\'';}tmpltRes+='>';tmpltRes+=hvals.this.balanceFormatted;tmpltRes+='</span>\r\n    </div>\r\n    ';}tmpltRes+='\r\n';}tmpltRes+='\r\n</div>\r\n';return tmpltRes})({this:options.accounts[key], key: key})};return tmpltRes
}