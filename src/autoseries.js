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
                placeholder: 0,
                type: 'number'
            },
        ],
        run(context,prefix,startnum) {

            var chk = localStorage.getItem('Insomnia::AutoSeries:Series');

            if (chk == null) {
                setSeries(prefix, startnum);
                var newSerPre = String(localStorage.getItem('Insomnia::AutoSeries:Prefix'));
                var newSerNum = Number(localStorage.getItem('Insomnia::AutoSeries:Series'));
                var curSeries = newSerPre + padSeries(newSerNum,6);
                return curSeries;
            } else {
                var newSerPre = String(localStorage.getItem('Insomnia::AutoSeries:Prefix'));
                var newSerNum = Number(localStorage.getItem('Insomnia::AutoSeries:Series'));
                var curSeries = newSerPre + padSeries(newSerNum,8);
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
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}