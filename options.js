module.exports = [
    {
        name: 'port',
        alias: 'p',
        type: Number,
        defaultValue: 80,
        description: 'Port number for http server'
    },
    {
        name: 'updateInterval',
        type: Number,
        defaultValue: 60*1000,
        description: 'Interval between LND describegraph fetches (in milliseconds)'
    },
    {
        name: 'logDir',
        type: String,
        defaultValue: 'logs',
        description: 'Location to save log files'
    },
    {
        name: 'graphLogInterval',
        type: Number,
        defaultValue: 60*60*1000,
        description: 'Interval between network graph logging to file (in milliseconds)'
    },
    {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Prints usage information'
    }
];
