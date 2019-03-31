/// <reference no-default-lib="true"/>
/// <reference path="roblox.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// GENERATED API OVERRIDES

interface AnimationController extends RbxInternalInstance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface Animator extends RbxInternalInstance {
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface AssetService extends RbxInternalInstance {
	CreatePlaceInPlayerInventoryAsync(
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	GetGamePlacesAsync(): StandardPages;
	GetAssetIdsForPackage(packageAssetId: number): Array<number>;
}

interface RbxInternalBasePart extends RbxInternalInstance {
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;

	CanCollideWith(part: BasePart): boolean;
	CanSetNetworkOwnership(): LuaTuple<[boolean, string | undefined]>;
	GetConnectedParts(recursive?: boolean): Array<BasePart>;
	GetNetworkOwner(): Player | undefined;
	GetRootPart(): BasePart;
	GetJoints(): Array<Constraint | JointInstance>;
	GetTouchingParts(): Array<BasePart>;
	SetNetworkOwner(playerInstance?: Player): void;
	SubtractAsync(parts: Array<BasePart>, collisionfidelity?: Enum.CollisionFidelity): UnionOperation;
	UnionAsync(parts: Array<BasePart>, collisionfidelity?: Enum.CollisionFidelity): UnionOperation;
}

interface Attachment extends RbxInternalInstance {
	WorldCFrame: CFrame;
}

interface BillboardGui extends RbxInternalLayerCollector {
	Adornee: BasePart | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent extends RbxInternalInstance {
	readonly Event: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	Fire(...arguments: Array<unknown>): void;
}

interface BindableFunction extends RbxInternalInstance {
	OnInvoke: (...arguments: Array<unknown>) => any;
	Invoke(...arguments: Array<unknown>): Array<unknown>;
}

interface Camera extends RbxInternalInstance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	WorldToViewportPoint(worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends RbxInternalInstance {
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	Chat(partOrCharacter: BasePart | Model, message: string, color?: Enum.ChatColor): void;
	FilterStringAsync(stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Player): string;
}

interface ClickDetector extends RbxInternalInstance {
	readonly MouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
	readonly MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	readonly MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	readonly RightMouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
}

interface CollectionService extends RbxInternalInstance {
	GetInstanceAddedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged<T extends RbxInternalInstance = Instance>(tag: string): Array<T>;
	GetTags(instance: Instance): Array<string>;
}

interface ContentProvider extends RbxInternalInstance {
	PreloadAsync(contentIdList: Array<Instance>): void;
}

/** @client */
interface ContextActionService extends RbxInternalInstance {
	readonly LocalToolEquipped: RBXScriptSignal<(toolEquipped: Tool) => void>;
	readonly LocalToolUnequipped: RBXScriptSignal<(toolUnequipped: Tool) => void>;
	BindAction(
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	BindActionAtPriority(
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	GetButton(actionName: string): ImageButton | undefined;
}

/** @server */
interface DataStoreService extends RbxInternalInstance {
	GetDataStore(name: string, scope?: string): GlobalDataStore;
	GetGlobalDataStore(): GlobalDataStore;
	GetOrderedDataStore(name: string, scope?: string): OrderedDataStore;
}

interface Dialog extends RbxInternalInstance {
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	GetCurrentPlayers(): Array<Player>;
}

interface FlagStand extends RbxInternalDerivesFromPart {
	readonly FlagCaptured: RBXScriptSignal<(player: Player) => void>;
}

interface GamePassService extends RbxInternalInstance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(player: Player, gamePassId: number): boolean;
}

/** The PlayerGui object is a container that holds a Player's user GUI. If a ScreenGui is a descendant of a PlayerGui, then any GuiObject inside of the ScreenGui will be drawn to the player’s screen. Any LocalScript will run as soon as it is inserted into a PlayerGui.

When a player first joins a game, their PlayerGui is automatically inserted into their Player object. When the player’s Player.Character spawns for the first time all of the contents of StarterGui are automatically copied into the player’s PlayerGui. Note that if Players.CharacterAutoLoads is set to false the character will not spawn and StarterGui contents will not be copied until Player:LoadCharacter is called. If StarterGui.ResetPlayerGuiOnSpawn is set to true then every time the player’s character respawns all of the contents of that player’s PlayerGui is cleared and replaced with the contents of StarterGui. */
interface PlayerGui extends RbxInternalBasePlayerGui {}

/** @server */
interface RbxInternalGlobalDataStore extends RbxInternalInstance {
	GetAsync<T = unknown>(key: string): T | undefined;
	IncrementAsync(key: string, delta?: number): number;
	RemoveAsync<T = unknown>(key: string): T | undefined;
	SetAsync(key: string, value?: any): void;
	UpdateAsync<O = unknown, R = unknown>(
		key: string,
		transformFunction: (oldValue: O | undefined) => R,
	): R extends undefined ? O | undefined : R;
	OnUpdate<T = unknown>(key: string, callback: (value: T) => void): RBXScriptConnection;
}

interface GroupService extends RbxInternalInstance {
	GetAlliesAsync(groupId: number): StandardPages;
	GetEnemiesAsync(groupId: number): StandardPages;
	GetGroupInfoAsync(groupId: number): GroupInfo;
	GetGroupsAsync(userId: number): Array<GetGroupsAsyncResult>;
}

interface RbxInternalGuiObject extends RbxInternalGuiBase2d {
	readonly InputBegan: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject) => void>;
	readonly TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;
}

interface GuiService extends RbxInternalInstance {
	AddSelectionParent(selectionName: string, selectionParent: Instance): void;
	AddSelectionTuple(selectionName: string, selections: Array<any>): void;
	GetGuiInset(): LuaTuple<[Vector2, Vector2]>;
}

interface _HapticService extends RbxInternalInstance {
	GetMotor(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor): LuaTuple<[number]>;
	SetMotor(
		inputType: Enum.UserInputType,
		vibrationMotor: Enum.VibrationMotor,
		...vibrationValues: Array<number>
	): void;
}

/** @server */
interface HttpService extends RbxInternalInstance {
	GetAsync(url: string, nocache?: boolean, headers?: HttpHeaders): string;

	PostAsync(
		url: string,
		data: string,
		content_type?: Enum.HttpContentType,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;
	RequestAsync(requestOptions: RequestAsyncRequest): RequestAsyncResponse;
}

interface Humanoid extends RbxInternalInstance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	ApplyDescription(humanoidDescription: HumanoidDescription): void;
	GetAppliedDescription(): HumanoidDescription;
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	LoadAnimation(animation: Animation): AnimationTrack;
	AddAccessory(accessory: Accessory): void;
	EquipTool(tool: Tool): void;
	GetAccessories(): Array<Accessory>;
	GetLimb(part: BasePart): Enum.Limb;
	GetBodyPartR15(part: BasePart): Enum.BodyPartR15;
	MoveTo(location: Vector3, part?: BasePart): void;
	ReplaceBodyPartR15(bodyPart: Enum.BodyPartR15, part: BasePart): boolean;
}

interface InsertService extends RbxInternalInstance {
	LoadAsset(assetId: number): Model;
	LoadAssetVersion(assetVersionId: number): Model;
	GetBaseSets(): Array<SetInfo>;
	GetCollection(categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(searchText: string, pageNum: number): Array<FreeSearchResult>;
	GetFreeModels(searchText: string, pageNum: number): Array<FreeSearchResult>;
	GetUserSets(userId: number): Array<SetInfo>;
}

interface RbxInternalInstance {
	Clone(): this;
	GetChildren<T extends RbxInternalInstance = Instance>(): Array<T>;
	GetDescendants(): Array<Instance>;
	FindFirstAncestor<T extends RbxInternalInstance = Instance>(name: string): T | undefined;
	FindFirstChild<T extends RbxInternalInstance = Instance>(name: string, recursive?: boolean): T | undefined;
	/** Returns the child of the Instance with the given name. If the child does not exist, it will yield the current thread until it does.
	 *
	 * If the timeOut parameter is specified, this function will return nil and time out after timeOut seconds elapsing without the child being found.
	 *
	 * ### Where should I use WaitForChild?
	 * WaitForChild is extremely important when working on code ran by the client. Roblox does not guarantee the time or order in which objects are replicated from the server to the client. This can cause scripts to break when indexing objects that do not exist yet.
	 *
	 * For example, a LocalScript may access a Model in the Workspace called ‘Ship’ like so:
	 * ```ts
const ship = Workspace.FindFirstChild("Ship")
// ship may not have replicated yet
	   ```
	 * Instead WaitForChild should be used:
	 * ```ts
const ship = Workspace.WaitForChild("Ship")
// Will yield until the ship has replicated before continuing
```
	 * ### Notes
	 *
	 * - If a call to this function exceeds 5 seconds without returning, and no timeOut parameter has been specified, a warning will be printed to the output that the thread may yield indefinitely
	 *
	 * - This function will return immediately without yielding if the child exists when the call is made
	 *
	 * - WaitForChild is less efficient than Instance:FindFirstChild or the dot operator. Therefore it should only be used when the developer is not sure if the object has replicated to the client. Generally this is only the first time the object is accessed
	 */
	WaitForChild<T extends RbxInternalInstance = Instance>(childName: string): T;
	WaitForChild<T extends RbxInternalInstance = Instance>(childName: string, timeOut: number): T | undefined;
	IsA<T extends keyof InstanceBases>(className: T): this is InstanceBases[T];
	IsA(className: string): boolean;
	FindFirstChildWhichIsA<T extends keyof InstanceBases>(
		className: T,
		recursive?: boolean,
	): InstanceBases[T] | undefined;
	FindFirstChildWhichIsA(className: string, recursive?: boolean): InstanceBases[keyof InstanceBases] | undefined;
	FindFirstAncestorOfClass<T extends keyof Instances>(className: T): Instances[T] | undefined;
	FindFirstAncestorOfClass(className: string): Instance | undefined;
	FindFirstAncestorWhichIsA<T extends keyof InstanceBases>(className: T): InstanceBases[T] | undefined;
	FindFirstAncestorWhichIsA(className: string): InstanceBases[keyof InstanceBases] | undefined;
	FindFirstChildOfClass<T extends keyof Instances>(className: T): Instances[T] | undefined;
	FindFirstChildOfClass(className: string): Instance | undefined;
	GetPropertyChangedSignal(property: {
		[Key in keyof this]-?: Key extends "GetPropertyChangedSignal"
		? never
		: this[Key] extends RBXScriptSignal
		? never
		: (() => any) extends this[Key]
		? never
		: Key
	}[keyof this]): RBXScriptSignal;
}

interface RbxInternalJointInstance extends RbxInternalInstance {
	Part0: BasePart | undefined;
	Part1: BasePart | undefined;
}

interface Keyframe extends RbxInternalInstance {
	AddPose(pose: Pose): void;
	RemovePose(pose: Pose): void;
	GetPoses(): Array<Pose>;
}

interface KeyframeSequence extends RbxInternalInstance {
	AddKeyframe(keyframe: Keyframe): void;
	GetKeyframes(): Array<Keyframe>;
	RemoveKeyframe(keyframe: Keyframe): void;
}

interface KeyframeSequenceProvider extends RbxInternalInstance {
	RegisterActiveKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	RegisterKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	GetAnimations(userId: number): InventoryPages;
	GetKeyframeSequenceAsync(assetId: string): KeyframeSequence;
}

interface LocalizationService extends RbxInternalInstance {
	GetTranslatorForPlayer(player: Player): Translator;
}

interface LocalizationTable extends RbxInternalInstance {
	GetEntries(): Array<LocalizationEntry>;
	GetTranslator(localeId: string): Translator;
}

interface LogService extends RbxInternalInstance {
	GetLogHistory(): Array<LogInfo>;
}

interface RbxInternalServiceProvider extends RbxInternalInstance {
	FindService(className: string): Instance | undefined;
	GetService<T extends keyof Services>(className: T): Services[T];
	GetService(className: string): Instance | undefined;
}

interface DataModel extends RbxInternalServiceProvider {
	readonly Workspace: Workspace;
}

interface MarketplaceService extends RbxInternalInstance {
	/**
	 * Callback that is executed for pending Developer Product receipts.
	 * If this function does not return Enum.ProductPurchaseDecision.PurchaseGranted, then you will not be granted the money for the purchase!
	 * The callback will be invoked with a table, containing the following informational fields:
	 * - **PlayerId** - the id of the player making the purchase.
	 * - **PlaceIdWherePurchased** - the specific place where the purchase was made.
	 * - **PurchaseId** - a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase.
	 * - **ProductId** - the id of the purchased product.
	 * - **CurrencyType** - the type of currency used (Tix, Robux).
	 * - **CurrencySpent** - the amount of currency spent on the product for this purchase.
	 */
	ProcessReceipt: (receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision;
	readonly PromptGamePassPurchaseFinished: RBXScriptSignal<
		(player: Player, gamePassId: number, wasPurchased: boolean) => void
	>;
	readonly PromptPurchaseFinished: RBXScriptSignal<(player: Player, assetId: number, isPurchased: boolean) => void>;
	GetProductInfo(assetId: number, infoType: Enum.InfoType.Asset): AssetProductInfo;
	GetProductInfo(assetId: number, infoType: Enum.InfoType.Product): DeveloperProductInfo;
	GetProductInfo(assetId: number, infoType: Enum.InfoType.GamePass): AssetProductInfo;
	PromptGamePassPurchase(player: Player, gamePassId: number): void;
	PromptProductPurchase(
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: Enum.CurrencyType,
	): void;
	PromptPurchase(player: Player, assetId: number, equipIfPurchased?: boolean, currencyType?: Enum.CurrencyType): void;
	PlayerOwnsAsset(player: Player, assetId: number): boolean;
}

interface RbxInternalDerivesFromModel extends RbxInternalPVInstance {
	PrimaryPart?: BasePart;
	GetBoundingBox(): LuaTuple<[CFrame, Vector3]>;
}

/** @server */
interface OrderedDataStore extends RbxInternalGlobalDataStore {
	GetSortedAsync(ascending: boolean, pagesize: number, minValue?: number, maxValue?: number): DataStorePages;
}

interface Path extends RbxInternalInstance {
	GetWaypoints(): Array<PathWaypoint>;
}

interface PathfindingService extends RbxInternalInstance {
	CreatePath(agentParameters?: AgentParameters): Path;
	FindPathAsync(start: Vector3, finish: Vector3): Path;
}

interface PhysicsService extends RbxInternalInstance {
	GetCollisionGroups(): Array<CollisionGroupInfo>;
}

interface Player extends RbxInternalInstance {
	ReplicationFocus: BasePart | undefined;
	readonly CharacterAdded: RBXScriptSignal<(character: Model) => void>;
	readonly CharacterAppearanceLoaded: RBXScriptSignal<(character: Model) => void>;
	readonly CharacterRemoving: RBXScriptSignal<(character: Model) => void>;
	GetFriendsOnline(maxFriends?: number): Array<FriendOnlineInfo>;
	/** @rbxts server */
	LoadCharacter(): void;
	/** @rbxts server */
	LoadCharacterWithHumanoidDescription(humanoidDescription: HumanoidDescription): void;
}

interface Players extends RbxInternalInstance {
	/** @rbxts client */
	readonly LocalPlayer: Player;
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	readonly PlayerRemoving: RBXScriptSignal<(player: Player) => void>;

	GetPlayerByUserId(userId: number): Player | undefined;

	GetPlayerFromCharacter(character: Model): Player | undefined;
	GetPlayers(): Array<Player>;

	GetCharacterAppearanceAsync(userId: number): Model | undefined;
	GetCharacterAppearanceInfoAsync(userId: number): CharacterAppearanceInfo;
	GetFriendsAsync(userId: number): FriendPages;

	GetHumanoidDescriptionFromOutfitId(outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(userId: number): HumanoidDescription;

	GetUserThumbnailAsync(
		userId: number,
		thumbnailType: Enum.ThumbnailType,
		thumbnailSize: Enum.ThumbnailSize,
	): LuaTuple<[string, boolean]>;
}

interface PointsService extends RbxInternalInstance {
	AwardPoints(userId: number, amount: number): LuaTuple<[number, number, number, 0]>;
}

interface RemoteEvent extends RbxInternalInstance {
	readonly OnClientEvent: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...arguments: Array<unknown>) => void>;
	FireAllClients(...arguments: Array<unknown>): void;
	FireClient(player: Player, ...arguments: Array<unknown>): void;
	FireServer(...arguments: Array<unknown>): void;
}

interface RemoteFunction extends RbxInternalInstance {
	OnClientInvoke: (arguments: Array<any>) => void;
	OnServerInvoke: (player: Instance, arguments: Array<any>) => void;
	InvokeClient(player: Instance, ...arguments: Array<any>): unknown;
	InvokeServer<R = unknown>(...arguments: Array<any>): R;
}

interface SocialService extends RbxInternalInstance {
	readonly GameInvitePromptClosed: RBXScriptSignal<(senderPlayer: Player, recipientIds: Array<number>) => void>;
	CanSendGameInviteAsync(targetPlayer: Player): boolean;
	PromptGameInvite(targetPlayer: Player): void;
}

interface SoundService extends RbxInternalInstance {
	GetListener():
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	SetListener(listenerType: Enum.ListenerType.Camera): void;
	SetListener(listenerType: Enum.ListenerType.CFrame, cframe: CFrame): void;
	SetListener(listenerType: Enum.ListenerType.ObjectCFrame, basePart: BasePart): void;
	SetListener(listenerType: Enum.ListenerType.ObjectPosition, basePart: BasePart): void;
}

/** @server */
interface ServerScriptService {}

/** @server */
interface ServerStorage {}

interface StarterGui extends RbxInternalBasePlayerGui {
	GetCore(parameterName: "PointsNotificationsActive"): boolean;
	GetCore(parameterName: "BadgesNotificationsActive"): boolean;
	GetCore(parameterName: "ChatActive"): boolean;
	GetCore(parameterName: "ChatWindowSize"): UDim2;
	GetCore(parameterName: "ChatWindowPosition"): UDim2;
	GetCore(parameterName: "ChatBarDisabled"): boolean;
	GetCore(parameterName: "GetBlockedUserIds"): Array<number>;
	GetCore(parameterName: "PlayerBlockedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnblockedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerMutedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnmutedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerFriendedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnfriendedEvent"): BindableEvent;
	GetCore(parameterName: "DeveloperConsoleVisible"): boolean;
	GetCore(parameterName: "VRRotationIntensity"): "Low" | "High" | "Smooth";

	SetCore(parameterName: "ChatActive", active: boolean): void;
	SetCore(parameterName: "PointsNotificationsActive", active: boolean): void;
	SetCore(parameterName: "BadgeNotificationsActive", active: boolean): void;
	SetCore(parameterName: "ResetButtonCallback", enabled: boolean): void;
	SetCore(parameterName: "ResetButtonCallback", callback: BindableEvent): void;
	SetCore(parameterName: "ChatMakeSystemMessage", configTable: MakeSystemMessageConfig): void;
	SetCore(parameterName: "ChatWindowSize", windowSize: UDim2): void;
	SetCore(parameterName: "ChatWindowPosition", windowPosition: UDim2): void;
	SetCore(parameterName: "ChatBarDisabled", disabled: boolean): void;
	SetCore(parameterName: "SendNotification", configTable: boolean): void;
	SetCore(parameterName: "TopbarEnabled", enabled: boolean): void;
	SetCore(parameterName: "DeveloperConsoleVisible", visibility: boolean): void;
	SetCore(parameterName: "PromptSendFriendRequest", player: Player): void;
	SetCore(parameterName: "PromptUnfriend", player: Player): void;
	SetCore(parameterName: "PromptBlockPlayer", player: Player): void;
	SetCore(parameterName: "PromptUnblockPlayer", player: Player): void;
	SetCore(parameterName: "SetAvatarContextMenuEnabled", enabled: boolean): void;
	SetCore(parameterName: "AddAvatarContextMenuOption", option: Enum.AvatarContextMenuOption): void;
	SetCore(parameterName: "AddAvatarContextMenuOption", option: [string, BindableFunction]): void;
	SetCore(parameterName: "RemoveAvatarContextMenuOption", option: Enum.AvatarContextMenuOption): void;
	SetCore(parameterName: "RemoveAvatarContextMenuOption", option: [string, BindableFunction]): void;
	SetCore(
		parameterName: "CoreGuiChatConnections",
		connections: { [name: string]: BindableEvent | BindableFunction },
	): void;
}

interface SurfaceGui extends RbxInternalLayerCollector {
	Adornee: BasePart | undefined;
}

interface Team extends RbxInternalInstance {
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	readonly PlayerRemoved: RBXScriptSignal<(player: Player) => void>;
	GetPlayers(): Array<Player>;
}

interface Teams extends RbxInternalInstance {
	GetTeams(): Array<Team>;
}

interface TeleportService {
	readonly TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
	GetPlayerPlaceInstanceAsync(userId: number): LuaTuple<[boolean, string, number, string]>;
	ReserveServer(placeId: number): LuaTuple<[string, string]>;
	Teleport(placeId: number, player?: Player, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToPrivateServer(
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: any,
		customLoadingScreen?: Instance,
	): void;

	TeleportPartyAsync(
		placeId: number,
		players: Array<Player>,
		teleportData?: any,
		customLoadingScreen?: Instance,
	): string;
}

interface Terrain extends RbxInternalBasePart {
	CopyRegion(region: Region3int16): TerrainRegion;
	PasteRegion(region: TerrainRegion, corner: Vector3int16, pasteEmptyCells: boolean): void;
	ReadVoxels(
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	WriteVoxels(
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<Enum.Material>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface RbxInternalDerivesFromTool extends RbxInternalBackpackItem {
	readonly Equipped: RBXScriptSignal<(mouse: Mouse) => void>;
}

interface TweenService {
	Create<T extends Instances[keyof Instances]>(
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<FilterMembers<T, Tweenable>>,
	): Tween;
}

interface UserInputService {
	readonly InputBegan: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	GetConnectedGamepads(): Array<Enum.UserInputType>;
	GetDeviceRotation(): LuaTuple<[InputObject, CFrame]>;
	GetGamepadState(gamepadNum: Enum.UserInputType): Array<InputObject>;
	GetKeysPressed(): Array<InputObject>;
	GetMouseButtonsPressed(): Array<InputObject>;
	GetNavigationGamepads(): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(gamepadNum: Enum.UserInputType): Array<Enum.KeyCode>;
}

interface Workspace extends RbxInternalDerivesFromModel {
	Terrain: Terrain;
	FindPartOnRay(
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithIgnoreList(
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithWhitelist(
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;
}
