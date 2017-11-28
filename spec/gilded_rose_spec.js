describe("Gilded Rose", function() {
  var shop;

  beforeEach(function() {
    gildedRose = new Shop([ new Item("foo", 10, 10),
                            new Item("Aged Brie", 10, 49),
                            new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
                            new Item("Sword", 9, 2),
                            new Item("Sulfuras, Hand of Ragnaros", 4, 80),
                            new Item("Shield", 2, 30)]);
  });

  describe("Creating Items", function() {
    it("creates an item when handed the correct parameters", function() {
      expect(gildedRose.items[0]).toEqual(jasmine.objectContaining({ name: "foo", sellIn: 10, quality: 10 }));
    });
  });

  describe("Updating Item values", function() {
    it("never allows item quality to go above 50", function() {
      for(var i = 0; i < 2; i++) {
        gildedRose.updateQuality();
      }
      expect(gildedRose.items[1].sellIn).toEqual(8);
      expect(gildedRose.items[1].quality).toEqual(50);
    });

    it("never allows item quality to go below 0", function() {
      for(var i = 0; i < 4; i++) {
        gildedRose.updateQuality();
      }
      expect(gildedRose.items[3].sellIn).toEqual(5);
      expect(gildedRose.items[3].quality).toEqual(0);
    });

    describe("Standard Items", function() {
      it("alters the sellIn and quality values on a normal item after a day has passed", function() {
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).toEqual(9);
        expect(gildedRose.items[0].quality).toEqual(9);
      });

      it("adoubles the reduction in quality value after sellIn has passed", function() {
        for(var i = 0; i < 6; i++) {
          gildedRose.updateQuality();
        }
        expect(gildedRose.items[5].sellIn).toEqual(-4);
        expect(gildedRose.items[5].quality).toEqual(20);
      });
    });

    describe("Aged Brie", function() {
      it("alters the sellIn and quality values of Aged Brie as expected", function() {
        gildedRose.updateQuality();
        expect(gildedRose.items[1].sellIn).toEqual(9);
        expect(gildedRose.items[1].quality).toEqual(50);
      });

      xit("alters the sellIn and quality values of Aged Brie as expected when sellIn reaches 0", function() {
        for(var i = 0; i < 11; i++) {
          gildedRose.updateQuality();
        }
        expect(gildedRose.items[1].sellIn).toEqual(-1);
        expect(gildedRose.items[1].quality).toEqual(0);
      });
    });

    describe("Backstage Passes", function() {
      it("alters the sellIn and quality values of Backstage passes as expected when more than 10 days until sellIn", function() {
        gildedRose.updateQuality();
        expect(gildedRose.items[2].sellIn).toEqual(10);
        expect(gildedRose.items[2].quality).toEqual(21);
      });

      it("alters the sellIn and quality values of Backstage passes as expected when less than 10 days until sellIn", function() {
        for(var i = 0; i < 2; i++) {
          gildedRose.updateQuality();
        }
        expect(gildedRose.items[2].sellIn).toEqual(9);
        expect(gildedRose.items[2].quality).toEqual(23);
      });

      it("alters the sellIn and quality values of Backstage passes as expected when less than 5 days until sellIn", function() {
        for(var i = 0; i < 6; i++) {
          gildedRose.updateQuality();
        }
        expect(gildedRose.items[2].sellIn).toEqual(5);
        expect(gildedRose.items[2].quality).toEqual(31);
      });

      it("alters the sellIn and quality values of Backstage passes as expected when sellIn reaches 0", function() {
        for(var i = 0; i < 12; i++) {
          gildedRose.updateQuality();
        }
        expect(gildedRose.items[2].sellIn).toEqual(-1);
        expect(gildedRose.items[2].quality).toEqual(0);
      });
    });

    describe("Sulfuras", function() {
      it("neither the sellIn nor quality values change", function() {
        gildedRose.updateQuality();
        expect(gildedRose.items[4].sellIn).toEqual(4);
        expect(gildedRose.items[4].quality).toEqual(80);
      });

      xit("should not have a quality more than 50", function() {
        gildedRose.updateQuality();
        expect(gildedRose.items[4].sellIn).toEqual(4);
        expect(gildedRose.items[4].quality).toEqual(50);
      });
    });
  });
});
