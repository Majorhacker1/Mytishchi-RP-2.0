// Команды меню №1
Damage.GetContext(). FriendlyFire.Value= GameMode. Parameters.GetBool ("Огонь По Своим");
Damage.GetContext().DamageOut.Value = true
BreackGraph.OnlyPlayerBlocksDmg = GameMode. Parameters.GetBool ("PartialDesruction");
BreackGraph.WeakBlocks GameMode. Parameters.GetBool ("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool ("FloodFill");
Build.GetContext(). FillQuad.Value = GameMode .Parameters.GetBool ("FillQuad");
Build.GetContext(). RemoveQuad.Value = GameMode. Parameters.GetBool ("RemoveQuad");
Build.GetContext(). FlyEnable.Value = GameMode.Parameters.GetBool ("Fly");
// Разрушаемость
BreackGraph.BreackAll = true;
// Счётчик прямоугольников
Ui.GetContext(). QuadsCount.Value = false;
// Интерфейс и функционал
Build.GetContext(). Pipette.Value = true;
Build.GetContext(). BalkLenChange.Value = false;
Build.GetContext().SetSkyEnable.Value = false;
Build.GetContext().GenMapEnable.Value = false;
Build.GetContext().ChangeCamera PointsEnable. Value = false;
Build.GetContext(). QuadChangeEnable.Value = false;
Build.GetContext(). BuildModeEnable.Value = false;
Build.GetContext().CollapseChangeEnable. Value = false;
Build.GetContext(). RenameMapEnable.Value = false;
Build.GetContext().ChangeMapAuthorsEnable. Value = false;
Build.GetContext(). LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = false;
// Константа
Properties.GetContext(). GameModeName.Value = "GameModes/Mytishchi RP";
// Команды
blue GameMode.Parameters.GetBool("BlueTeam");
red GameMode.Parameters.GetBool("RedTeam")
black GameMode.Parameters.GetBool("BlackTeam");
green GameMode.Parameters.GetBool("GreenTeam");

if (red || !red && ! blue)

Teams.Add("Red", "МВД и Росгвардия", { г: 150 });

Teams.Add("Black", "Рецидивисты", { р: 150});

Teams.Add("Green", "Военнослужащие", { g: 150});

if (blue || ! red && ! blue) {

Teams.Add("Blue", "Граждане", { b: 150 });


Teams.Get("Red").Spawns. SpawnPointsGroups.Add(2);

Teams.Get("Blue").Spawns. SpawnPointsGroups.Add(1);

if(GameMode.Parameters.GetBool ("ГНИО")) {


var inventory Inventory.GetContext();


Teams.Get("Blue").Inventory.Main.Value = false;

Teams.Get("Blue").Inventory.Secondary.Value = false

Teams.Get("Blue").Inventory.Melee.Value = false;

Teams.Get("Blue").Inventory.Explosive.Value = false;

Teams.Get("Blue").Inventory.Build.Value = false;

       }
}

// Функционал №1

Teams. OnRequest Join Team.Add(function(player,team) {team.Add(player); });

// Финкционал №2

Teams.OnPlayerChangeTeam.Add(function(player ){ player. Spawns.Spawn()});

// Приветствующая таблица

Ui.getContext().Hint.Value = "Добро пожаловать в Мытищи РП";

// Инвентарь

var inventory = Inventory.GetContext();
inventory. MainInfinity.Value = true;
inventory. Secondary Infinity.Value = true;
inventory. Melee.Value = true;
inventory. Explosive.Value = true;
inventory.Build.Value = true: