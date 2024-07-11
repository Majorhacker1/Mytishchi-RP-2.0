import { Build, Inventory } from 'pixel_combats/room';

// разрешаем все что можно для РП
export function set_editor_inventory() {
    var roomInventory = Inventory.GetContext();
    roomInventory.MainInfinity.Value = true;
    roomInventory.SecondaryInfinity.Value = true;
    roomInventory.Melee.Value = true;
    roomInventory.Explosive.Value = true;
    roomInventory.Build.Value = true;
    roomInventory.BuildInfinity.Value = true;
}
    
    if(GameMode.Parameters.GetBool("ГНИО")){

    var roomInventory = Inventory.GetContext();
    Teams.Get("Blue").Inventory.Main.Value = false;
    Teams.Get("Blue").Inventory.Secondary.Value = false;
    Teams.Get("Blue").Inventory.Melee.Value = false;
    Teams.Get("Blue").Inventory.Explosive.Value = false;
    Teams.Get("Blue").Inventory.Build.Value = false;


export function set_RP_options() {
    Damage.GetContext().FriendlyFire.Value = GameMode.Parameters.GetBool("Огонь По Своим");
    Damage.GetContext().DamageOut.Value = true
    Build.GetContext().Pipette.Value = true;
    Build.GetContext().FloodFill.Value = false;
    Build.GetContext().FillQuad.Value = false;
    Build.GetContext().RemoveQuad.Value = false;
    Build.GetContext().BalkLenChange.Value = false;
    Build.GetContext().FlyEnable.Value = false;
    Build.GetContext().SetSkyEnable.Value = false;
    Build.GetContext().GenMapEnable.Value = false;
    Build.GetContext().ChangeCameraPointsEnable.Value = false;
    Build.GetContext().QuadChangeEnable.Value = false;
    Build.GetContext().BuildModeEnable.Value = false;
    Build.GetContext().CollapseChangeEnable.Value = false;
    Build.GetContext().RenameMapEnable.Value = false;
    Build.GetContext().ChangeMapAuthorsEnable.Value = false;
    Build.GetContext().LoadMapEnable.Value = false;
    Build.GetContext().ChangeSpawnsEnable.Value = false;
    Build.GetContext().BuildRangeEnable.Value = false;
}