import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

export const RED_TEAM_NAME = "Red";
export const BLUE_TEAM_NAME = "Blue";
export const RED_TEAM_DISPLAY_NAME = "МВД";
export const BLUE_TEAM_DISPLAY_NAME = "Граждане";
export const GREEN_TEAM_NAME = "Green";
export const GREEN_TEAM_DISPLAY_NAME = "Военные";
export const YELLOW_TEAM_NAME = "Yellow";
export const YELLOW_TEAM_DISPLAY_NAME = "Рецидивисты";

export const BLUE_TEAM_SPAWN_POINTS_GROUP = 1;
export const RED_TEAM_SPAWN_POINTS_GROUP = 2;
export const GREEN_TEAM_SPAWN_POINTS_GROUP = 2;
export const YELLOW_TEAM_SPAWN_POINTS_GROUP = 1;

export function create_team_red() {
    Teams.Add(RED_TEAM_NAME, RED_TEAM_DISPLAY_NAME, new Color(1, 0, 0, 0));
    Teams.Get(RED_TEAM_NAME).Spawns.SpawnPointsGroups.Add(RED_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(RED_TEAM_NAME);
}

export function create_team_blue() {
    Teams.Add(BLUE_TEAM_NAME, BLUE_TEAM_DISPLAY_NAME, new Color(0, 0, 1, 0));
    Teams.Get(BLUE_TEAM_NAME).Spawns.SpawnPointsGroups.Add(BLUE_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(BLUE_TEAM_NAME);
}

export function create_team_green() {
    Teams.Add(GREEN_TEAM_NAME, GREEN_TEAM_DISPLAY_NAME, new Color(0, 1, 0, 0));
    Teams.Get(GREEN_TEAM_NAME).Spawns.SpawnPointsGroups.Add(GREEN_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(GREEN_TEAM_NAME);
}

export function create_team_yellow() {
    Teams.Add(YELLOW_TEAM_NAME, YELLOW_TEAM_DISPLAY_NAME, new Color(1, 1, 0, 0));
    Teams.Get(YELLOW_TEAM_NAME).Spawns.SpawnPointsGroups.Add(YELLOW_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(YELLOW_TEAM_NAME);
}