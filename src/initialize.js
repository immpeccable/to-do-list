import {loadHeader} from './header';
import {loadLeftSide} from './loadLeftSide';
import {createProject} from './createNewProject';

let initializeWebsite = () => {

    loadHeader();
    loadLeftSide();
    createProject();

}

export {initializeWebsite};