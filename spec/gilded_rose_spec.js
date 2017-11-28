describe("Gilded Rose", function() {
  var shop;

  beforeEach(function() {
    gildedRose = new Shop([ new Item("foo", 10, 10) ]);
  });

  describe("Creating Items", function() {
    it("creates an item when handed the correct parameters", function() {
      expect(gildedRose.items[0]).toEqual(jasmine.objectContaining({ name: "foo", sellIn: 10, quality: 10 }));
    });
  });

  describe("Updating Item values", function() {
    it("changes the sellIn and quality values on a normal item after a day has passed", function() {
      var items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });
  });
});
