const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
const getRandomSymbol = () => {
    const symbols = '!é^+%&/()=?_<>£#$½{[]}|*-€₺ß.:;æ~'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunc = {getRandomLower,getRandomUpper,getRandomNumber,getRandomSymbol}

const generatePass = () => {
    const length = 24
    let generatedPass = ''
    for (let x = 0; x < length; x++)
        generatedPass += Object.values(randomFunc)[Math.floor(Math.random() * 4)]()
    
    return generatedPass
}

const spanResult = document.getElementById('result')
const generateBtn = document.getElementById('generate')
const clipboardBtn = document.getElementById('clipboard')

generateBtn.addEventListener('click',() => {
    spanResult.innerText = generatePass()
    alertify.success('Generate Password');
    
})

clipboardBtn.addEventListener('click', () => {
    const password = spanResult.innerText
    if(!password)
    return

    const textArea = document.createElement('textarea')
    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alertify.error('Copy Password');
})