function f(plr: Player) {
	for (const plrData of plr.GetFriendsOnline()) {
		if (plrData.LocationType === FriendLocationType.Studio) {
		} else {
		}
	}
	const character: Model = plr.Character || plr.CharacterAdded.Wait();
	const str = plr.Changed.Wait();
}

interface Soup {
	event: RBXScriptSignal;
}

const a = {} as Soup;

const b = a.event.Wait();
print(b);
