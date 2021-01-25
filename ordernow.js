function collectorderdata(){

    potstickeramount = document.getElementById("potstickeramount").value
    greenonionamount = document.getElementById("greenonionamount").value
    eggrollamount = document.getElementById("eggrollamount").value
    bbqporkamount = document.getElementById("bbqporkamount").value
    friedriceamount = document.getElementById("friedriceamount").value
    chowmeinamount = document.getElementById("chowmeinamount").value
    orangechickenamount = document.getElementById("orangechickenamount").value
    honeywalnutamount = document.getElementById("honeywalnutamount").value
    chinesebroccoliamount = document.getElementById("chinesebroccoliamount").value
    cucumbersaladamount = document.getElementById("cucumbersaladamount").value
    hotsouramount = document.getElementById("hotsouramount").value
    mangopuddingamount = document.getElementById("mangopuddingamount").value
    blacksesameamount = document.getElementById("blacksesameamount").value
    spriteamount = document.getElementById("spriteamount").value

    order1 = new order(potstickeramount, greenonionamount, eggrollamount, bbqporkamount, friedriceamount, chowmeinamount, orangechickenamount, honeywalnutamount, chinesebroccoliamount, cucumbersaladamount, hotsouramount, mangopuddingamount, blacksesameamount, spriteamount)
    console.log(order1)

}

function order(potstickeramount, greenonionamount, eggrollamount, bbqporkamount, friedriceamount, chowmeinamount, orangechickenamount,  honeywalnutamount, chinesebroccoliamount, cucumbersaladamount, hotsouramount, mangopuddingamount, blacksesameamount, spriteamount){
    this.potstickeramount = potstickeramount
    this.greenonionamount = greenonionamount
    this.eggrollamount = eggrollamount
    this.bbqporkamount = bbqporkamount
    this.friedriceamount = friedriceamount
    this.chowmeinamount = chowmeinamount
    this.orangechickenamount = orangechickenamount
    this.honeywalnutamount = honeywalnutamount
    this.chinesebroccoliamount = chinesebroccoliamount
    this.cucumbersaladamount = cucumbersaladamount
    this.hotsouramount = hotsouramount
    this.mangopuddingamount = mangopuddingamount
    this.blacksesameamount = blacksesameamount
    this.spriteamount = spriteamount
}