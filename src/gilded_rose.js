class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie') {
        this.agedBrieHandler(this.items[i]);
      } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        this.sulfurasHandler(this.items[i]);
      } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.backstagePassHandler(this.items[i]);
      } else if (this.items[i].name.toLowerCase().includes("conjured") ) {
        this.conjuredItemHandler(this.items[i]);
      } else {
        this.standardItemHandler(this.items[i]);
      }
    }
  }

  agedBrieHandler(item) {
    if (item.quality < 50 && item.sellIn > 0) {
      item.quality++;
      item.sellIn--;
    } else if (item.quality < 49 && item.sellIn <= 0) {
      item.quality += 2;
      item.sellIn--;
    } else {
      item.sellIn--;
    }
  }

  sulfurasHandler(item) {

  }

  backstagePassHandler(item) {
    if (item.sellIn <= 0) {
      item.quality -= item.quality;
      item.sellIn--;
    } else if (item.sellIn > 10 && item.quality < 50) {
      item.quality++;
      item.sellIn--;
    } else if (item.sellIn < 11 && item.sellIn > 5 && item.quality < 49) {
      item.quality += 2;
      item.sellIn--;
    } else if (item.sellIn < 6 && item.sellIn > 0 && item.quality < 48) {
      item.quality += 3;
      item.sellIn--;
    } else {
      item.sellIn--;
    }
  }

  standardItemHandler(item) {
    if (item.sellIn > 0 && item.quality > 0) {
      item.quality--;
      item.sellIn--;
    } else if (item.sellIn > 0 && item.quality == 0) {
      item.sellIn--;
    } else if (item.quality > 1) {
      item.quality -= 2;
      item.sellIn--;
    }
  }

conjuredItemHandler(item) {
    if (item.sellIn > 0 && item.quality > 1) {
      item.quality -= 2;
      item.sellIn--;
    } else if (item.sellIn > 0 && item.quality > 0) {
      item.quality--;
      item.sellIn--;
    } else if (item.sellIn > 0 && item.quality == 0) {
      item.sellIn--;
    } else if (item.sellIn <= 0 && item.quality > 3) {
      item.quality -= 4;
      item.sellIn--;
    }
  }
}
