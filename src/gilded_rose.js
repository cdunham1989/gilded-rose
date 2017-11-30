// LEAVE ALONE

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

  // LEAVE ALONE

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie') {
        this.agedBrieHandler(this.items[i]);
      } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        this.sulfurasHandler(this.items[i]);
      // } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      //
      // } else {
      //
      }
    }
  }

  agedBrieHandler(item) {
    if (item.quality <50 && item.sellIn > 0) {
      item.quality++;
      item.sellIn--;
    } else if (item.quality <49 && item.sellIn <= 0) {
      item.quality += 2;
      item.sellIn--;
    } else {
      item.sellIn--;
    }
  }

  sulfurasHandler(item) {

  }

//
//   updateQuality() {
//     for (var i = 0; i < this.items.length; i++) {
//       if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//         //reducing quality for all items except Aged Brie, Backstage passes and Sulfuras
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1;
//           //increases quality of items by 1 if they are less than 50
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             this.updateBackstagePasses();
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//           //     //increases quality of backstage passes again if less than 11 days as long as under 50
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1;
//               }
//               // increase quality of backstage passes again if less than 6 days and still under 50
//             }
//           }
//           // deals with increasing quality of backstage passes
//         }
//       }
//
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       // deals with reducing sellIn of all items except Sulfuras
//
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1;
//               }
//               //reduces quality of items by 1 as long as they're > 0, not Sulfuras, not Backstage passes and not Aged Brie
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality;
//           }
//           //reduces quality of Backstage passes to 0 after their sellIn date
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//           //increases the quality of Aged Brie and backstage passes by their base 1 increase each time
//         }
//       }
//     }
//
//     return this.items;
//   }
}
