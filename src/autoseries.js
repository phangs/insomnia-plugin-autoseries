const pkg = require('../package.json');

module.exports.templateTags = [
    {
        displayName: 'Autoseries',
        name: 'Autoseries',
        description: pkg.description,
        args: [
            {
                displayName: 'Prefix',
                description: 'Prepended string before the number series',
                placeholder: 'A',
                type: 'string',
                default: 'A'
            },
            {
                displayName: 'Starting',
                description: 'Starting number',
                placeholder: 1,
                type: 'number',
                default: '1'
            },
            {
                displayName: 'Leading Zeros',
                description: 'How many leading zeros to be added',
                placeholder: 4,
                type: 'number',
                default: 4
            },
        ],
        run(context,prefix,startnum, lzero) {

            var chk = localStorage.getItem('Insomnia::AutoSeries:Series');

            if (chk == null) {
                setSeries(prefix, startnum);
                var newSerPre = String(localStorage.getItem('Insomnia::AutoSeries:Prefix'));
                var newSerNum = Number(localStorage.getItem('Insomnia::AutoSeries:Series'));
                var curSeries = newSerPre + padSeries(newSerNum,lzero);
                return curSeries;
            } else {
                var newSerPre = String(localStorage.getItem('Insomnia::AutoSeries:Prefix'));
                var newSerNum = Number(localStorage.getItem('Insomnia::AutoSeries:Series'));
                var curSeries = newSerPre + padSeries(newSerNum,lzero);
                var nser = newSerNum + 1;
                localStorage.setItem('Insomnia::AutoSeries:Series', nser);
                return curSeries;
            }
        }
    }
];

function setSeries(pre, stt) {
    localStorage.setItem('Insomnia::AutoSeries:Prefix', pre);
    localStorage.setItem('Insomnia::AutoSeries:Series', stt);
}

function padSeries(number, digits) {
    return Array(Math.max((digits + 2) - String(number).length + 1, 0)).join(0) + number;
}