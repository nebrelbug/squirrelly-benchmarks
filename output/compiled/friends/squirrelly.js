module.exports=function anonymous(options,Sqrl
/*``*/) {
var tmpltRes='<!doctype html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="UTF-8">\r\n		<title>Friends</title>\r\n	</head>\r\n	<body>\r\n		<div class="friends">\r\n		';for(var i=0;i<options.friends.length; i++){tmpltRes+=(function(hvals){var tmpltRes='';var hvals0=hvals;tmpltRes+='\r\n			<div class="friend">\r\n				<ul>\r\n					<li>Name: ';tmpltRes+=hvals.this.firstName;tmpltRes+=' ';tmpltRes+=hvals.this.lastName;tmpltRes+='</li>\r\n					<li>\r\n						Balance: ';tmpltRes+=hvals.this.balance;tmpltRes+='\r\n					</li>\r\n					<li>\r\n						Age: ';tmpltRes+=hvals.this.age;tmpltRes+='\r\n					</li>\r\n					<li>\r\n						Address: ';tmpltRes+=hvals.this.address;tmpltRes+='\r\n					</li>\r\n					<li>\r\n						Image: <img src="';tmpltRes+=hvals.this.picture;tmpltRes+='">\r\n					</li>\r\n					<li>\r\n						Company: ';tmpltRes+=hvals.this.company;tmpltRes+='\r\n					</li>\r\n					<li>\r\n						Email: <a href="mailto:';tmpltRes+=hvals.this.email;tmpltRes+='">';tmpltRes+=hvals.this.email;tmpltRes+='</a>\r\n					</li>\r\n					<li>\r\n						About: ';tmpltRes+=hvals.this.about;tmpltRes+='\r\n					</li>\r\n					';if(hvals.this.tags){tmpltRes+='\r\n					<li>Tags:\r\n						<ul>\r\n						';for(var i=0;i<hvals.this.tags.length; i++){tmpltRes+=(function(hvals){var tmpltRes='';var hvals2=hvals;tmpltRes+='\r\n							<li>\r\n								';tmpltRes+=hvals.this;tmpltRes+='\r\n							</li>\r\n						';return tmpltRes})({this:hvals.this.tags[i],index:i})};tmpltRes+='\r\n						</ul>\r\n					</li>\r\n					';}tmpltRes+='\r\n					';if(hvals.this.friends){tmpltRes+='\r\n					<li>\r\n						Friends:\r\n						<ul>\r\n							';for(var i=0;i<hvals.this.friends.length; i++){tmpltRes+=(function(hvals){var tmpltRes='';var hvals4=hvals;tmpltRes+='\r\n							<li>\r\n								';tmpltRes+=hvals.this.name;tmpltRes+=' (';tmpltRes+=hvals.this.id;tmpltRes+=')\r\n							</li>\r\n							';return tmpltRes})({this:hvals.this.friends[i],index:i})};tmpltRes+='\r\n						</ul>\r\n					</li>\r\n					';}tmpltRes+='\r\n				</ul>\r\n			</div>\r\n		';return tmpltRes})({this:options.friends[i],index:i})};tmpltRes+='\r\n		</div>\r\n	</body>\r\n	</html>';return tmpltRes
}