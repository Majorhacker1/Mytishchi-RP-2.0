import * as peace from './options.js';

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
