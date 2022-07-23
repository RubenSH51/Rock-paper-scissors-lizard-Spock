
// Variables globales
let player_score = 0;
let cpu_score    = 0;

let btnStart = document.querySelector('#start-game');
btnStart.addEventListener('click',startGame)

function startGame()
{
    document.querySelector('.menu').style='display:none';
    document.querySelector('.game-container').style='display:flex';
    //document.querySelector('.scoreboard').style='display:flex';
    document.querySelector('.scoreboard').classList.add('active');
}

function jugar(option)
{
    const choices = ['scissors','spock','paper','lizard','rock'];
    const random_num = Math.floor(Math.random()*5+1);
    const pc_choice = choices[random_num-1];

    // scissors
    if(option==='scissors' && (pc_choice==='lizard' || pc_choice==='paper') )
    {
        youScored([option,pc_choice]);
        return;
    }
    else if(option==='scissors' && (pc_choice==='spock' || pc_choice==='rock') )
    {
        cpuScored([option,pc_choice]);
        return;
    }


    // spock
    else if(option==='spock' && (pc_choice==='scissors' || pc_choice==='rock') )
    {
        youScored([option,pc_choice]);
        return;
    }
    else if(option==='spock' && (pc_choice==='lizard' || pc_choice==='paper') )
    {
        cpuScored([option,pc_choice]);
        return;
    }


    // paper
    else if(option==='paper' && (pc_choice==='spock' || pc_choice==='rock') )
    {
        youScored([option,pc_choice]);
        return;
    }
    else if(option==='paper' && (pc_choice==='scissors' || pc_choice==='lizard') )
    {
        cpuScored([option,pc_choice]);
        return;
    }


    // lizard
    else if(option==='lizard' && (pc_choice==='spock' || pc_choice==='paper') )
    {
        youScored([option,pc_choice]);
        return;
    }
    else if(option==='lizard' && (pc_choice==='scissors' || pc_choice==='rock') )
    {
        cpuScored([option,pc_choice]);
        return;
    }


    // rock
    else if(option==='rock' && (pc_choice==='lizard' || pc_choice==='scissors') )
    {
        youScored([option,pc_choice]);
        return;
    }
    else if(option==='rock' && (pc_choice==='spock' || pc_choice==='paper') )
    {
        cpuScored([option,pc_choice]);
        return;
    }
    else
    {
        youTie([option,pc_choice]);
        return;
    }

}

function youScored(lista)
{
    player_score++;

    let status  = document.querySelector('.status h2');
    let p1      = document.querySelector('.status p:nth-child(2)');
    let p2      = document.querySelector('.status p:nth-child(3)');
    let h1      = document.querySelector('h1');

    // Flotantes

    let floating_player_score = document.querySelector('.player-score p');
    let floating_cpu_score = document.querySelector('.cpu-score p');

    console.log('You played '+lista[0]+' and the cpu played '+lista[1]+'.')
    console.log('You scored!');
    
    console.log('Me : '+player_score);
    console.log('CPU: '+cpu_score);

    status.innerHTML = 'You scored!';
    p1.innerHTML     = 'You played '+lista[0]+' and the cpu played '+lista[1]+'.';
    if(window.innerWidth<=850)
    {
        h1.innerHTML     = 'You played <span class="player-span">'+lista[0]+'</span> and the cpu played <span class="cpu-span">'+lista[1]+'</span>.';
    }
    else
    {
        h1.innerHTML     = 'Rock, paper, scissors, lizard, Spock!';
    }

    let score1 = document.querySelector('.scoreboard table tr:nth-child(2) td:nth-child(1)');
    score1.innerHTML = player_score
    floating_player_score.innerHTML = player_score
    console.log('----------------------------------\n')

    if(player_score===5)
    {
        theWinnerIs(1)
    }
}

