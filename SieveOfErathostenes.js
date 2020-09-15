const { performance } = require('perf_hooks')
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('Minimum value: ', (minVal) => {
	rl.question('Maximum value: ', (maxVal) => {
		rl.question('Do you want the progress to be shown? (y/n)', (showProgress) => {
			const minNumber = parseInt(minVal)
			const maxNumber = parseInt(maxVal)
			let array = []
			let round = 0

			let progressPercentage = 0

			for (let i = minNumber; i <= maxNumber; i++) {
				array.push(i)
			}

			let timeInitial = performance.now()

			array.forEach((num) => {
				round += 1
				progressPercentage = (num / maxNumber) * 100
				if (showProgress === 'y') {
					console.log(progressPercentage + '% completed')
				}
				for (let i = 0; i < array.length; i++) {
					if (array[i] % round === 0 && array[i] !== round && round !== 1) {
						array.splice(i, 1)
					}
				}
			})

			let timeFinal = performance.now()

			console.log('\n ' + JSON.stringify(array), '\n\n')
			console.log((timeFinal - timeInitial) / 1000, 'seconds\n')
			console.log('----------------------------------------------------------------\n')
			console.log(timeFinal - timeInitial, 'milliseconds\n')
		})
	})
})
