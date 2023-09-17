const choices = {
    color: {
        verde: '#18A773',
        morado: '8D5DB1',
        black: '000000',
        white: 'ffff'
    }
}

const decisions = {
    color: {
        primary: choices.color.verde,
        secondary: choices.color.morado,
        black: choices.color.black,
        white: choices.color.white,
    }
}

module.exports = { choices, decisions }

