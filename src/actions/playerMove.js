var player = {    
    processMove(player,aiplayer){
        let actionMove = player.actionMove;
        if(actionMove == 'Attack'){
              player = this.attack(player);
        }else if(actionMove == 'Focus'){
              player = this.focus(player);
        }else if(actionMove == 'ShieldBash'){
              player = this.shieldBash(player);
        }else if(actionMove == 'GreatScroll'){
              player = this.greatScroll(player);
        }else if(actionMove == 'Execute'){
              player = this.execute(player,aiplayer);
        }
        return player;
    },
    attack(player){
            player["actionMove"] = "Goblin Slayer used Attack!!";
            player["actionLog"] = "Dealt 10 damage";
            player["actionDmg"] = 10;
            player["actionPic"] = "attack";
            return player;
    },
    shieldBash(player){
        console.log(player);
        if(this.manacheck(player,20)){
            player["actionMove"] = "Goblin Slayer used Shield Bash!!";
            player["actionLog"] = "Dealt 20 damage";
            player["actionDmg"] = 20;
            player["actionPic"] = "shieldbash";
            player.mana = player.mana - 20;
        }else{
            player = this.activateFocus(player);
        }
        return player;
    },

    greatScroll(player){
        if(this.manacheck(player,55)){
            player["actionMove"] = "Goblin Slayer used Great Scroll!!";
            player["actionLog"] = "Dealt 50 damage";
            player["actionDmg"] = 50;
            player["actionPic"] = "greatscroll";
            let mana = player.mana - 55;
            player["mana"] = mana;
        }else{
            player = this.activateFocus(player);
        }
        return player;
    },
    execute(player, enemy){
        console.log("execute");

        let enemyhp = enemy.hp;
        console.log("enemyhp:"+enemyhp);

        if(enemyhp > 20){
            player["actionMove"] = "Goblin Slayer used Execute!!";
            player["actionLog"] = "Goblin Slayer missed!! Enemy not below treshold!!";
            player["actionDmg"] = 0;
            player["actionPic"] = "standing";
            player.mana = player.mana - 30;
        }else {

            if(this.manacheck(player,30)){
                player["actionMove"] = "Goblin Slayer used Execute!!";
                player["actionLog"] = "Enemy below treshold!! Instant Kill!!";
                player["actionDmg"] = 100;
                player["actionPic"] = "execute";
                player.mana = player.mana - 30;
            }else{
                player = this.activateFocus(player);
            }
        }
        return player;
    },
    focus(player){
        player["actionMove"] = "Player used Focus!!";
        player["actionLog"] = "Regains 20 mana";
        player["actionPic"] = "focus";
        player["actionDmg"] = 0;
        let mana = player.mana + 20;
        player["mana"] = mana;
        return player;
    },
    activateFocus(player){
        player["actionMove"] = "Not Enough mana!! Player used Focus!!";
        player["actionLog"] = "Regains 20 mana";
        player["actionPic"] = "focus";
        let mana = player.mana + 20;
        player["actionDmg"] = 0;
        player["mana"] = mana;
        return player;
    },
    manacheck(player,manareq){
        let mana = player.mana;
        if(mana > manareq){
            return true;
        }else{
            return false;
        }
    }
}

export default player;