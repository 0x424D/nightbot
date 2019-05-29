!addcom !crosshairs $(eval
	heroDict = $(urlfetch json https://raw.githubusercontent.com/0x424D/nightbot/master/dicts/crosshair); 
	if ("$(1)" in hero)
	{
		hero["$(1)"];
	} 
	else 
	{
		"Hero not found";
	}
)
