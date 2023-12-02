import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../routes';
import {UserData} from '../../types/user-data';

export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
