var isMobile = false;

var portfolioText = document.getElementById("portfolio")
var socialsText = document.getElementById("socials")
var feedbackText = document.getElementById("feedback")

portfolioText.addEventListener("click", (event) => {
    var newInputText = document.createElement("p")
    newInputText.innerHTML = "<b>portfolio</b>"
    document.body.appendChild(newInputText)
    handleCommand("portfolio")
    window.scrollTo(0, document.body.scrollHeight);
})
socialsText.addEventListener("click", (event) => {
    var newInputText = document.createElement("p")
    newInputText.innerHTML = "<b>socials</b>"
    document.body.appendChild(newInputText)
    handleCommand("socials")
    window.scrollTo(0, document.body.scrollHeight);
})
feedbackText.addEventListener("click", (event) => {
    var newInputText = document.createElement("p")
    newInputText.innerHTML = "<b>feedback</b>"
    document.body.appendChild(newInputText)
    handleCommand("feedback")
    window.scrollTo(0, document.body.scrollHeight);
})



document.addEventListener("touchstart", (event) => {
    isMobile = true;
    var helpText = document.getElementById("help")
    var inputText = document.getElementById("input")
    inputText.innerHTML = inputText.innerHTML.replace("_", "")
    if (helpText != null) {
        helpText.remove()
    }
})

function updateWebsite() {
    var inputText = document.getElementById("input")
    if (!isMobile) {
        if (!inputText.innerHTML.includes("_")) {
            inputText.innerHTML += "_"
        }
        window.scrollTo(0, document.body.scrollHeight);
    }
    setTimeout(updateWebsite, 10);
}

updateWebsite()

document.addEventListener('keydown', (event) => {
    if (!isMobile) {
        var inputText = document.getElementById("input")
        var name = event.key;
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            inputText.innerHTML = inputText.innerHTML + name.toLowerCase();
        }
        if (!inputText.innerHTML.includes("_")) {
            inputText.innerHTML += "_"
        } else {
            inputText.innerHTML = inputText.innerHTML.replace("_", "")
            inputText.innerHTML += "_"
        }
        if (event.keyCode == 13) {
            if (inputText.innerHTML != null && inputText.innerHTML != "") {
                inputText.className = ""
                inputText.id = ""
                inputText.innerHTML = inputText.innerHTML.replace("_", "")
                handleCommand(inputText.innerHTML);
                inputText.innerHTML = "<b>" + inputText.innerHTML + "</b>"
                var newInputText = document.createElement("p")
                newInputText.className = "input"
                newInputText.id = "input"
                document.body.appendChild(newInputText)
            }
        }
        if (event.keyCode == 8) {
            inputText.innerHTML = inputText.innerHTML.slice(0, -2)
        }
    }
}, false);

function handleCommand(command) {
    // command = "<b>"
    if (command == "socials") {
        var innerArray = [
            "<a href=\"https://youtube.com/devPrzemuS\" target=\"_blank\"><b>youtube</b></a> - devPrzemuS.",
            "<a href=\"https://twitch.tv/devPrzemuS\" target=\"_blank\"><b>twitch</b></a> - devPrzemuS.",
            "<a href=\"https://github.com/dewPrzemuS\" target=\"_blank\"><b>github</b></a> - dewPrzemuS.",
            "<a href=\"https://www.spigotmc.org/members/1445270/\" target=\"_blank\"><b>spigotmc</b></a> - devPrzemuS.",
            "<a href=\"https://discord.gg/VmH9Evaf\" target=\"_blank\"><b>discord</b></a> - devPrzemuS#3167."
        ]
        for (inner in innerArray) {
            var newInputText = document.createElement("p")
            newInputText.innerHTML = innerArray[inner]
            document.body.appendChild(newInputText)
        }
    } else if (command == "portfolio") {
        var innerArray = [
            "<b>Video Editing:</b>",
            "<a href=\"https://www.youtube.com/playlist?list=PLDo-hTcho35sNuB62fu-_ooy1esro8Bp8\" target=\"_blank\"><b>Minecraft/News</b></a> - Latest playlist.",
            "<a href=\"https://www.youtube.com/playlist?list=PLDo-hTcho35szbBbSV2SrX-fo92kNk6uB\" target=\"_blank\"><b>CS:GO/Lifestyle</b></a> - Old playlist.",
            "<b>Programming:</b>",
            "<a href=\"https://www.spigotmc.org/resources/101967/\" target=\"_blank\"><b>P-LifeSteal</b></a> - Minecraft plugin.",
            "<a href=\"https://www.przemus.xyz/\" target=\"_blank\"><b>www.przemus.xyz</b></a> - Website you are currently on."
        ]
        for (inner in innerArray) {
            var newInputText = document.createElement("p")
            newInputText.innerHTML = innerArray[inner]
            document.body.appendChild(newInputText)
        }
    } else if (command == "feedback") {
        var innerArray = [
            "<a href=\"https://www.youtube.com/xFuzi\" target=\"_blank\"><b>xFuzi</b></a> - <q title=\"Original text without translation: polecam dobry serwis\">good service i recommend</q>.",
            "<a href=\"https://www.youtube.com/channel/UCYZ0tHp4a77BkCQxduZkALw\" target=\"_blank\"><b>Charlitto</b></a> - <q title=\"Original text without translation: Chciałem Ci bardzo podziękować za całą robotę, jaką dotychczas dla mnie zrobiłeś. Jestem bardzo zadowolony z twojego montażu i śmiało będę Cię polecał innym.\">I want to thank you very much for all the work you have done for me so far. I am very satisfied with your editing and will recommend you to others.</q>."
        ]
        for (inner in innerArray) {
            var newInputText = document.createElement("p")
            newInputText.innerHTML = innerArray[inner]
            document.body.appendChild(newInputText)
        }
    } else if (command == "help") {
        var innerArray = [
            "<b>Available commands:</b>",
            "<b>help</b> - Displays list of commands.",
            "<b>portfolio</b> - Displays my portfolio.",
            "<b>socials</b> - Displays my social media.",
            "<b>feedback</b> - Feedback from clients who have used my services."
        ]
        for (inner in innerArray) {
            var newInputText = document.createElement("p")
            newInputText.innerHTML = innerArray[inner]
            document.body.appendChild(newInputText)
        }
    }
    else {
        var newInputText = document.createElement("p")
        newInputText.innerHTML = "Unknown command."
        document.body.appendChild(newInputText)
    }
}
