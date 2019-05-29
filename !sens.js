!editcom !sens $(eval
    sensDict = $(urlfetch json https://raw.githubusercontent.com/0x424D/nightbot/master/dicts/sens);
	game = "$(1)";
	if (game == "null")
	{
		sens["ow"];
	}
    else if (game in sens)
    {
        sens[game];
    }
    else
    {
        "Game not found";
    }
)
