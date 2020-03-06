<template>
  <div class="pick4">
    <div id="header-game">
      <div >
        <img src="../../assets/games/image-pick.jpg" style="height: 80px;float: left;">
      </div>
      <div style="padding-right: 160px;">
        <h2><strong>$ 5,000,000</strong></h2>
        <h5>BOLSA ACUMULADA</h5>
      </div>
      <div>
        <span>TOTAL: <span id="total-game">$0.00</span></span>
      </div>
      <div>
        <span class="custom-button" @click="payGame">PAGAR CON CE</span>
      </div>
    </div>

    <div id="content-game">

    <div class="ticket">
        <div class="game">
          <div style="display: flex;">
            <div class="game-id" >A</div>
            <div class="image-random" @click="randomGame($event)"></div>
          </div>
          <div style="display: inline-block;">
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="1"> <span>1</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="2"> <span>2</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="3"> <span>3</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="4"> <span>4</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="5"> <span>5</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="6"> <span>6</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="7"> <span>7</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="8"> <span>8</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="9"> <span>9</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="10"> <span>10</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="11"> <span>11</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="12"> <span>12</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="13"> <span>13</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="14"> <span>14</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="15"> <span>15</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="16"> <span>16</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="17"> <span>17</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="18"> <span>18</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="19"> <span>19</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="20"> <span>20</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="21"> <span>21</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="22"> <span>22</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="23"> <span>23</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="24"> <span>24</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="25"> <span>25</span></label>
            <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketOne" name="number" value="26"> <span>26</span></label>
          </div>
          <div>
            <img class="clean-game" @click="cleanGame($event)" src="../../assets/games/trashGray.svg">
          </div>
          <div>
            <div class="ticket-total">
              COSTO: $<span class="total">0.00</span>
            </div>
          </div>
        </div> <!-- end game -->

    </div>
<!--    end ticket-->
    <div class="ticket">
      <div class="game">
        <div style="display: flex;">
          <div class="game-id" >B</div>
          <div class="image-random" @click="randomGame($event)"></div>
        </div>
        <div style="display: inline-block;">
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="1"> <span>1</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="2"> <span>2</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="3"> <span>3</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="4"> <span>4</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="5"> <span>5</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="6"> <span>6</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="7"> <span>7</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="8"> <span>8</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="9"> <span>9</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="10"> <span>10</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="11"> <span>11</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="12"> <span>12</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="13"> <span>13</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="14"> <span>14</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="15"> <span>15</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="16"> <span>16</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="17"> <span>17</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="18"> <span>18</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="19"> <span>19</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="20"> <span>20</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="21"> <span>21</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="22"> <span>22</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="23"> <span>23</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="24"> <span>24</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="25"> <span>25</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketTwo" name="number" value="26"> <span>26</span></label>
        </div>
        <div>
          <img class="clean-game" @click="cleanGame($event)" src="../../assets/games/trashGray.svg">
        </div>
        <div>
          <div class="ticket-total">
            COSTO: $<span class="total">0.00</span>
          </div>
        </div>
      </div>
    </div>
