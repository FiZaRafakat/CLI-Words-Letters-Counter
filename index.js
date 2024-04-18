import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
async function animate(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 40);
        });
    }
}
clear();
await animate(chalk.greenBright.bold.underline("\n\t\tWELCOME TO THE FIZA'S WORD COUNTER PROJECT\n"));
await animate(chalk.grey("\n\t\t-------------------------------------------\n\n"));
async function main() {
    let options = await inquirer.prompt({
        name: "option",
        type: "list",
        message: chalk.bgGray.blue("What's you want to count\n"),
        choices: ["Words count", "Letters count"]
    });
    if (options.option === "Words count") {
        let answer1 = await inquirer.prompt({
            name: "Sentence",
            type: "input",
            message: chalk.yellowBright("Enter Your sentence to count the word : \n")
        });
        // for  counting words in sentence
        const sentence = answer1.Sentence.trim().split(" ");
        console.log(sentence);
        await animate(chalk.yellow.underline(`\n\t\tYour Words in Sentence : ${sentence.length}\n`));
    }
    else {
        let answer2 = await inquirer.prompt({
            name: "Letter",
            type: "input",
            message: chalk.yellowBright("Enter Your sentence to count the letters : \n")
        });
        // for  counting letters in sentence
        const letter = answer2.Letter.replace(/\s/g, "");
        await animate(chalk.yellow.underline(`\n\t\tYour Letters in Sentence : ${letter.length}\n`));
    }
    await animate(chalk.grey("\n\t------------------------------------------\n\n"));
    let restart = await inquirer.prompt({
        name: "restart",
        type: "confirm",
        message: chalk.red("Do you want to exit ?\n")
    });
    if (restart.restart) {
        await animate(chalk.magenta.underline("\n\t\tThanks for using my Word Counter project :-) \n"));
        await animate(chalk.grey("\n\t\t-------------------------------------------\n\n"));
    }
    else {
        clear();
        main();
    }
}
main();
