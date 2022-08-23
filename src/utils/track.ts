import mixpanel, { Dict } from 'mixpanel-browser'

import { IS_MAINNET, MIXPANEL_TOKEN } from './constants'

export const TRACK = {
  PAGE_VIEW: {
    HOME: 'Home Page',
    EXPLORE: 'Explore Page'
  }
}

export const Mixpanel = {
  track: (eventName: string, payload?: Dict) => {
    if (MIXPANEL_TOKEN && IS_MAINNET) {
      mixpanel.track(eventName, payload)
    }
  }
}