<!--    end ticket-->
    <div class="ticket">
      <div class="game">
        <div style="display: flex;">
          <div class="game-id" >C</div>
          <div class="image-random" @click="randomGame($event)"></div>
        </div>
        <div style="display: inline-block;">
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="1"> <span>1</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="2"> <span>2</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="3"> <span>3</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="4"> <span>4</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="5"> <span>5</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="6"> <span>6</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="7"> <span>7</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="8"> <span>8</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="9"> <span>9</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="10"> <span>10</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="11"> <span>11</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="12"> <span>12</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="13"> <span>13</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="14"> <span>14</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="15"> <span>15</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="16"> <span>16</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="17"> <span>17</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="18"> <span>18</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="19"> <span>19</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="20"> <span>20</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="21"> <span>21</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="22"> <span>22</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="23"> <span>23</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="24"> <span>24</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="25"> <span>25</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketThree" name="number" value="26"> <span>26</span></label>
        </div>
        <div>
          <img class="clean-game" @click="cleanGame($event)" src="../../assets/games/trashGray.svg">
        </div>
        <div>
          <div class="ticket-total">
            COSTO: $<span class="total">0.00</span>
          </div>
        </div>
      </div>
    </div>
    <!--    end ticket-->
    <div class="ticket">
      <div class="game">
        <div style="display: flex;">
          <div class="game-id" >D</div>
          <div class="image-random" @click="randomGame($event)"></div>
        </div>
        <div style="display: inline-block;">
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="1"> <span>1</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="2"> <span>2</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="3"> <span>3</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="4"> <span>4</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="5"> <span>5</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="6"> <span>6</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="7"> <span>7</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="8"> <span>8</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="9"> <span>9</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="10"> <span>10</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="11"> <span>11</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="12"> <span>12</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="13"> <span>13</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="14"> <span>14</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="15"> <span>15</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="16"> <span>16</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="17"> <span>17</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="18"> <span>18</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="19"> <span>19</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="20"> <span>20</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="21"> <span>21</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="22"> <span>22</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="23"> <span>23</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="24"> <span>24</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="25"> <span>25</span></label>
          <label class="box"> <input type="checkbox" @click="checkMax($event)" v-model="ticketFour" name="number" value="26"> <span>26</span></label>
        </div>
        <div>
          <img class="clean-game" @click="cleanGame($event)" src="../../assets/games/trashGray.svg">
        </div>
        <div>
          <div class="ticket-total">
            COSTO: $<span class="total">0.00</span>
          </div>
        </div>
      </div>
    </div>
    <!--    end ticket-->
    </div> <!-- end content game -->

  </div>
</template>

<script>
import GetInitialGameService from '@/services/GetInitialGameService'

