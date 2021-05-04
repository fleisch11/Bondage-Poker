"use strict";
const AssetGroupType = {
	Asset: "[Object | String]",
	Group: "String",
	ParentGroup: "Maybe String",
	Category: "Maybe String",
	Default: "Maybe Boolean",
	IsRestraint: "Maybe Boolean",
	AllowNone: "Maybe Boolean",
	AllowColorize: "Maybe Boolean",
	AllowCustomize: "Maybe Boolean",
	Color: "Maybe [String]",
	ParentSize: "Maybe String",
	ParentColor: "Maybe String",
	Clothing: "Maybe Boolean",
	Underwear: "Maybe Boolean",
	BodyCosplay: "Maybe Boolean",
	Activity: "Maybe [String]",
	AllowActivityOn: "Maybe [String]",
	Hide: "Maybe [String]",
	Block: "Maybe [String]",
	Zone: "Maybe [(Number, Number, Number, Number)]",
	SetPose: "Maybe [String]",
	AllowPose: "Maybe [String]",
	AllowExpression: "Maybe [String]",
	Effect: "Maybe [String]",
	MirrorGroup: "Maybe String",
	RemoveItemOnRemove: "Maybe [{ Group: String, Name: String, Type: Maybe String }]",
	Priority: "Maybe Number",
	Left: "Maybe Number",
	Top: "Maybe Number",
	FullAlpha: "Maybe Boolean",
	Blink: "Maybe Boolean",
	InheritColor: "Maybe String",
	FreezeActivePose: "Maybe [String]",
	PreviewZone: "Maybe (Number, Number, Number, Number)",
	DynamicGroupName: "Maybe String",
};

const AssetType = {
	Name: "String",
	ParentItem: "String",
	ParentGroup: "Maybe String",
	Enable: "Boolean",
	Visible: "Boolean",
	Wear: "Boolean",
	Activity: "String | [String]",
	AllowActivity: "[String]",
	AllowActivityOn: "[String]",
	BuyGroup: "String",
	PrerequisiteBuyGroups: "[String]",
	Effect: "[String]",
	Bonus: "String",
	Block: "[String]",
	Expose: "[String]",
	Hide: "[String]",
	HideItem: "[String]",
	HideItemExclude: "[String]",
	Require: "[String]",
	SetPose: "[String]",
	AllowPose: "[String]",
	HideForPose: "[String]",
	AllowActivePose: "[String]",
	WhitelistActivePose: "[String]",
	Value: "Number",
	Difficulty: "Number",
	SelfBondage: "Number",
	SelfUnlock: "Boolean",
	ExclusiveUnlock: "Boolean",
	Random: "Boolean",
	RemoveAtLogin: "Boolean",
	Time: "Number",
	RemoveTime: "Number",
	RemoveTimer: "Number",
	MaxTimer: "Number",
	Priority: "Number",
	Left: "Number",
	Top: "Number",
	Height: "Number",
	Zoom: "Number",
	Alpha: "[{ Group: Maybe [String], Pose: Maybe [String], Masks: [(Number, Number, Number, Number)] }]",
	Prerequisite: "String | [String]",
	Extended: "Boolean",
	AlwaysExtend: "Boolean",
	AlwaysInteract: "Boolean",
	AllowLock: "Boolean",
	IsLock: "Boolean",
	PickDifficulty: "Maybe Number",
	OwnerOnly: "Boolean",
	LoverOnly: "Boolean",
	ExpressionTrigger: "[{ Name: String, Group: String, Timer: Number }]",
	RemoveItemOnRemove: "[{ Name: String, Group: String, Type: Maybe String }]",
	AllowEffect: "[String]",
	AllowBlock: "[String]",
	AllowType: "[String]",
	DefaultColor: "String | [String]",
	Opacity: "Number",
	MinOpacity: "Number",
	MaxOpacity: "Number",
	Audio: "String",
	Category: "[String]",
	Fetish: "[String]",
	ArousalZone: "String",
	IsRestraint: "Boolean",
	BodyCosplay: "Boolean",
	OverrideBlinking: "Boolean",
	DialogSortOverride: "Number",
	// DynamicDescription: "Function",
	// DynamicPreviewIcon: "Function",
	// DynamicAllowInventoryAdd: "Function",
	// DynamicExpressionTrigger: "Function",
	// DynamicName: "Function",
	DynamicGroupName: "String",
	// DynamicActivity: "Function",
	// DynamicAudio: "Function",
	CharacterRestricted: "Boolean",
	AllowRemoveExclusive: "Boolean",
	InheritColor: "String",
	DynamicBeforeDraw: "Boolean",
	DynamicAfterDraw: "Boolean",
	DynamicScriptDraw: "Boolean",
	HasType: "Boolean",
	AllowLockType: "[String]",
	AllowColorizeAll: "Boolean",
	AvailableLocations: "[String]",
	OverrideHeight: "{ Height: Number, Priority: Number, HeightRatioProportion: Maybe Number }",
	FreezeActivePose: "[String]",
	DrawLocks: "Boolean",
	AllowExpression: "[String]",
	MirrorExpression: "String",
	FixedPosition: "Boolean",
	CustomBlindBackground: "Object",
	Layer: "[Object]"
};

const AssetLayerType = {
	Name: "String",
	AllowColorize: "Boolean",
	CopyLayerColor: "String",
	ColorGroup: "String",
	HideColoring: "Boolean",
	AllowTypes: "[String]",
	HasType: "Boolean",
	ParentGroup: "Maybe String",
	AllowPose: "[String]",
	Priority: "Number",
	InheritColor: "String",
	Alpha: "[{ Group: Maybe [String], Pose: Maybe [String], Masks: [(Number, Number, Number, Number)] }]",
	Left: "Number",
	Top: "Number",
	HideAs: "{ Group: String, Asset: String }",
	HasImage: "Boolean",
	Opacity: "Number",
	MinOpacity: "Number",
	MaxOpacity: "Number",
	LockLayer: "Boolean",
	MirrorExpression: "String",
	HideForPose: "[String]",
	AllowModuleTypes: "[String]",
};

const AssetExtendedArchetypeType = {
	Archetype: "String",
	Config: "Maybe Object",
	CopyConfig: "Maybe {GroupName: Maybe String, AssetName: String}",
};

const AssetExtendedConfigType = {
	Modules: "Maybe [{Name: String, Key: String, Options: [Object]}]", // Modular items
	Options: "Maybe [{Name: String, Property: Object}]", // Typed items
	ChatSetting: "Maybe String",
	Dialog: "Maybe Object",
	ChatTags: "Maybe [String]",
	DrawImages: "Maybe Boolean",
};

module.exports = { AssetGroupType, AssetType, AssetLayerType, AssetExtendedArchetypeType, AssetExtendedConfigType };