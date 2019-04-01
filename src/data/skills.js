import { languages } from './skills/languages';
import { tools } from './skills/tools';
import { versionControle } from './skills/virsionControle';
import { stateManagement } from './skills/stateManagement';
import { framework } from './skills/framework';

export const skillsList = [
    {...framework},
    {...languages},
    {...tools},
    {...versionControle},
    {...stateManagement},
];
