describe("Gilded Rose", function() {
  var shop;

  beforeEach(function() {
    gildedRose = new Shop([ new Item("foo", 10, 10),
                            new Item("Aged Brie", 2, 8),
                            new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20)]);
  });

  describe("Creating Items", function() {
    it("creates an item when handed the correct parameters", function() {
      expect(gildedRose.items[0]).toEqual(jasmine.objectContaining({ name: "foo", sellIn: 10, quality: 10 }));
    });
  });

  describe("Updating Item values", function() {
    it("changes the sellIn and quality values on a normal item after a day has passed", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(9);
      expect(gildedRose.items[0].quality).toEqual(9);
    });

    it("alters the sellIn and quality values of Aged Brie as expected", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[1].sellIn).toEqual(1);
      expect(gildedRose.items[1].quality).toEqual(9);
    });

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
  });
});
