import { merge } from 'lodash'
import path from 'path'

/**
 * Default configuations applied to all environments
 */
const defaultConfig = {
    env: process.env.NODE_ENV,
    get envs() {
        return {
            test: process.env.NODE_ENV === 'test',
            development: process.env.NODE_ENV === 'development',
            production: process.env.NODE_ENV === 'production'
        }
    },
    dataSources: {
        parliamentCalendarRSSFeed: {
            mainUrl: 'http://services.parliament.uk/calendar/all.rss'
        }
    },
    root: path.normalize(__dirname + '/../../..'),
    port: process.env.PORT || 4567,
    ip: process.env.IP || '0.0.0.0'
}

/**
 * Environment specific overrides
 */
const environmentConfigs = {
    development: {
        dataSources: {
            parliamentCalendarRSSFeed: {
                mainUrl: 'http://localhost:3000/rss-calendar-feed'
            }
        }
    },
    test: {
        dataSources: {
            parliamentCalendarRSSFeed: {
                mainUrl: 'http://localhost:3000/rss-calendar-feed'
            }
        }
    },
    production: {
        dataSources: {
            parliamentCalendarRSSFeed: {
                mainUrl: 'http://services.parliament.uk/calendar/all.rss'
            }
        },
        logging: {
            level: 'info',
            filePath: '/var/tmp/pangiia-api.log'
        }
    }
}

/**
 * Application configuration and constants
 */
export default merge(defaultConfig, environmentConfigs[process.env.NODE_ENV] || {})