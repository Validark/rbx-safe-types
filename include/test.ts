function f(plr: Player) {
	for (const plrData of plr.GetFriendsOnline()) {
		if (plrData.LocationType === FriendLocationType.Studio) {
		} else {
		}
	}
	const character: Model = plr.Character || plr.CharacterAdded.Wait()[0];
}
