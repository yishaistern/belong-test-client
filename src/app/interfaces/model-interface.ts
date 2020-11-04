import { EntityState } from '@ngrx/entity';

export interface User {
    userName: string;
}

export interface TowerMin {
    id: string;
    name: string;
}

export interface Tower extends TowerMin {
    feet: number;
    meter: number;
    src: string;
    wasUpdated: boolean;
    floors: number;
}

export type PartTower = Partial<Tower>;

export interface TowerState extends EntityState<User>  {
    currentTower: string;
    ids: string[];
    entities: any;
    loading: boolean;
}

export interface UserState {
    user: User;
}

export interface AppState {
    userState: UserState;
    towers: TowerState;
}
