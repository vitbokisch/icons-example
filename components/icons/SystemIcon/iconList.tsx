
/**
 * SYNCHRONOUS IMPORTS EXAMPLE
 */

import add from '../assets/icons/system/add.svg';
import remove from '../assets/icons/system/delete.svg';
import info from '../assets/icons/system/info.svg';

export const SYSTEM_ICON_LIST = {
    add: add,
    remove: remove,
    info: info,
} as const

/**
 * ASYNCHRONOUS IMPORTS EXAMPLE
 */

/**
 * STEP 1 - list of icons
 */
export const ASYNC_SYSTEM_ICON_LIST = {
    'service-1': 'service-1.svg',
    'service-2': 'service-2.svg'
} as const

/**
 * STEP 2 - import them dynamically / asynchronously
 */

const createSystemIconSet = (data) =>
  Object.entries(data).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: import(`./assets-icons-system/assets/icons/system/${value}`),
    }),
    {},
  )

/**
 * STEP 3 - load them asynchronously within Icon component
 */

// some implementation