<template>
  <div class="pick4">
    <h1>Play pick4</h1>

    <div class="ticket">
        <div class="game">
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
          <a href="javascript:void(0)" class="clean-game" @click="cleanGame($event)">Limpiar</a>
        </div>
    </div>
<!--    end ticket-->
    <div class="ticket">
      <div class="game">
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
        <a href="javascript:void(0)" class="clean-game" @click="cleanGame($event)">Limpiar</a>
      </div>
    </div>
<!--    end ticket-->
    <div class="ticket">
      <div class="game">
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
        <a href="javascript:void(0)" class="clean-game" @click="cleanGame($event)">Limpiar</a>
      </div>
    </div>
    <!--    end ticket-->
    <div class="ticket">
      <div class="game">
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
        <a href="javascript:void(0)" class="clean-game" @click="cleanGame($event)">Limpiar</a>
      </div>
    </div>
    <!--    end ticket-->



    <div id="summary-game">
      <h5>summary game</h5>
      <div>1: {{ticketOne}}</div>
      <div>2: {{ticketTwo}}</div>
      <div>3: {{ticketThree}}</div>
      <div>4: {{ticketFour}}</div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'PlayPick4',
  components: {

  },
  data(){
    return{
      ticketOne:[],
      ticketTwo:[],
      ticketThree:[],
      ticketFour:[],
      maxCombination:4
    }
  },
  mounted() {

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
    }
  }
}
</script>
<style>

  :root{
    --color-game:#ff4a11;
    --line-color-gray:#e3e2e2;
    --fullwidth: 100%
  }

  .ticket { width: 120px; margin: 3px; vertical-align: top; display: inline-block; border-radius: 2px; border: 1px solid var(--line-color-gray);}
  #summary-game { width: 400px; margin: 3px; vertical-align: top; display: inline-block; border-radius: 2px; border: 1px solid var(--line-color-gray);}

  .game { padding: 12px; width: 100px;}
  .game label span { text-align:center; font-size: 15px; display:block; width: 24px; height: 24px; padding-top: 1px;}
  .game label input { position:absolute; top:-20px; display: none; }
  .game input:checked + span {border-radius: 13px; background-color: var(--color-game); color: #fff; }
  .game .box {cursor: pointer; background-color:#fff; margin: 3px; border-radius: 2px;float: left;}
  .game input[type="checkbox"] { display: none; }
  .game .disabled { cursor:default; background-color: transparent; border-radius: 14px;}
  .game .disabled span{ color: #b9b9b9;}

  .clean-game{text-decoration:none;color: #000;}

</style>