export default {
  name: 'PlayPick4',
  components: {
    GetInitialGameService
  },
  data(){
    return{
      ticketOne:[],
      ticketTwo:[],
      ticketThree:[],
      ticketFour:[],
      maxCombination:4,
      maxNumber:26,
      data:{
        userName:"email@aganar.com",
        token:"adsnjibhuvg23by4236748",
        url:"www.aganar.com.mx",
        gameCode:10,
        costPerTicket:10
      }
    }
  },
  mounted() {
    GetInitialGameService.getInitialGame(this.data)
    .then(
      response => {
            console.log(response)
      }).catch((error) => {
        console.error(error);
      })
      .finally(() => {

      })
  },
  created() {
  },
  computed:{

  },
  filters:{

  },
  methods:{
    sortedList : function(array){
      return array.sort(function(a, b){return a-b});
    },
    checkMax : function (event) {
      let $game = event.currentTarget.closest('.game');
      let numOfChecked = $game.querySelectorAll( 'input[name="number"]:checked' ).length;
      console.log(event.currentTarget.value)

      if(event.currentTarget.checked && numOfChecked > this.maxCombination){
        event.currentTarget.checked = false;
      }else if (!event.currentTarget.checked){
        this.enabledOrDisabled($game,true);
      }else if ( numOfChecked == this.maxCombination){
        this.enabledOrDisabled($game,false);
      }

      this.calculateAmounts();
    },
    enabledOrDisabled : function ($game,enabled) {
      let array = $game.querySelectorAll('input[name="number"]:not( :checked )');
      array.forEach(function (value,index,listObject) {
        if(enabled) {
          value.closest('label.box').classList.remove('disabled');
        }else{
          value.closest( 'label.box' ).classList.add( 'disabled' );
        }
      })
    },
    cleanGame : function (event) {
      let $game = event.currentTarget.closest('.game');
      let array = $game.querySelectorAll('input[name="number"]');
      array.forEach(function (value,index,listObject) {
        value.checked = false;
        value.closest('label.box').classList.remove('disabled');
      })
      this.calculateAmounts();
    },
    payGame : function () {
      alert(this.getGameToBuy());

    },
    randomGame : function (event) {
      let $game = event.currentTarget.closest('.game');
      this.cleanGame(event);
      let min = 1, max = this.maxNumber, i = 0;
      while( i < this.maxCombination ) {
        let randomNum = Math.floor( Math.random() * ( max - min + 1 ) ) + min;
        let $boxNumber = $game.querySelectorAll( 'input[name="number"]' );

        let $box = this.getBoxByValue($boxNumber,randomNum);

        if( !$box.checked ) {
          $box.checked = true;
          i++;
        }
      }
      this.addClassDisabledWhenNotCheckedBox($game);
      // this.getGame($game);
      this.calculateAmounts();
    },
    addClassDisabledWhenNotCheckedBox : function($game){
      let array = $game.querySelectorAll('input[name="number"]:not( :checked )');
      array.forEach(function (value) {
          value.closest('label.box').classList.add('disabled');
      })
    },
    getBoxByValue : function ($boxNumber,randomNum) {
      for(let i = 0 ; i<$boxNumber.length; i++){
        if($boxNumber[i].value == randomNum){
          return $boxNumber[i];
        }
      }
    },
    getGame : function ($game){
      let game = {};
      game.id = $game.getElementsByClassName("game-id")[0].innerHTML;
      let $numbers = $game.querySelectorAll( 'input[name="number"]:checked' );
      if($numbers.length == this.maxCombination ){
        let combination = [];
        $numbers.forEach(function (box) {
          combination.push(box.value);
        })
        combination.sort( function(a, b) { return a - b; } );
        game.completeCombination = true;
        game.combination = combination.join( ',' );
      }else{
        game.completeCombination = false;
      }
      console.log(game);
      return game;

    },
    getGameToBuy : function (){
      let games = [];
        try{
        let arrayGames = document.getElementsByClassName('game');
        for(let i = 0 ; i < arrayGames.length ; i++ ){
          games.push(this.getGame(arrayGames[i]));
        }
        console.log(games);
      }catch(e){
        console.error(e)
      }
      return games;

    },
    calculateAmounts : function () {
      let games = this.getGameToBuy();
      let totalGame = 0.00;
      for(let i = 0 ; i < games.length ; i++ ){
        let $game = this.getGameById(games[i].id);
        if(games[i].completeCombination){
          let cost = this.data.costPerTicket.toFixed(2);
          $game.getElementsByClassName("total")[0].innerHTML = cost;
          totalGame = totalGame + parseFloat(cost);
        }else{
          $game.getElementsByClassName("total")[0].innerHTML = "0.00";
          totalGame = totalGame + parseFloat(0);
        }
      }
      document.getElementById("total-game").innerText = "$"+totalGame.toFixed(2);
    },
    getGameById : function (gameId) {
      let arrayGames = document.getElementsByClassName('game');
      for(let i = 0 ; i < arrayGames.length ; i++ ){
        let id = arrayGames[i].getElementsByClassName("game-id")[0].innerHTML;
        if(id == gameId){
          return arrayGames[i];
        }
      }
    }
  }
}
</script>
<style>


  .pick4{width:1030px;display: inline-block;}
  #header-game h5,h2,h1,h3 p{margin: 0px;}

  :root{
    --color-game:#ff4a11;
    --line-color-gray:#e3e2e2;
    --fullwidth: 100%
  }

  #content-game{display: inline-grid;grid-template-columns: auto auto auto auto;}
  .image-random{
    background-image: url("../../assets/games/random.svg");
    background-repeat:no-repeat;
    background-position:center;
    height:20px;
    width:20px;
    background-size: 20px;
    float: right;
    padding-right:20px;
    cursor: pointer;
    width: 50%;
  }

  .game-id{font-weight: bold;text-align: left;padding-left: 9px;padding-bottom: 9px;width: 50%}
  .custom-button{background-color: var(--color-game); color: #fff; padding: 6px 24px 6px 24px;border-radius: 3px;font-size: 14px;font-weight: bold;cursor: pointer;}

  #header-game {display: inline-grid;grid-template-columns: auto auto auto auto;}
  #header-game div{margin:8px;}

  .ticket { width: 218px; margin: 3px; vertical-align: top; border-radius: 2px; border: 1px solid var(--line-color-gray);}

  .game { padding: 12px;}
  .game label span { text-align:center; font-size: 15px; display:block; width: 24px; height: 24px;}
  .game label input { position:absolute; top:-20px; display: none; }
  .game input:checked + span {border-radius: 13px; background-color: var(--color-game); color: #fff; }
  .game .box {cursor: pointer; background-color:#fff; margin: 3px; border-radius: 2px;float: left;}
  .game input[type="checkbox"] { display: none; }
  .game .disabled { cursor:default; background-color: transparent; border-radius: 14px;}
  .game .disabled span{ color: #b9b9b9;}

  .clean-game{width: 21px;cursor: pointer;}
  .ticket-total{text-align: right;margin: 10px;font-size: 14px;font-weight: 900;}
  #total-game{font-weight: bold;}

</style>
