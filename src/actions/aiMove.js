var aiMove = {

    processMove(player){
        let actionMoveRoll = Math.floor(Math.random() * 2);
        if(actionMoveRoll == 0){
              player = this.attack(player);
        }else{
            let specialMoveRoll = Math.floor(Math.random() * 3);

            if(specialMoveRoll == 0){
                player = this.greatCleave(player);
            }else if(specialMoveRoll == 1){
                player = this.fireball(player);
            }else if(specialMoveRoll == 2){
                player = this.iacta(player);
            }
        }
        return player;
    },

    attack(player){
            player["actionMove"] = "Ogre used Attack!!";
            player["actionLog"] = "Dealt 10 damage";
            player["actionDmg"] = 10;
            player["actionPic"] = "attack";
            return player;
    },
    greatCleave(player){
        if(this.manacheck(player,20)){
            player["actionMove"] = "Ogre used Great Cleave!!";
            player["actionLog"] = "Dealt 20 damage";
            player["actionDmg"] = 20;
            player["actionPic"] = "greatcleave";
            let mana = player.mana - 20;
            player["mana"] = mana;
        }else{
            player = this.focus(player);
        }
        return player;
    },

    fireball(player){
        if(this.manacheck(player,30)){
            player["actionMove"] = "Ogre used Fireball!!";
            player["actionLog"] = "Dealt 30 damage";
            player["actionDmg"] = 30;
            player["actionPic"] = "fireball";
            let mana = player.mana - 30;
            player["mana"] = mana;
        }else{
            player = this.focus(player);
        }
        return player;
    },
    iacta(player){
        if(this.manacheck(player,55)){
            player["actionMove"] = "Ogre used Iacta!!";
            player["actionLog"] = "Dealt 50 damage";
            player["actionDmg"] = 50;
            player["actionPic"] = "iacta";
            let mana = player.mana - 55;
            player["mana"] = mana;
        }else{
            player = this.focus(player);
        }
        return player;
    },
    focus(player){
        player["actionMove"] = "Ogre used Focus!!";
        player["actionLog"] = "Regains 20 mana";
        player["actionPic"] = "focus";
        player["actionDmg"] = 0;
        let mana = player.mana + 20;
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

export default aiMove;