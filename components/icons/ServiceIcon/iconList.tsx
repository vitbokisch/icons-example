
/**
 * SYNCHRONOUS IMPORTS EXAMPLE
 */

import service1 from '../assets/icons/services/service-1.svg';
import service2 from '../assets/icons/services/service-2.svg';

export const SERVICE_ICON_LIST = {
    'service-1': service1,
    'service-2': service2
} as const

export const SERVICE_ICON_LIST_BY_TITLE = {
    'Service Name': 'service-1',
    'Service Name 2': 'service-2',
} as const satisfies Record<string, keyof typeof SERVICE_ICON_LIST>



/**
 * ASYNCHRONOUS IMPORTS EXAMPLE
 */

/**
 * STEP 1 - list of icons
 */
export const ASYNC_SERVICE_ICON_LIST = {
    'service-1': 'service-1.svg',
    'service-2': 'service-2.svg'
} as const

export const ASYNC_SERVICE_ICON_LIST_BY_TITLE = {
    'Service Name': 'service-1',
    'Service Name 2': 'service-2',
} as const satisfies Record<string, keyof typeof ASYNC_SERVICE_ICON_LIST>

/**
 * STEP 2 - import them dynamically 
 * can be also svg loader independent
 */

const createSystemIconSet = (data) =>
  Object.entries(data).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: import(`./assets-icons-system/assets/icons/services/${value}`),
    }),
    {},
  )

/**
 * STEP 3 - load them asynchronously within Icon component
 */

// some implementation 