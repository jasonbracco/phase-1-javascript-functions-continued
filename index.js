function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity = "go to the office"){
        return `This Monday, I will ${activity}.`
    }

function wrapAdjective(flair = '*'){
    const innerFunction = function(ayo= "special") {
        return `You are ${flair}${ayo}${flair}!`
    }
    return innerFunction
}
//const stored = wrapAdjective(flair = '*')
//stored(ayo = "special")