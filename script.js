var numbers = document.querySelectorAll("input")
var result = document.querySelector(".result")

numbers.forEach(number => {
    number.addEventListener("change", e => {
        var firstStep = numbers[0].value * numbers[4].value * numbers[8].value

        var secondStep = numbers[1].value * numbers[5].value * numbers[6].value

        var thirdStep = numbers[2].value * numbers[3].value * numbers[7].value

        var fourthStep = (numbers[2].value * numbers[4].value * numbers[6].value) * -1
        
        var fifthStep = (numbers[0].value * numbers[5].value * numbers[7].value) * -1

        var sixthStep = (numbers[1].value * numbers[3].value * numbers[8].value) * -1

        console.log(`(${firstStep}, ${secondStep}, ${thirdStep}, ${fourthStep}, ${fifthStep}, ${sixthStep})`)

        var sum1 = firstStep + secondStep + thirdStep
        console.log(sum1)
        var sum2 = fourthStep + fifthStep + sixthStep
        console.log(sum2)

        var total = sum1 + sum2

        result.innerText = `D = ${total}`
    })
})