function cpuScored(lista)
{
    let status  = document.querySelector('.status h2');
    let p1      = document.querySelector('.status p:nth-child(2)');
    let p2      = document.querySelector('.status p:nth-child(3)');
    let h1      = document.querySelector('h1');

    let floating_player_score = document.querySelector('.player-score p');
    let floating_cpu_score = document.querySelector('.cpu-score p');

    console.log('You played '+lista[0]+' and the cpu played '+lista[1]+'.')
    console.log('Cpu scored!');

    cpu_score++;
    console.log('Me : '+player_score);
    console.log('CPU: '+cpu_score);

    status.innerHTML = 'Cpu scored!';
    p1.innerHTML     = 'You played '+lista[0]+' and the cpu played '+lista[1]+'.';
    if(window.innerWidth<=850)
    {
        h1.innerHTML     = 'You played <span class="player-span">'+lista[0]+'</span> and the cpu played <span class="cpu-span">'+lista[1]+'</span>.';
    }
    else
    {
        h1.innerHTML     = 'Rock, paper, scissors, lizard, Spock!';
    }

    let score2 = document.querySelector('.scoreboard table tr:nth-child(2) td:nth-child(3)');
    score2.innerHTML = cpu_score;
    floating_cpu_score.innerHTML = cpu_score;
    console.log('----------------------------------\n')

    if(cpu_score===5)
    {
        theWinnerIs(2)
    }
}

function youTie(lista)
{
    let status  = document.querySelector('.status h2');
    let p1      = document.querySelector('.status p:nth-child(2)');
    let p2      = document.querySelector('.status p:nth-child(3)');
    let h1      = document.querySelector('h1');

    console.log('You played '+lista[0]+' and the cpu played '+lista[1]+'.')
    console.log('You Tie :/');

    console.log('Me : '+player_score);
    console.log('CPU: '+cpu_score);
    console.log('----------------------------------\n')

    status.innerHTML = 'You Tie!';
    p1.innerHTML     = 'You played '+lista[0]+' and the cpu played '+lista[1]+'.';

    if(window.innerWidth<=850)
    {
        h1.innerHTML     = 'You played <span class="player-span">'+lista[0]+'</span> and the cpu played <span class="cpu-span">'+lista[1]+'</span>.';
    }
    else
    {
        h1.innerHTML     = 'Rock, paper, scissors, lizard, Spock!';
    }
    

}

function theWinnerIs(player)
{
    const list_info = [player_score,cpu_score]

    modalActivated(list_info)
}

function playAgain()
{
    screenCleaner()

    document.querySelector('.menu').style='display:none';
    document.querySelector('.game-container').style='display:flex';
    document.querySelector('.scoreboard').classList.add('active');
}

function mainScreen()
{
    screenCleaner()

    document.querySelector('.menu').style='display:block';
    document.querySelector('.game-container').style='display:none';
    document.querySelector('.scoreboard').classList.remove('active');
}

function screenCleaner()
{
    player_score = 0;
    cpu_score    = 0;

    modalDeactivated()

    let status  = document.querySelector('.status h2');
    let p1      = document.querySelector('.status p:nth-child(2)');
    let p2      = document.querySelector('.status p:nth-child(3)');
    let floating_player_score = document.querySelector('.player-score p');
    let floating_cpu_score = document.querySelector('.cpu-score p');
    let score1 = document.querySelector('.scoreboard table tr:nth-child(2) td:nth-child(1)');
    let score2 = document.querySelector('.scoreboard table tr:nth-child(2) td:nth-child(3)');
    let h1      = document.querySelector('h1');

    floating_player_score.innerHTML = player_score;
    floating_cpu_score.innerHTML    = cpu_score;

    status.innerHTML = '';
    p1.innerHTML     = ''
    score1.innerHTML = player_score;
    score2.innerHTML = cpu_score;
    h1.innerHTML     = 'Rock, paper, scissors, lizard, Spock!';
}

/* >>>>>>>>>>>>>>>>>>>>>> MODAL functions */
function modalActivated(info)
{
    let modal = document.getElementById('modal');
    let h2 = "<h2>Final Score: <span onclick='mainScreen()'></span></h2>";
    let p1 = "<p>ME : "+info[0]+"</p>";
    let p2 = "<p>CPU: "+info[1]+"</p>";
    let h3;
    let tryAgain = "<button type='button' onclick='playAgain()'>Play again?</button>"

    if(info[0]>info[1])
    {
        h3 = "<h3>You Won!</h3>"
    }
    else
    {
        h3 = "<h3>You Lost!</h3>"
    }

    modal.innerHTML = h2+p1+p2+h3+tryAgain;

    document.getElementById('overlay').style = 'display:block';
    setTimeout(function(){
        
        document.getElementById('modal').classList.add('activado');
    }, 20);

}

function modalDeactivated()
{
    document.getElementById('overlay').style = 'display:none';
    document.getElementById('modal').classList.remove('activado');
}